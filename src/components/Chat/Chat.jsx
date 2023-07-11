import React from 'react';
import './chat.css'
import casinoCross from '../../images/casino-cross.png';
import Send from '../../images/Send.png';
function Chat() {
    return (
        <>
            <div className='chatBox'>
                <div className='chatbox-header'>
                    <p className='chat-text'>Chat</p>
                    <div>
                        <img src={casinoCross} alt="" />
                    </div>
                </div>
                <div className='messageBox'>
                    <div className='messageBox-bar'>

                    </div>
                </div>
                <div className='chat-send-box chat-box'>
                    <input className='chat-send-box input' placeholder='  Click to chat'>

                    </input>
                    <img src={Send} alt="" className='send-box' />
                </div>
            </div>

        </>
    );
}

export default Chat;