// AWS Cloud Kigali - Login Page
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/common/Button';
import styles from './Login.module.css';

type AuthMode = 'login' | 'signup';

export function Login() {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signInWithGoogle, signInWithEmail, signUp, continueAsGuest } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await signInWithEmail(email, password);
      } else {
        await signUp(email, password, name);
      }
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleGuestMode = () => {
    continueAsGuest();
    navigate('/');
  };

  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1>
            {mode === 'login' ? 'Injira / Sign In' : 'Iyandikishe / Sign Up'}
          </h1>
          <p className={styles.subtitle}>
            {mode === 'login'
              ? 'Injira muri konti yawe kugirango ukurikire iterambere ryawe'
              : 'Kora konti nshya kugirango utangire kwiga'}
          </p>
          <p className={styles.subtitleEn}>
            {mode === 'login'
              ? 'Sign in to track your progress across devices'
              : 'Create an account to start learning'}
          </p>
        </div>

        {error && (
          <div className={styles.error}>
            <span className={styles.errorIcon}>&#9888;</span>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.form}>
          {mode === 'signup' && (
            <div className={styles.field}>
              <label htmlFor="name">Izina / Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="email">Imeli / Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Ijambo ry'ibanga / Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              minLength={6}
            />
          </div>

          <Button type="submit" fullWidth loading={loading}>
            {mode === 'login' ? 'Injira / Sign In' : 'Iyandikishe / Sign Up'}
          </Button>
        </form>

        <div className={styles.divider}>
          <span>cyangwa / or</span>
        </div>

        <div className={styles.socialButtons}>
          <Button
            variant="outline"
            fullWidth
            onClick={handleGoogleSignIn}
            disabled={loading}
          >
            <span className={styles.googleIcon}>G</span>
            Injira na Google / Sign in with Google
          </Button>

          <Button
            variant="ghost"
            fullWidth
            onClick={handleGuestMode}
            disabled={loading}
          >
            Komeza nk'umushyitsi / Continue as Guest
          </Button>
        </div>

        <div className={styles.toggle}>
          {mode === 'login' ? (
            <p>
              Ntufite konti? / Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('signup')}
                className={styles.toggleButton}
              >
                Iyandikishe / Sign Up
              </button>
            </p>
          ) : (
            <p>
              Usanzwe ufite konti? / Already have an account?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className={styles.toggleButton}
              >
                Injira / Sign In
              </button>
            </p>
          )}
        </div>

        <div className={styles.guestNote}>
          <p>
            <strong>Icyitonderwa / Note:</strong> Ukoresha nk'umushyitsi, amakuru yawe
            azabikwa gusa kuri iyi esansi. Kora konti kugirango ubike iterambere ryawe.
          </p>
          <p className={styles.guestNoteEn}>
            As a guest, your data is stored only on this device. Create an account
            to save your progress across devices.
          </p>
        </div>
      </div>
    </div>
  );
}
