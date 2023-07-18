import React, { useEffect, useState } from 'react';
import './winningNumbers.css'
import WinningNumberItem from '../WinningNumberItem/WinningNumberItem';
import socket from '../../config/socket';

function WinningNumbers() {

    const [game, setGame] = useState([]);

    const handleSendGame = (gameData) => {
        console.log(gameData);
        // setGame([...game,gameData]);
        // console.log(game);
    };
    socket.on('sendGame', handleSendGame);

    useEffect(() => {
        return () => {
            socket.off('sendGame', handleSendGame);
        };
    }, []);

    // useEffect(() => {
    //     console.log('Updated game:', game);
    // }, [game]);


    return (
        <div className='winning-numbers'>
            <div className='winning-numbers-container'>
                <p className='winning-numbers-text'>Winning Numbers</p>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='' number={null}></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='0'></WinningNumberItem>
                <WinningNumberItem backgroundColor='black' number='25'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='green' number='5'></WinningNumberItem>
                <WinningNumberItem backgroundColor='red' number='5'></WinningNumberItem>
            </div>

        </div>
    );
}
export default WinningNumbers;