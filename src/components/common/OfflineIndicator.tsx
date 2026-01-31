// AWS Cloud Kigali - Offline Indicator Component
import { useOnlineStatus } from '../../hooks/useOnlineStatus';
import styles from './OfflineIndicator.module.css';

export function OfflineIndicator() {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className={styles.indicator}>
      <span className={styles.icon}>&#9888;</span>
      <span className={styles.text}>
        Nta murongo wa interineti / Offline Mode
      </span>
    </div>
  );
}
