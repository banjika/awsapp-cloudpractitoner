// AWS Cloud Kigali - Home Page
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/common/Button';
import styles from './Home.module.css';

export function Home() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            <span className={styles.titleMain}>AWS Cloud Kigali</span>
            <span className={styles.titleSub}>Tegura Ikizamini Cyawe</span>
          </h1>
          <p className={styles.subtitle}>
            Prepare for your AWS Cloud Practitioner certification with culturally relevant
            examples from Rwanda and East Africa. Learn cloud concepts through familiar
            analogies like mobile money, moto taxis, and local markets.
          </p>
          <div className={styles.heroActions}>
            <Link to="/quiz">
              <Button size="lg">
                Tangira Kwiga / Start Learning
              </Button>
            </Link>
            {!isAuthenticated && (
              <Link to="/login">
                <Button variant="outline" size="lg">
                  Injira / Sign In
                </Button>
              </Link>
            )}
          </div>
          {user && (
            <p className={styles.welcomeBack}>
              Murakaza neza, {user.displayName}! / Welcome back!
            </p>
          )}
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.cloudIcon}>&#9729;</div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Ibyo Ukora / What You Get</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#128218;</div>
            <h3>300+ Ibibazo / Questions</h3>
            <p>
              Practice with questions covering all four exam domains: Cloud Concepts,
              Security & Compliance, Technology, and Billing & Pricing.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#127758;</div>
            <h3>Ingero z'Ahantu / Local Examples</h3>
            <p>
              Understand AWS through familiar concepts: MTN MoMo for billing,
              motorcycle taxis for load balancing, and coffee farming for CI/CD.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#128200;</div>
            <h3>Gukurikirana Iterambere / Track Progress</h3>
            <p>
              Monitor your study progress, identify weak areas, and know when
              you're ready to take the exam.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#127942;</div>
            <h3>Ibihembo n'Amanota / Badges & Points</h3>
            <p>
              Earn points for correct answers, unlock badges for milestones,
              and maintain your study streak.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#128241;</div>
            <h3>Gukora Offline / Works Offline</h3>
            <p>
              Study anywhere, even without internet. Your progress syncs
              automatically when you're back online.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>&#128242;</div>
            <h3>Bikora kuri Telefoni / Mobile-First</h3>
            <p>
              Designed for smartphones first. Study comfortably on any device,
              from basic phones to computers.
            </p>
          </div>
        </div>
      </section>

      {/* Exam Domains Section */}
      <section className={styles.domains}>
        <h2 className={styles.sectionTitle}>Ibice by'Ikizamini / Exam Domains</h2>
        <div className={styles.domainGrid}>
          <div className={styles.domainCard} style={{ '--domain-color': 'var(--color-primary)' } as React.CSSProperties}>
            <div className={styles.domainPercentage}>35%</div>
            <h3>Cloud Concepts</h3>
            <p>Imyumvire ya Cloud / Understanding cloud fundamentals and AWS value proposition</p>
          </div>

          <div className={styles.domainCard} style={{ '--domain-color': 'var(--color-accent)' } as React.CSSProperties}>
            <div className={styles.domainPercentage}>30%</div>
            <h3>Security & Compliance</h3>
            <p>Umutekano / Shared responsibility, access management, and compliance</p>
          </div>

          <div className={styles.domainCard} style={{ '--domain-color': 'var(--color-secondary)' } as React.CSSProperties}>
            <div className={styles.domainPercentage}>25%</div>
            <h3>Technology</h3>
            <p>Ikoranabuhanga / Core AWS services, infrastructure, and architecture</p>
          </div>

          <div className={styles.domainCard} style={{ '--domain-color': '#9B59B6' } as React.CSSProperties}>
            <div className={styles.domainPercentage}>10%</div>
            <h3>Billing & Pricing</h3>
            <p>Kwishyura / Pricing models, cost management, and billing support</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2>Witeguye Gutangira? / Ready to Start?</h2>
        <p>Begin your AWS certification journey today. Track your progress and master cloud computing with local context.</p>
        <Link to="/quiz">
          <Button size="lg">
            Tangira Ikizamini / Start a Quiz
          </Button>
        </Link>
      </section>
    </div>
  );
}
