import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
    return <h1>
        Welcome :)
        <br/>
        <Link to={{
            pathname: '/game',
            state: {
                playerFirstPlayer: 'Cate',
                playerSecondPlayer: 'Max'
            }
        }}>Start</Link>
    </h1>
}

export default Welcome;