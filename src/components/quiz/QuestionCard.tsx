// AWS Cloud Kigali - Question Card Component
import { Question, QuizMode, EXAM_DOMAIN_LABELS } from '../../types';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelectAnswer: (answerId: string) => void;
  showExplanation: boolean;
  mode: QuizMode;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onSelectAnswer,
  showExplanation,
  mode,
}: QuestionCardProps) {
  const isCorrect = selectedAnswer === question.correctAnswerId;

  return (
    <div className={styles.card}>
      {/* Domain Badge */}
      <div className={styles.domainBadge}>
        {EXAM_DOMAIN_LABELS[question.domain]}
      </div>

      {/* Question Text */}
      <div className={styles.questionText}>
        <p>{question.text}</p>
      </div>

      {/* Options */}
      <div className={styles.options}>
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrectOption = option.id === question.correctAnswerId;

          let optionClass = styles.option;
          if (showExplanation) {
            if (isCorrectOption) {
              optionClass += ` ${styles.correct}`;
            } else if (isSelected && !isCorrectOption) {
              optionClass += ` ${styles.incorrect}`;
            }
          } else if (isSelected) {
            optionClass += ` ${styles.selected}`;
          }

          return (
            <button
              key={option.id}
              className={optionClass}
              onClick={() => !showExplanation && onSelectAnswer(option.id)}
              disabled={showExplanation}
            >
              <span className={styles.optionLetter}>
                {String.fromCharCode(65 + index)}
              </span>
              <span className={styles.optionText}>{option.text}</span>
              {showExplanation && isCorrectOption && (
                <span className={styles.correctIcon}>&#10003;</span>
              )}
              {showExplanation && isSelected && !isCorrectOption && (
                <span className={styles.incorrectIcon}>&#10007;</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Explanation (shown in practice mode after answer) */}
      {showExplanation && (
        <div className={styles.explanation}>
          <div className={`${styles.resultBanner} ${isCorrect ? styles.resultCorrect : styles.resultIncorrect}`}>
            {isCorrect ? (
              <>
                <span className={styles.resultIcon}>&#10003;</span>
                <span>Ni byo! / Correct!</span>
              </>
            ) : (
              <>
                <span className={styles.resultIcon}>&#10007;</span>
                <span>Ntibyiza! / Incorrect!</span>
              </>
            )}
          </div>

          <div className={styles.explanationContent}>
            <h4>Ibisobanuro / Explanation</h4>
            <p>{question.explanation.correctReason}</p>

            {!isCorrect && selectedAnswer && question.explanation.incorrectReasons[selectedAnswer] && (
              <div className={styles.incorrectReason}>
                <strong>Impamvu igisubizo cyawe kitari cyo / Why your answer was wrong:</strong>
                <p>{question.explanation.incorrectReasons[selectedAnswer]}</p>
              </div>
            )}

            {/* Cultural Analogy */}
            <div className={styles.analogy}>
              <div className={styles.analogyHeader}>
                <span className={styles.analogyIcon}>&#127758;</span>
                <span>Ingero z'Ahantu / Local Example</span>
              </div>
              <div className={styles.analogyContent}>
                <p className={styles.analogyConcept}>
                  <strong>{question.culturalContext.primaryAnalogy.concept}</strong>
                </p>
                <p className={styles.analogyText}>
                  {question.culturalContext.primaryAnalogy.analogy}
                </p>
                <p className={styles.analogyExample}>
                  {question.culturalContext.primaryAnalogy.localExample}
                </p>
              </div>
            </div>

            {/* Additional local examples */}
            {question.culturalContext.localExamples.length > 0 && (
              <div className={styles.additionalExamples}>
                <strong>Izindi ngero / More examples:</strong>
                <ul>
                  {question.culturalContext.localExamples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Rwandan business case if available */}
            {question.culturalContext.rwandanBusinessCase && (
              <div className={styles.businessCase}>
                <strong>Urugero rw'ubucuruzi mu Rwanda / Rwandan Business Example:</strong>
                <p>{question.culturalContext.rwandanBusinessCase}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
