// AWS Cloud Kigali - IndexedDB Database Service
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import {
  Question,
  UserProgress,
  GamificationState,
  AnswerRecord,
  StudySession,
  SyncItem,
  UserPreferences,
  DEFAULT_USER_PROGRESS,
  DEFAULT_GAMIFICATION_STATE,
  DEFAULT_USER_PREFERENCES,
} from '../types';

// ============================================
// Database Schema
// ============================================

interface AWSCloudKigaliDB extends DBSchema {
  questions: {
    key: string;
    value: Question;
    indexes: { 'by-domain': string; 'by-difficulty': string };
  };
  userProgress: {
    key: string;
    value: UserProgress & { id: string };
  };
  gamification: {
    key: string;
    value: GamificationState & { id: string };
  };
  preferences: {
    key: string;
    value: UserPreferences & { id: string };
  };
  answerRecords: {
    key: string;
    value: AnswerRecord;
    indexes: { 'by-timestamp': Date; 'by-question': string };
  };
  studySessions: {
    key: string;
    value: StudySession;
    indexes: { 'by-date': Date };
  };
  bookmarks: {
    key: string;
    value: { id: string; questionId: string; createdAt: Date };
  };
  syncQueue: {
    key: string;
    value: SyncItem;
    indexes: { 'by-timestamp': Date };
  };
  metadata: {
    key: string;
    value: { key: string; value: unknown };
  };
}

const DB_NAME = 'aws-cloud-kigali';
const DB_VERSION = 1;

let dbInstance: IDBPDatabase<AWSCloudKigaliDB> | null = null;

// ============================================
// Database Initialization
// ============================================

export async function initDatabase(): Promise<IDBPDatabase<AWSCloudKigaliDB>> {
  if (dbInstance) {
    return dbInstance;
  }

  dbInstance = await openDB<AWSCloudKigaliDB>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Questions store
      if (!db.objectStoreNames.contains('questions')) {
        const questionStore = db.createObjectStore('questions', { keyPath: 'id' });
        questionStore.createIndex('by-domain', 'domain');
        questionStore.createIndex('by-difficulty', 'difficulty');
      }

      // User progress store
      if (!db.objectStoreNames.contains('userProgress')) {
        db.createObjectStore('userProgress', { keyPath: 'id' });
      }

      // Gamification store
      if (!db.objectStoreNames.contains('gamification')) {
        db.createObjectStore('gamification', { keyPath: 'id' });
      }

      // Preferences store
      if (!db.objectStoreNames.contains('preferences')) {
        db.createObjectStore('preferences', { keyPath: 'id' });
      }

      // Answer records store
      if (!db.objectStoreNames.contains('answerRecords')) {
        const answerStore = db.createObjectStore('answerRecords', { keyPath: 'id' });
        answerStore.createIndex('by-timestamp', 'timestamp');
        answerStore.createIndex('by-question', 'questionId');
      }

      // Study sessions store
      if (!db.objectStoreNames.contains('studySessions')) {
        const sessionStore = db.createObjectStore('studySessions', { keyPath: 'id' });
        sessionStore.createIndex('by-date', 'startTime');
      }

      // Bookmarks store
      if (!db.objectStoreNames.contains('bookmarks')) {
        db.createObjectStore('bookmarks', { keyPath: 'id' });
      }

      // Sync queue store
      if (!db.objectStoreNames.contains('syncQueue')) {
        const syncStore = db.createObjectStore('syncQueue', { keyPath: 'id' });
        syncStore.createIndex('by-timestamp', 'timestamp');
      }

      // Metadata store
      if (!db.objectStoreNames.contains('metadata')) {
        db.createObjectStore('metadata', { keyPath: 'key' });
      }
    },
  });

  return dbInstance;
}

// ============================================
// Question Operations
// ============================================

export async function saveQuestions(questions: Question[]): Promise<void> {
  const db = await initDatabase();
  const tx = db.transaction('questions', 'readwrite');

  await Promise.all([
    ...questions.map(q => tx.store.put(q)),
    tx.done,
  ]);
}

export async function getQuestions(): Promise<Question[]> {
  const db = await initDatabase();
  return db.getAll('questions');
}

export async function getQuestionsByDomain(domain: string): Promise<Question[]> {
  const db = await initDatabase();
  return db.getAllFromIndex('questions', 'by-domain', domain);
}

export async function getQuestionById(id: string): Promise<Question | undefined> {
  const db = await initDatabase();
  return db.get('questions', id);
}

// ============================================
// User Progress Operations
// ============================================

const PROGRESS_KEY = 'current-user';

export async function saveUserProgress(progress: UserProgress): Promise<void> {
  const db = await initDatabase();
  await db.put('userProgress', { ...progress, id: PROGRESS_KEY });
}

