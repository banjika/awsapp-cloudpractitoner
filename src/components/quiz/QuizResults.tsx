// AWS Cloud Kigali - Quiz Results Component
import { Question, QuizMode, EXAM_DOMAIN_LABELS, ExamDomain } from '../../types';
import { Button } from '../common/Button';
import styles from './QuizResults.module.css';

interface QuizResultsProps {
  questions: Question[];
  userAnswers: Record<string, string>;
  correctCount: number;
  mode: QuizMode;
  onRestart: () => void;
  onReview: () => void;
}

export function QuizResults({
  questions,
  userAnswers,
  correctCount,
  mode,
  onRestart,
  onReview,
}: QuizResultsProps) {
  const totalQuestions = questions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const passed = percentage >= 70;

  // Calculate domain breakdown
  const domainResults: Record<ExamDomain, { correct: number; total: number }> = {
    'cloud-concepts': { correct: 0, total: 0 },
    'security-compliance': { correct: 0, total: 0 },
    'technology': { correct: 0, total: 0 },
    'billing-pricing': { correct: 0, total: 0 },
  };

  questions.forEach(question => {
    domainResults[question.domain].total += 1;
    if (userAnswers[question.id] === question.correctAnswerId) {
      domainResults[question.domain].correct += 1;
    }
  });

  const getMotivationalMessage = () => {
    if (percentage >= 90) {
      return {
        en: "Excellent! You're ready for the exam!",
        rw: "Byiza cyane! Witeguye ikizamini!",
      };
    } else if (percentage >= 70) {
      return {
        en: "Good job! Keep practicing to improve further.",
        rw: "Wabigize neza! Komeza kwimenyereza.",
      };
    } else if (percentage >= 50) {
      return {
        en: "You're making progress. Focus on weak areas.",
        rw: "Uraterwa imbere. Komeza kwimenyereza.",
      };
    } else {
      return {
        en: "Keep studying! Every expert was once a beginner.",
        rw: "Komeza kwiga! Buri umuhanga yatangiye nk'umutangizi.",
      };
    }
  };

  const message = getMotivationalMessage();

  return (
    <div className={styles.results}>
      <div className={styles.card}>
        {/* Score Circle */}
        <div className={styles.scoreSection}>
          <div
            className={`${styles.scoreCircle} ${passed ? styles.passed : styles.failed}`}
            style={{ '--score': `${percentage}%` } as React.CSSProperties}
          >
            <span className={styles.scoreValue}>{percentage}%</span>
          </div>
          <div className={styles.scoreDetails}>
            <h2>{passed ? 'Watsinze! / Passed!' : 'Komeza Kwiga / Keep Studying'}</h2>
            <p className={styles.scoreText}>
              {correctCount} kuri {totalQuestions} byasubijwe neza
            </p>
            <p className={styles.scoreTextEn}>
              {correctCount} of {totalQuestions} correct
            </p>
          </div>
        </div>

        {/* Motivational Message */}
        <div className={styles.message}>
          <p>{message.rw}</p>
          <p className={styles.messageEn}>{message.en}</p>
        </div>

        {/* Domain Breakdown */}
        <div className={styles.breakdown}>
          <h3>Ibisubizo ku Byiciro / Domain Breakdown</h3>
          <div className={styles.domainList}>
            {(Object.keys(domainResults) as ExamDomain[]).map(domain => {
              const result = domainResults[domain];
              if (result.total === 0) return null;
              const domainPercentage = Math.round((result.correct / result.total) * 100);
              const domainPassed = domainPercentage >= 70;

              return (
                <div key={domain} className={styles.domainItem}>
                  <div className={styles.domainHeader}>
                    <span className={styles.domainName}>{EXAM_DOMAIN_LABELS[domain]}</span>
                    <span className={`${styles.domainScore} ${domainPassed ? styles.domainPassed : styles.domainFailed}`}>
                      {result.correct}/{result.total}
                    </span>
                  </div>
                  <div className={styles.domainBar}>
                    <div
                      className={`${styles.domainProgress} ${domainPassed ? styles.domainPassed : styles.domainFailed}`}
                      style={{ width: `${domainPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Exam Mode Stats */}
        {mode === 'exam' && (
          <div className={styles.examStats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>{percentage >= 70 ? '&#10003;' : '&#10007;'}</span>
              <span className={styles.statLabel}>
                {percentage >= 70 ? 'Passing Score (70%)' : 'Below Passing (70%)'}
              </span>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className={styles.actions}>
          <Button size="lg" fullWidth onClick={onRestart}>
            Tangira Ikizamini Gishya / Start New Quiz
          </Button>
          <Button variant="outline" fullWidth onClick={onReview}>
            Reba Ibisubizo Byose / Review All Answers
          </Button>
        </div>

        {/* Tips based on performance */}
        {percentage < 70 && (
          <div className={styles.tips}>
            <h4>Inama / Tips</h4>
            <ul>
              {(Object.keys(domainResults) as ExamDomain[])
                .filter(domain => {
                  const result = domainResults[domain];
                  return result.total > 0 && (result.correct / result.total) < 0.7;
                })
                .map(domain => (
                  <li key={domain}>
                    Imenyereze {EXAM_DOMAIN_LABELS[domain]} / Practice {EXAM_DOMAIN_LABELS[domain]}
                  </li>
                ))}
              <li>Fata umwanya wo gusoma ibisobanuro / Take time to read explanations</li>
              <li>Koresha ingero z'ahantu kumenyera / Use local examples to understand</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
