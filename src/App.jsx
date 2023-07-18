import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login_form from './components/Login/Login';
import Loader from './components/Loader/Loader';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      setIsLoggedIn(true);
    }
    setIsLoading(false);


  }, []);
  
 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <div className="wrapper">

        <Header isLoggedIn={isLoggedIn} />
        <Router>
          <Routes>
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/" replace /> : <Login_form />}
            />
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <Navigate to="/login" />}
              exact
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
export default App;
