import React from 'react';


function RulleteBlock() {
  return (
    <>
      <div className='winningBar-left'>
        <img src={winningImage} alt="" />
        <WinningNumbers></WinningNumbers>
      </div>
      
    </>
  );
}

export default RulleteBlock;