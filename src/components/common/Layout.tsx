// AWS Cloud Kigali - Main Layout Component
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import { OfflineIndicator } from './OfflineIndicator';
import styles from './Layout.module.css';

export function Layout() {
  return (
    <div className={styles.layout}>
      <OfflineIndicator />
      <Navigation />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <p>AWS Cloud Kigali - Tegura Ikizamini Cyawe</p>
        <p className={styles.footerSubtext}>Prepare for your AWS Cloud Practitioner exam</p>
      </footer>
    </div>
  );
}
