import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import NuhaStory from './components/NuhaStory';
import TharuStory from './components/TharuStory';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (username, password) => {
    if (username === 'nuha' && password === 'nuhababa') {
      setIsAuthenticated(true);
      setCurrentUser('nuha');
      return { success: true, user: 'nuha' };
    } else if (username === 'tharu' && password === 'littleprinces') {
      setIsAuthenticated(true);
      setCurrentUser('tharu');
      return { success: true, user: 'tharu' };
    }
    return { success: false, message: 'Invalid username or password' };
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
  };

  return (
    <Router>
      <div className="App">
        <ScrollProgress user={currentUser} />
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={handleLogin} />}
          />
          <Route
            path="/nuha-story"
            element={
              isAuthenticated && currentUser === 'nuha'
                ? <NuhaStory onLogout={handleLogout} />
                : <Navigate to="/" />
            }
          />
          <Route
            path="/tharu-story"
            element={
              isAuthenticated && currentUser === 'tharu'
                ? <TharuStory onLogout={handleLogout} />
                : <Navigate to="/" />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
