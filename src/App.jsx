
import './App.css';
import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login_form from './components/Login/Login';
import { AuthContext } from './context/AuthContext';


function App() {
  const {isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        {
          isLoggedIn ? <Home /> : <Login_form />
        }
      </div>
    </div>
  );
}

export default App;
