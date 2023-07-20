import React, { useContext, useEffect } from 'react';
import './header.css'
import cross from '../../images/cross.png'
import crossButton from '../../images/crossButton.png'
import icon from '../../images/voice.png'
import voice from '../../images/icon.png'
import { AuthContext } from '../../context/AuthContext';
function Header({ isLoggedIn }) {
  const { logout,user } = useContext(AuthContext);


  // useEffect(() => {
  //   console.log(user);
  // }, []);

  const handleLogout = () => {
    logout();
  };
  return (
    <header>
      <div className='header-top'>
        <div className='header-top-left'>
          <div className='cross-img'>
            <img src={cross} alt="" />
          </div>
          <div className='header-top-left-text'>
            Flexsy Roulette
          </div>
          <div className='header-top-right-text'>
            0.5€ - 4,500€
          </div>
          <div>
          </div>
        </div>
        <div className='header-top-right'>
          {isLoggedIn && <span className='logout' onClick={handleLogout}>Logout</span>}

          <img src={crossButton} alt="" />
          <img src={voice} alt="" />
          <img src={icon} alt="" />
        </div>
      </div>
      <div className='header-bottom'>
        <div className='header-top-left-text first'>ID: 1234567890 UTC:21:05</div>
        <div className='header-top-left-text'>Dealer - Coltrane</div>
      </div>
    </header>
  );
}

export default Header;