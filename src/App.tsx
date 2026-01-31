// AWS Cloud Kigali - Main Application
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/common/Layout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { QuizSelection } from './pages/QuizSelection';
import { QuizPlay } from './pages/QuizPlay';
import { Progress } from './pages/Progress';
import { Profile } from './pages/Profile';
import './styles/global.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="quiz" element={<QuizSelection />} />
            <Route path="quiz/play" element={<QuizPlay />} />
            <Route path="progress" element={<Progress />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
