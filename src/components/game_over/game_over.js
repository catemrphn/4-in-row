import React from 'react';
import { Link } from 'react-router-dom';

function GameOver() {
    return <h1>
        Game over!
        <br/>
        <Link to={{
            pathname: '/game',
            state: {
                playerFirstPlayer: 'Cate',
                playerSecondPlayer: 'Max'
            }
        }}>Start again</Link>
    </h1>
}

export default GameOver;