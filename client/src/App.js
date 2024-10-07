import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import Casual from './pages/Casual';
import Ranked from './pages/Ranked';
import Competition from './pages/Competition';
import Tournaments from './pages/Tournaments';
import MatchHistory from './pages/Match_history';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/casual" element={<Casual />} />
        <Route path="/ranked" element={<Ranked />} />
        <Route path="/Competition" element={<Competition />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/Match_history" element={<MatchHistory />} />
        {/* Route pour gérer les pages non trouvées */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
