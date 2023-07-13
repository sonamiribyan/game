import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './home.css';
import WinningBar from '../WinningBar/WinningBar';
import RulleteBlock from '../RulleteBlock/RulleteBlock';
import OnlineUsers from '../OnlineUser/OnlineUsers';

function Home() {
    return (
        <>
            <div className='main'>
                <WinningBar />
                <RulleteBlock />
                <OnlineUsers />
            </div>

        </>
    );
}

export default Home;