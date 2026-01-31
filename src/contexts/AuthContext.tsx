// AWS Cloud Kigali - Authentication Context
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AccountType } from '../types';

interface AuthContextValue {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  continueAsGuest: () => void;
  accountType: AccountType;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [accountType, setAccountType] = useState<AccountType>('guest');

  // Check for stored user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('aws-cloud-kigali-user');
    const storedAccountType = localStorage.getItem('aws-cloud-kigali-account-type') as AccountType;

    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setAccountType(storedAccountType || 'guest');
      } catch (e) {
        console.error('Failed to parse stored user:', e);
      }
    }
    setLoading(false);
  }, []);

  const signInWithGoogle = async (): Promise<void> => {
    // TODO: Implement with Firebase in Task 3
    // For now, create a mock user
    setLoading(true);
    try {
      // Simulating Google sign-in
      const mockUser: User = {
        uid: 'google-' + Date.now(),
        email: 'user@example.com',
        displayName: 'Google User',
        createdAt: new Date(),
        lastLoginAt: new Date(),
      };
      setUser(mockUser);
      setAccountType('google');
      localStorage.setItem('aws-cloud-kigali-user', JSON.stringify(mockUser));
      localStorage.setItem('aws-cloud-kigali-account-type', 'google');
    } finally {
      setLoading(false);
    }
  };

  const signInWithEmail = async (email: string, password: string): Promise<void> => {
    // TODO: Implement with Firebase in Task 3
    setLoading(true);
    try {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }

      const mockUser: User = {
        uid: 'email-' + Date.now(),
        email,
        displayName: email.split('@')[0],
        createdAt: new Date(),
        lastLoginAt: new Date(),
      };
      setUser(mockUser);
      setAccountType('email');
      localStorage.setItem('aws-cloud-kigali-user', JSON.stringify(mockUser));
      localStorage.setItem('aws-cloud-kigali-account-type', 'email');
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string): Promise<void> => {
    // TODO: Implement with Firebase in Task 3
    setLoading(true);
    try {
      if (!email || !password || !name) {
        throw new Error('All fields are required');
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      const mockUser: User = {
        uid: 'email-' + Date.now(),
        email,
        displayName: name,
        createdAt: new Date(),
        lastLoginAt: new Date(),
      };
      setUser(mockUser);
      setAccountType('email');
      localStorage.setItem('aws-cloud-kigali-user', JSON.stringify(mockUser));
      localStorage.setItem('aws-cloud-kigali-account-type', 'email');
    } finally {
      setLoading(false);
    }
  };

  const signOut = async (): Promise<void> => {
    setUser(null);
    setAccountType('guest');
    localStorage.removeItem('aws-cloud-kigali-user');
    localStorage.removeItem('aws-cloud-kigali-account-type');
  };

  const continueAsGuest = (): void => {
    const guestUser: User = {
      uid: 'guest-' + Date.now(),
      email: '',
      displayName: 'Umushyitsi / Guest',
      createdAt: new Date(),
      lastLoginAt: new Date(),
    };
    setUser(guestUser);
    setAccountType('guest');
    localStorage.setItem('aws-cloud-kigali-user', JSON.stringify(guestUser));
    localStorage.setItem('aws-cloud-kigali-account-type', 'guest');
  };

  const value: AuthContextValue = {
    user,
    loading,
    isAuthenticated: !!user && accountType !== 'guest',
    signInWithGoogle,
    signInWithEmail,
    signUp,
    signOut,
    continueAsGuest,
    accountType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
