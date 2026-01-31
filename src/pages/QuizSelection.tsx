// AWS Cloud Kigali - Quiz Selection Page
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { ExamDomain, QuizMode, EXAM_DOMAIN_LABELS, EXAM_DOMAIN_WEIGHTS } from '../types';
import styles from './QuizSelection.module.css';

export function QuizSelection() {
  const [selectedDomain, setSelectedDomain] = useState<ExamDomain | 'all'>('all');
  const [selectedMode, setSelectedMode] = useState<QuizMode>('practice');
  const [questionCount, setQuestionCount] = useState(10);
  const navigate = useNavigate();

  const startQuiz = () => {
    const params = new URLSearchParams({
      mode: selectedMode,
      count: questionCount.toString(),
    });
    if (selectedDomain !== 'all') {
      params.set('domain', selectedDomain);
    }
    navigate(`/quiz/play?${params.toString()}`);
  };

  const domains: (ExamDomain | 'all')[] = [
    'all',
    'cloud-concepts',
    'security-compliance',
    'technology',
    'billing-pricing',
  ];

  const domainLabels: Record<ExamDomain | 'all', string> = {
    'all': 'Byose / All Domains',
    ...EXAM_DOMAIN_LABELS,
  };

  const domainDescriptions: Record<ExamDomain | 'all', string> = {
    'all': 'Practice questions from all four exam domains',
    'cloud-concepts': 'AWS Cloud value proposition, economics, and design principles',
    'security-compliance': 'Shared responsibility, access management, and security services',
    'technology': 'Core AWS services, infrastructure, and deployment methods',
    'billing-pricing': 'Pricing models, account structures, and billing support',
  };

  return (
    <div className={styles.selection}>
      <div className={styles.header}>
        <h1>Hitamo Ikizamini / Choose Your Quiz</h1>
        <p>Hitamo uburyo bwo kwiga n'icyiciro cy'ibibazo ushaka</p>
        <p className={styles.headerEn}>Select your study mode and question domain</p>
      </div>

      {/* Mode Selection */}
      <section className={styles.section}>
        <h2>Uburyo / Study Mode</h2>
        <div className={styles.modeGrid}>
          <button
            className={`${styles.modeCard} ${selectedMode === 'practice' ? styles.selected : ''}`}
            onClick={() => setSelectedMode('practice')}
          >
            <div className={styles.modeIcon}>&#128218;</div>
            <h3>Kwimenyereza / Practice</h3>
            <p>
              Reba ibisobanuro nyuma yo gusubiza buri kibazo.
              Wige utihutishije.
            </p>
            <p className={styles.modeDescEn}>
              See explanations after each answer. Learn at your own pace.
            </p>
            <ul className={styles.modeFeatures}>
              <li>Ibisobanuro byihuse / Instant feedback</li>
              <li>Nta gihe kigenwe / No time limit</li>
              <li>Ingero z'ahantu / Cultural analogies</li>
            </ul>
          </button>

          <button
            className={`${styles.modeCard} ${selectedMode === 'exam' ? styles.selected : ''}`}
            onClick={() => setSelectedMode('exam')}
          >
            <div className={styles.modeIcon}>&#9201;</div>
            <h3>Ikizamini / Exam Simulation</h3>
            <p>
              Imyitozo isa n'ikizamini nyacyo.
              Igihe cyigenwe nk'uko biri mu kizamini.
            </p>
            <p className={styles.modeDescEn}>
              Timed practice like the real exam. Test your readiness.
            </p>
            <ul className={styles.modeFeatures}>
              <li>90 amasegonda / 90 seconds per question</li>
              <li>Nta bisobanuro hagati / No mid-quiz explanations</li>
              <li>Amanota yo gusorezwa / Final score report</li>
            </ul>
          </button>
        </div>
      </section>

      {/* Domain Selection */}
      <section className={styles.section}>
        <h2>Icyiciro / Domain</h2>
        <div className={styles.domainGrid}>
          {domains.map((domain) => (
            <button
              key={domain}
              className={`${styles.domainCard} ${selectedDomain === domain ? styles.selected : ''}`}
              onClick={() => setSelectedDomain(domain)}
            >
              <div className={styles.domainHeader}>
                <span className={styles.domainName}>{domainLabels[domain]}</span>
                {domain !== 'all' && (
                  <span className={styles.domainWeight}>
                    {Math.round(EXAM_DOMAIN_WEIGHTS[domain] * 100)}%
                  </span>
                )}
              </div>
              <p className={styles.domainDesc}>{domainDescriptions[domain]}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Question Count */}
      <section className={styles.section}>
        <h2>Umubare w'ibibazo / Number of Questions</h2>
        <div className={styles.countGrid}>
          {[5, 10, 20, 30, 65].map((count) => (
            <button
              key={count}
              className={`${styles.countButton} ${questionCount === count ? styles.selected : ''}`}
              onClick={() => setQuestionCount(count)}
            >
              {count}
              {count === 65 && <span className={styles.countLabel}>Full Exam</span>}
            </button>
          ))}
        </div>
        {selectedMode === 'exam' && (
          <p className={styles.timeEstimate}>
            Igihe cyateganijwe / Estimated time: ~{Math.round(questionCount * 1.5)} iminota / minutes
          </p>
        )}
      </section>

      {/* Start Button */}
      <div className={styles.startSection}>
        <Button size="lg" onClick={startQuiz}>
          Tangira Ikizamini / Start Quiz
        </Button>
        <p className={styles.startInfo}>
          {questionCount} ibibazo {selectedDomain !== 'all' ? `bya ${domainLabels[selectedDomain]}` : ''}
          {selectedMode === 'exam' ? ' (Igihe kigenwe / Timed)' : ' (Kwimenyereza / Practice)'}
        </p>
      </div>
    </div>
  );
}
