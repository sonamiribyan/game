import React from 'react';
import './winningBar.css';
import winningImage from '../../images/winningBarImage.png'
import WinningNumbers from '../WinningNumbers/WinningNumbers';

function WinningBar() {
  return (
    <>
      <div className='winningBar-left'>
        <img src={winningImage} alt="" />
        <WinningNumbers></WinningNumbers>
      </div>
      
    </>
  );
}

export default WinningBar;