export async function getUserProgress(): Promise<UserProgress> {
  const db = await initDatabase();
  const progress = await db.get('userProgress', PROGRESS_KEY);
  return progress || DEFAULT_USER_PROGRESS;
}

// ============================================
// Gamification Operations
// ============================================

export async function saveGamificationState(state: GamificationState): Promise<void> {
  const db = await initDatabase();
  await db.put('gamification', { ...state, id: PROGRESS_KEY });
}

export async function getGamificationState(): Promise<GamificationState> {
  const db = await initDatabase();
  const state = await db.get('gamification', PROGRESS_KEY);
  return state || DEFAULT_GAMIFICATION_STATE;
}

// ============================================
// Preferences Operations
// ============================================

export async function savePreferences(prefs: UserPreferences): Promise<void> {
  const db = await initDatabase();
  await db.put('preferences', { ...prefs, id: PROGRESS_KEY });
}

export async function getPreferences(): Promise<UserPreferences> {
  const db = await initDatabase();
  const prefs = await db.get('preferences', PROGRESS_KEY);
  return prefs || DEFAULT_USER_PREFERENCES;
}

// ============================================
// Answer Records Operations
// ============================================

export async function saveAnswerRecord(record: AnswerRecord): Promise<void> {
  const db = await initDatabase();
  await db.put('answerRecords', record);
}

export async function getAnswerRecords(limit?: number): Promise<AnswerRecord[]> {
  const db = await initDatabase();
  const records = await db.getAllFromIndex('answerRecords', 'by-timestamp');
  // Return most recent first
  const sorted = records.sort((a, b) =>
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}

export async function getAnswerRecordsByQuestion(questionId: string): Promise<AnswerRecord[]> {
  const db = await initDatabase();
  return db.getAllFromIndex('answerRecords', 'by-question', questionId);
}

// ============================================
// Study Sessions Operations
// ============================================

export async function saveStudySession(session: StudySession): Promise<void> {
  const db = await initDatabase();
  await db.put('studySessions', session);
}

export async function getStudySessions(limit?: number): Promise<StudySession[]> {
  const db = await initDatabase();
  const sessions = await db.getAll('studySessions');
  const sorted = sessions.sort((a, b) =>
    new Date(b.startTime).getTime() - new Date(a.startTime).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
}

// ============================================
// Bookmarks Operations
// ============================================

export async function addBookmark(questionId: string): Promise<void> {
  const db = await initDatabase();
  await db.put('bookmarks', {
    id: questionId,
    questionId,
    createdAt: new Date(),
  });
}

export async function removeBookmark(questionId: string): Promise<void> {
  const db = await initDatabase();
  await db.delete('bookmarks', questionId);
}

export async function getBookmarks(): Promise<string[]> {
  const db = await initDatabase();
  const bookmarks = await db.getAll('bookmarks');
  return bookmarks.map(b => b.questionId);
}

export async function isBookmarked(questionId: string): Promise<boolean> {
  const db = await initDatabase();
  const bookmark = await db.get('bookmarks', questionId);
  return !!bookmark;
}

// ============================================
// Sync Queue Operations
// ============================================

export async function addToSyncQueue(item: SyncItem): Promise<void> {
  const db = await initDatabase();
  await db.put('syncQueue', item);
}

export async function getSyncQueue(): Promise<SyncItem[]> {
  const db = await initDatabase();
  return db.getAll('syncQueue');
}

export async function clearSyncQueue(): Promise<void> {
  const db = await initDatabase();
  await db.clear('syncQueue');
}

export async function removeSyncItem(id: string): Promise<void> {
  const db = await initDatabase();
  await db.delete('syncQueue', id);
}

// ============================================
// Metadata Operations
// ============================================

export async function setMetadata(key: string, value: unknown): Promise<void> {
  const db = await initDatabase();
  await db.put('metadata', { key, value });
}

export async function getMetadata<T>(key: string): Promise<T | undefined> {
  const db = await initDatabase();
  const item = await db.get('metadata', key);
  return item?.value as T | undefined;
}

// ============================================
// Utility Functions
// ============================================

export async function clearAllData(): Promise<void> {
  const db = await initDatabase();
  await Promise.all([
    db.clear('userProgress'),
    db.clear('gamification'),
    db.clear('preferences'),
    db.clear('answerRecords'),
    db.clear('studySessions'),
    db.clear('bookmarks'),
    db.clear('syncQueue'),
  ]);
}

export async function exportUserData(): Promise<object> {
  const db = await initDatabase();

  return {
    progress: await db.get('userProgress', PROGRESS_KEY),
    gamification: await db.get('gamification', PROGRESS_KEY),
    preferences: await db.get('preferences', PROGRESS_KEY),
    answerRecords: await db.getAll('answerRecords'),
    studySessions: await db.getAll('studySessions'),
    bookmarks: await db.getAll('bookmarks'),
    exportedAt: new Date().toISOString(),
  };
}
