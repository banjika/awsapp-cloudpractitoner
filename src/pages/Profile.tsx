// AWS Cloud Kigali - Profile Page
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/common/Button';
import styles from './Profile.module.css';

export function Profile() {
  const { user, accountType, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  const getAccountTypeLabel = () => {
    switch (accountType) {
      case 'google':
        return 'Google Account';
      case 'email':
        return 'Email Account';
      case 'guest':
        return 'Umushyitsi / Guest Mode';
    }
  };

  return (
    <div className={styles.profile}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName} />
            ) : (
              <span className={styles.avatarPlaceholder}>
                {user.displayName.charAt(0).toUpperCase()}
              </span>
            )}
          </div>
          <h1>{user.displayName}</h1>
          {user.email && <p className={styles.email}>{user.email}</p>}
          <span className={styles.accountType}>{getAccountTypeLabel()}</span>
        </div>

        {accountType === 'guest' && (
          <div className={styles.guestWarning}>
            <div className={styles.warningIcon}>&#9888;</div>
            <div>
              <p><strong>Ukoresha nk'umushyitsi</strong></p>
              <p>Amakuru yawe abitswe gusa kuri iyi esansi. Kora konti kugirango ubike iterambere ryawe ku byuma byose.</p>
              <p className={styles.warningEn}>
                Your data is stored only on this device. Create an account to save your progress across all devices.
              </p>
              <Button
                variant="primary"
                onClick={() => navigate('/login')}
                className={styles.upgradeButton}
              >
                Kora Konti / Create Account
              </Button>
            </div>
          </div>
        )}

        <div className={styles.section}>
          <h2>Amategeko / Settings</h2>
          <div className={styles.settingsList}>
            <div className={styles.settingItem}>
              <span className={styles.settingLabel}>Ururimi / Language</span>
              <span className={styles.settingValue}>English / Kinyarwanda</span>
            </div>
            <div className={styles.settingItem}>
              <span className={styles.settingLabel}>Kwibutsa Kwiga / Study Reminders</span>
              <span className={styles.settingValue}>Byafunzwe / Enabled</span>
            </div>
            <div className={styles.settingItem}>
              <span className={styles.settingLabel}>Uburyo bwo Gukora Offline</span>
              <span className={styles.settingValue}>Byemewe / Available</span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2>Amakuru / Data</h2>
          <div className={styles.dataActions}>
            <Button variant="outline" fullWidth>
              Ohereza Amakuru / Export Data
            </Button>
            <p className={styles.dataNote}>
              Vanaho amakuru yawe yose muri JSON / Download all your data as JSON
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button variant="danger" fullWidth onClick={handleSignOut}>
            Sohoka / Sign Out
          </Button>
        </div>

        <div className={styles.footer}>
          <p>AWS Cloud Kigali v1.0.0</p>
          <p>Yakozwe n'urukundo mu Rwanda / Made with love in Rwanda</p>
        </div>
      </div>
    </div>
  );
}
