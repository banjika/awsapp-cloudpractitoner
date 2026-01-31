// AWS Cloud Kigali - Progress Dashboard Page
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';
import { getUserProgress, getGamificationState } from '../services/database';
import { UserProgress, GamificationState, EXAM_DOMAIN_LABELS, ExamDomain, DEFAULT_USER_PROGRESS, DEFAULT_GAMIFICATION_STATE } from '../types';
import styles from './Progress.module.css';

export function Progress() {
  const [progress, setProgress] = useState<UserProgress>(DEFAULT_USER_PROGRESS);
  const [gamification, setGamification] = useState<GamificationState>(DEFAULT_GAMIFICATION_STATE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProgress();
  }, []);

  const loadProgress = async () => {
    try {
      const [userProgress, gamificationState] = await Promise.all([
        getUserProgress(),
        getGamificationState(),
      ]);
      setProgress(userProgress);
      setGamification(gamificationState);
    } catch (error) {
      console.error('Failed to load progress:', error);
    } finally {
      setLoading(false);
    }
  };

  const calculateOverallAccuracy = () => {
    if (progress.totalQuestionsAttempted === 0) return 0;
    return Math.round((progress.correctAnswers / progress.totalQuestionsAttempted) * 100);
  };

  const getReadinessLevel = () => {
    const score = progress.examReadinessScore;
    if (score >= 80) return { label: 'Witeguye / Ready', color: 'var(--color-success)' };
    if (score >= 60) return { label: 'Hafi yo Kwitegura / Almost Ready', color: 'var(--color-warning)' };
    return { label: 'Komeza Kwiga / Keep Studying', color: 'var(--color-error)' };
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        <p>Turimo gupakura... / Loading...</p>
      </div>
    );
  }

  const hasStarted = progress.totalQuestionsAttempted > 0;
  const readiness = getReadinessLevel();

  return (
    <div className={styles.progress}>
      <div className={styles.header}>
        <h1>Aho Ugeze / Your Progress</h1>
        <p>Kurikirana iterambere ryawe ry'ikizamini</p>
        <p className={styles.headerEn}>Track your exam preparation journey</p>
      </div>

      {!hasStarted ? (
        <div className={styles.empty}>
          <div className={styles.emptyIcon}>&#128218;</div>
          <h2>Nta makuru ahari / No data yet</h2>
          <p>Tangira kwiga kugirango urebe iterambere ryawe hano</p>
          <p className={styles.emptyEn}>Start studying to see your progress here</p>
          <Link to="/quiz">
            <Button size="lg">Tangira Ikizamini / Start a Quiz</Button>
          </Link>
        </div>
      ) : (
        <>
          {/* Overview Cards */}
          <div className={styles.overviewGrid}>
            <div className={styles.overviewCard}>
              <div className={styles.overviewValue}>{progress.totalQuestionsAttempted}</div>
              <div className={styles.overviewLabel}>Ibibazo Byasubijwe / Questions Answered</div>
            </div>

            <div className={styles.overviewCard}>
              <div className={styles.overviewValue}>{calculateOverallAccuracy()}%</div>
              <div className={styles.overviewLabel}>Ubushobozi / Accuracy</div>
            </div>

            <div className={styles.overviewCard}>
              <div className={styles.overviewValue}>{gamification.currentStreak}</div>
              <div className={styles.overviewLabel}>Iminsi Ikurikirana / Day Streak</div>
            </div>

            <div className={styles.overviewCard}>
              <div className={styles.overviewValue}>{gamification.points}</div>
              <div className={styles.overviewLabel}>Amanota / Points</div>
            </div>
          </div>

          {/* Exam Readiness */}
          <div className={styles.readinessSection}>
            <h2>Uburyo Witeguye Ikizamini / Exam Readiness</h2>
            <div className={styles.readinessCard}>
              <div className={styles.readinessScore}>
                <div
                  className={styles.readinessCircle}
                  style={{
                    '--progress': `${progress.examReadinessScore}%`,
                    '--color': readiness.color,
                  } as React.CSSProperties}
                >
                  <span className={styles.readinessValue}>{Math.round(progress.examReadinessScore)}%</span>
                </div>
              </div>
              <div className={styles.readinessInfo}>
                <div className={styles.readinessLabel} style={{ color: readiness.color }}>
                  {readiness.label}
                </div>
                <p>
                  {progress.examReadinessScore >= 70
                    ? 'Ufite ubumenyi buhagije bwo gutsinda ikizamini. Komeza kwimenyereza!'
                    : 'Komeza kwiga kugirango ugere ku kigero cy\'ubumenyi bukenewe.'}
                </p>
                <p className={styles.readinessEn}>
                  {progress.examReadinessScore >= 70
                    ? 'You have good knowledge to pass the exam. Keep practicing!'
                    : 'Keep studying to reach the required knowledge level.'}
                </p>
              </div>
            </div>
          </div>

          {/* Domain Progress */}
          <div className={styles.domainsSection}>
            <h2>Iterambere ku Byiciro / Domain Progress</h2>
            <div className={styles.domainsList}>
              {(Object.keys(progress.domainScores) as ExamDomain[]).map((domain) => {
                const score = progress.domainScores[domain];
                const isWeak = score.accuracy < 70;
                return (
                  <div key={domain} className={styles.domainItem}>
                    <div className={styles.domainHeader}>
                      <span className={styles.domainName}>{EXAM_DOMAIN_LABELS[domain]}</span>
                      <span className={`${styles.domainAccuracy} ${isWeak ? styles.weak : ''}`}>
                        {Math.round(score.accuracy)}%
                      </span>
                    </div>
                    <div className={styles.domainBar}>
                      <div
                        className={`${styles.domainProgress} ${isWeak ? styles.weak : ''}`}
                        style={{ width: `${score.accuracy}%` }}
                      />
                    </div>
                    <div className={styles.domainStats}>
                      <span>{score.correctAnswers}/{score.questionsAttempted} byasubijwe neza / correct</span>
                      {isWeak && <span className={styles.weakLabel}>Aha hakeneye imyitozo / Needs practice</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Weak Areas */}
          {progress.weakAreas.length > 0 && (
            <div className={styles.weakSection}>
              <h2>Aho Ugomba Kwimenyerezaho / Areas to Improve</h2>
              <div className={styles.weakList}>
                {progress.weakAreas.map((area, index) => (
                  <div key={index} className={styles.weakItem}>
                    <span className={styles.weakTopic}>{area.topic}</span>
                    <span className={styles.weakAccuracy}>{Math.round(area.accuracy)}%</span>
                  </div>
                ))}
              </div>
              <Link to="/quiz">
                <Button variant="outline">Imenyerezeho / Practice These</Button>
              </Link>
            </div>
          )}

          {/* Badges */}
          {gamification.badges.length > 0 && (
            <div className={styles.badgesSection}>
              <h2>Ibihembo Byawe / Your Badges</h2>
              <div className={styles.badgeGrid}>
                {gamification.badges.map((badge) => (
                  <div key={badge.id} className={styles.badgeCard}>
                    <div className={styles.badgeIcon}>{badge.icon}</div>
                    <div className={styles.badgeName}>{badge.name}</div>
                    <div className={styles.badgeNameRw}>{badge.nameRw}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className={styles.actions}>
            <Link to="/quiz">
              <Button size="lg">Komeza Kwiga / Continue Studying</Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
