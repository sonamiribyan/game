import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './home.css';
import WinningBar from '../WinningBar/WinningBar';
import RulleteBlock from '../RulleteBlock/RulleteBlock';
import OnlineUsers from '../OnlineUser/OnlineUsers';

import { createSocketConnection } from '../../config/socket';

let obj = {
    game_state: {
        1: "Start Game",
        2: "Place Bets",
        3: "Ball in Rim",
        4: "No More Bets",
        5: "Winning Number",
        6: "Table Closed",
        7: "Dealer Lock",
    },
    warning_flag: {
        0: "Game Ok",
        1: "Rotor Speed <10.0 RPM",
        2: "Ball Launch in same direaction as Rotor",
        4: "Rim Sensor Error",
        8: "Void Game or Low Ball Spin Speed",
    },
    rotor_direction: {
        0: "Clockwise",
        1: "Anti-Clockwise",
    }
};

function Home() {
    const [formattedObject, setformattedObject] = useState({});
    const handleSendGame = (data) => {
        console.log(data);
        const { game_state, game_number, win_number, warning_flag, rotor_speed, rotor_direction } = data;

        const formattedObject2 = {
            game_state: obj.game_state[game_state],
            game_number: `Game ${game_number.padStart(3, '0')}`,
            win_number: `${win_number}`,
            warning_flag: obj.warning_flag[warning_flag],
            rotor_speed: `Rotor ${Number(rotor_speed) / 10.0} RPM`,
            rotor_direction: obj.rotor_direction[rotor_direction]
        };
        setformattedObject(formattedObject2);
    };
    console.log(formattedObject);
    const socket = createSocketConnection();

    socket.on('sendGame', handleSendGame);

    useEffect(() => {
        return () => {
            socket.off('sendGame', handleSendGame);
        };
    }, []);
    return (
        <>
            <div className='main'>
                <WinningBar />
                <RulleteBlock formattedObject={formattedObject} />
                <OnlineUsers />
            </div>

        </>
    );
}

export default Home;