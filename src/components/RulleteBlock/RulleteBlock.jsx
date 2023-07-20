import React from 'react';
import './rulleteBlock.css'
import Chat from '../Chat/Chat';

function RulleteBlock({ formattedObject }) {
    console.log(formattedObject);
    return (
        <>
            <div className='rulleteBlock'>
                <div className="gameStateContainer">

                    {
                        <p style={{ color: 'white', marginTop: '20px', fontSize: '20px' }}>
                            {formattedObject.game_state}
                            <br />

                            {formattedObject?.win_number?.trim().length > 0 &&
                                <p>Winning number {formattedObject.win_number}</p>
                            }
                        </p>
                    }
                </div>
                <Chat></Chat>
            </div>

        </>
    );
}

export default RulleteBlock;