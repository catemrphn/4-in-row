import React, {useState, useEffect} from 'react';
import './App.css';
import Table from '../table/Table';
import {Redirect} from 'react-router-dom';
import axios from "axios";

const w = 7;
const h = 6;

function App(props) {
    const [field, setField] = useState(createEmptyGameField());
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [Winner, setWinner] = useState(false);

    useEffect(() => {
        axios.post('https://brave-poitras-4e4a45.netlify.com/start').then((response) => {
            handleGame(response.data)
        });

        const intervalId = setInterval(
            () => {
                axios.get('https://brave-poitras-4e4a45.netlify.com/info').then((response) => {
                    handleGame(response.data)
                });
            },
            1000
        );
        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function move(column) {
        axios.post('https://brave-poitras-4e4a45.netlify.com/move', {
            column: column
        }).then((response) => {
            handleGame(response.data)
        });
    }

    function handleGame(data) {
        setField(data.field);
        setCurrentPlayer(data.currentPlayer);
        setWinner(data.Winner);
    }

    function createEmptyGameField() {
        let table = [];
        for (let i = 0; i < w; i++) {
            let col = [];
            for (let j = 0; j < h; j++) {
                col.push(0);
            }
            table.push(col);
        }
        return table;
    }

    if (!props.location.state || !props.location.state.firstPlayer || !props.location.state.secondPlayer) {
        return <Redirect to='/'/>
    }

    if (Winner) {
        return <Redirect to='/over'/>
    }
    return (
        <div className='App'>
            <div className='players'>
                <p className='player first-player'> {props.location.state.firstPlayer}</p>
                 vs
                <p className='player second-player'> {props.location.state.secondPlayer}</p>
            </div>

            <Table field={field} currentPlayer={currentPlayer} onColumnPress={(col) => move(col)}/>
        </div>
    );
}

export default App;
