import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './welcome_style.css';


function Welcome() {
    const [firstUserName, setFirstPlayer] = useState();
    const [secondUserName, setSecondPlayer] = useState();

    function NameFirstPlayer(event) {
        setFirstPlayer(event.target.value);
    }

    function NameSecondPlayer(event) {
        setSecondPlayer(event.target.value);
    }

    return <div className="welcome-page">
        <h1>Welcome</h1>
        <input type='text' value={firstUserName} onChange={(e) => {NameFirstPlayer(e)}} placeholder='Введите имя первого игрока'/>
        <input type='text' value={secondUserName} onChange={(e) => {NameSecondPlayer(e)}} placeholder='Введите имя второго игрока'/>
        <br/>
        <div class="button-wrapper">
        <Link to={{
            pathname: '/game',
            state: {
                firstPlayer: firstUserName,
                secondPlayer: secondUserName
            }
        }}>Start</Link>
        </div>
    </div>
}


export default Welcome;