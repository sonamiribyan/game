import React from 'react';
import './rulleteBlock.css'
import Chat from '../Chat/Chat';
import greenBackground from '../../images/greenBackground.png';
import whiteBall from '../../images/whiteElipse.png';
import winNumberBack from '../../images/winNumberBack.png';
import { numberBackground } from '../numberBackground';

function RulleteBlock({ formattedObject }) {
    console.log(formattedObject);
    
    return (
        <>
            <div className='rulleteBlock'>
                <div className="gameStateContainer">
                    <img src={winNumberBack} alt="" className="winNumberBack" />
                    <div className="win-number" >
                        <img src={formattedObject?.win_number?.trim().length > 0
                            ? numberBackground[+formattedObject.win_number]
                            : greenBackground
                        }
                            className="greenBackground" />
                        {
                            formattedObject?.win_number?.trim().length > 0 &&
                            <p className="winning-number-text">{formattedObject.win_number}</p>
                        }
                        <img src={whiteBall} alt="" className="whiteBall" />
                        {/* <p class="game-status">winning number</p> */}
                        <p className="game-status"> {formattedObject.game_state}</p>
                    </div>


                </div>

                <Chat></Chat>
            </div>
        </>
    );
}

export default RulleteBlock;