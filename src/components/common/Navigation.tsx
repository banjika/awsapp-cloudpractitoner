// AWS Cloud Kigali - Navigation Component
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Navigation.module.css';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = async () => {
    await signOut();
    closeMenu();
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoIcon}>&#9729;</span>
          <span className={styles.logoText}>AWS Cloud Kigali</span>
        </NavLink>

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerOpen : ''}`} />
        </button>

        <div className={`${styles.menuContainer} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.menu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Ahabanza / Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quiz"
                className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Ikizamini / Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/progress"
                className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                onClick={closeMenu}
              >
                Aho Ugeze / Progress
              </NavLink>
            </li>
            {isAuthenticated ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) => `${styles.menuLink} ${isActive ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    <span className={styles.userInfo}>
                      {user?.photoURL && (
                        <img src={user.photoURL} alt="" className={styles.userAvatar} />
                      )}
                      {user?.displayName || 'Profile'}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <button onClick={handleSignOut} className={styles.signOutButton}>
                    Sohoka / Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) => `${styles.menuLink} ${styles.loginLink} ${isActive ? styles.active : ''}`}
                  onClick={closeMenu}
                >
                  Injira / Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
