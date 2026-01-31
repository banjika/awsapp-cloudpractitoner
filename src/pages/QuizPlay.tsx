// AWS Cloud Kigali - Quiz Play Page
import { useState, useEffect, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { QuestionCard } from '../components/quiz/QuestionCard';
import { QuizResults } from '../components/quiz/QuizResults';
import { getQuestions } from '../services/database';
import { saveUserProgress, getUserProgress, saveAnswerRecord, saveStudySession } from '../services/database';
import { Question, QuizMode, ExamDomain, QuizState, UserProgress, AnswerRecord, StudySession } from '../types';
import { sampleQuestions } from '../data/questions';
import styles from './QuizPlay.module.css';

const EXAM_TIME_PER_QUESTION = 90; // seconds

export function QuizPlay() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const mode = (searchParams.get('mode') || 'practice') as QuizMode;
  const domain = searchParams.get('domain') as ExamDomain | null;
  const questionCount = parseInt(searchParams.get('count') || '10', 10);

  const [quizState, setQuizState] = useState<QuizState | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [loading, setLoading] = useState(true);

  // Initialize quiz
  useEffect(() => {
    initializeQuiz();
  }, []);

  const initializeQuiz = async () => {
    try {
      // Try to get questions from IndexedDB, fallback to sample questions
      let questions = await getQuestions();
      if (questions.length === 0) {
        questions = sampleQuestions;
      }

      // Filter by domain if specified
      if (domain) {
        questions = questions.filter(q => q.domain === domain);
      }

      // Shuffle and limit questions
      const shuffled = [...questions].sort(() => Math.random() - 0.5);
      const selected = shuffled.slice(0, Math.min(questionCount, shuffled.length));

      const initialState: QuizState = {
        questions: selected,
        currentQuestionIndex: 0,
        userAnswers: {},
        correctAnswers: 0,
        incorrectAnswers: 0,
        timeRemaining: mode === 'exam' ? selected.length * EXAM_TIME_PER_QUESTION : null,
        isComplete: false,
        mode,
        startTime: new Date(),
        selectedDomain: domain,
      };

      setQuizState(initialState);
    } catch (error) {
      console.error('Failed to initialize quiz:', error);
    } finally {
      setLoading(false);
    }
  };

  // Timer for exam mode
  useEffect(() => {
    if (!quizState || mode !== 'exam' || quizState.isComplete || quizState.timeRemaining === null) {
      return;
    }

    const timer = setInterval(() => {
      setQuizState(prev => {
        if (!prev || prev.timeRemaining === null || prev.timeRemaining <= 0) {
          return prev;
        }
        const newTime = prev.timeRemaining - 1;
        if (newTime <= 0) {
          // Time's up - complete the quiz
          return { ...prev, timeRemaining: 0, isComplete: true };
        }
        return { ...prev, timeRemaining: newTime };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [quizState?.isComplete, mode]);

  const handleAnswerSelect = useCallback((answerId: string) => {
    if (!quizState || showExplanation) return;
    setSelectedAnswer(answerId);
  }, [quizState, showExplanation]);

  const handleSubmitAnswer = useCallback(async () => {
    if (!quizState || !selectedAnswer) return;

    const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswerId;

    // Update quiz state
    const newAnswers = { ...quizState.userAnswers, [currentQuestion.id]: selectedAnswer };
    const newCorrect = quizState.correctAnswers + (isCorrect ? 1 : 0);
    const newIncorrect = quizState.incorrectAnswers + (isCorrect ? 0 : 1);

    setQuizState(prev => prev ? {
      ...prev,
      userAnswers: newAnswers,
      correctAnswers: newCorrect,
      incorrectAnswers: newIncorrect,
    } : prev);

    // Save answer record
    const record: AnswerRecord = {
      id: `${Date.now()}-${currentQuestion.id}`,
      oderId: 'current-user',
      questionId: currentQuestion.id,
      selectedAnswerId: selectedAnswer,
      isCorrect,
      timeSpent: 0, // Could track this more precisely
      timestamp: new Date(),
      mode,
    };
    await saveAnswerRecord(record);

    // In practice mode, show explanation
    if (mode === 'practice') {
      setShowExplanation(true);
    } else {
      // In exam mode, move to next question immediately
      moveToNextQuestion();
    }
  }, [quizState, selectedAnswer, mode]);

  const moveToNextQuestion = useCallback(() => {
    if (!quizState) return;

    const nextIndex = quizState.currentQuestionIndex + 1;

    if (nextIndex >= quizState.questions.length) {
      // Quiz complete
      completeQuiz();
    } else {
      setQuizState(prev => prev ? {
        ...prev,
        currentQuestionIndex: nextIndex,
      } : prev);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  }, [quizState]);

  const completeQuiz = useCallback(async () => {
    if (!quizState) return;

    // Save study session
    const session: StudySession = {
      id: `session-${Date.now()}`,
      oderId: 'current-user',
      startTime: quizState.startTime,
      endTime: new Date(),
      questionsAttempted: quizState.questions.length,
      correctAnswers: quizState.correctAnswers,
      domains: [...new Set(quizState.questions.map(q => q.domain))],
      mode,
    };
    await saveStudySession(session);

    // Update user progress
    const currentProgress = await getUserProgress();
    const updatedProgress: UserProgress = {
      ...currentProgress,
      totalQuestionsAttempted: currentProgress.totalQuestionsAttempted + quizState.questions.length,
      correctAnswers: currentProgress.correctAnswers + quizState.correctAnswers,
      lastStudyDate: new Date(),
    };

    // Update domain scores
    quizState.questions.forEach(question => {
      const wasCorrect = quizState.userAnswers[question.id] === question.correctAnswerId;
      const domainScore = updatedProgress.domainScores[question.domain];
      domainScore.questionsAttempted += 1;
      if (wasCorrect) {
        domainScore.correctAnswers += 1;
      }
      domainScore.accuracy = domainScore.questionsAttempted > 0
        ? (domainScore.correctAnswers / domainScore.questionsAttempted) * 100
        : 0;
    });

    // Calculate exam readiness score
    const weights: Record<ExamDomain, number> = {
      'cloud-concepts': 0.35,
      'security-compliance': 0.30,
      'technology': 0.25,
      'billing-pricing': 0.10,
    };

    let readinessScore = 0;
    (Object.keys(weights) as ExamDomain[]).forEach(domain => {
      readinessScore += updatedProgress.domainScores[domain].accuracy * weights[domain];
    });
    updatedProgress.examReadinessScore = readinessScore;

    // Identify weak areas
    updatedProgress.weakAreas = (Object.keys(updatedProgress.domainScores) as ExamDomain[])
      .filter(domain => updatedProgress.domainScores[domain].accuracy < 70)
      .map(domain => ({
        topic: domain,
        domain,
        accuracy: updatedProgress.domainScores[domain].accuracy,
        questionsAttempted: updatedProgress.domainScores[domain].questionsAttempted,
      }));

    await saveUserProgress(updatedProgress);

    setQuizState(prev => prev ? { ...prev, isComplete: true } : prev);
  }, [quizState, mode]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Turimo gutegura ibibazo... / Preparing questions...</p>
      </div>
    );
  }

  if (!quizState || quizState.questions.length === 0) {
    return (
      <div className={styles.empty}>
        <h2>Nta bibazo bihari / No questions available</h2>
        <p>Gerageza kugenzura amakuru cyangwa kuhitamo icyiciro gitandukanye.</p>
        <p className={styles.emptyEn}>Try checking your data or selecting a different domain.</p>
        <Button onClick={() => navigate('/quiz')}>Subira Inyuma / Go Back</Button>
      </div>
    );
  }

  if (quizState.isComplete) {
    return (
      <QuizResults
        questions={quizState.questions}
        userAnswers={quizState.userAnswers}
        correctCount={quizState.correctAnswers}
        mode={mode}
        onRestart={() => navigate('/quiz')}
        onReview={() => {
          setQuizState(prev => prev ? { ...prev, currentQuestionIndex: 0, isComplete: false } : prev);
          setShowExplanation(true);
        }}
      />
    );
  }

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  const progress = ((quizState.currentQuestionIndex + 1) / quizState.questions.length) * 100;

  return (
    <div className={styles.quiz}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.progress}>
          <span className={styles.progressText}>
            {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
          </span>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{ width: `${progress}%` }} />
          </div>
        </div>

        {mode === 'exam' && quizState.timeRemaining !== null && (
          <div className={`${styles.timer} ${quizState.timeRemaining < 60 ? styles.timerLow : ''}`}>
            <span className={styles.timerIcon}>&#9201;</span>
            <span>{formatTime(quizState.timeRemaining)}</span>
          </div>
        )}

        <button className={styles.exitButton} onClick={() => navigate('/quiz')}>
          &#10005;
        </button>
      </div>

      {/* Question */}
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleAnswerSelect}
        showExplanation={showExplanation}
        mode={mode}
      />

      {/* Actions */}
      <div className={styles.actions}>
        {!showExplanation && (
          <Button
            size="lg"
            fullWidth
            onClick={handleSubmitAnswer}
            disabled={!selectedAnswer}
          >
            Emeza Igisubizo / Submit Answer
          </Button>
        )}

        {showExplanation && (
          <Button
            size="lg"
            fullWidth
            onClick={moveToNextQuestion}
          >
            {quizState.currentQuestionIndex < quizState.questions.length - 1
              ? 'Ikibazo Gikurikira / Next Question'
              : 'Reba Ibisubizo / See Results'}
          </Button>
        )}
      </div>

      {/* Score indicator */}
      <div className={styles.scoreIndicator}>
        <span className={styles.correct}>&#10003; {quizState.correctAnswers}</span>
        <span className={styles.incorrect}>&#10007; {quizState.incorrectAnswers}</span>
      </div>
    </div>
  );
}
