import React, { useState, useEffect } from 'react';
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

    useEffect(() =>{
    const intervalId = setInterval(
        () => {
            axios.get('http://localhost:4000/info').then((response) => {
                setField(response.data.field);
                setCurrentPlayer(response.data.currentPlayer);
            });
        },
        2000
    );
    return () => {
        clearInterval(intervalId);
    }
}, []);

    function move(column) {
        axios.post('https://localhost:4000/move', {
            column: column
        });

        if (field[column][0] !== 0) return;

        let r = h - 1;
        for (let i = 0; i < h - 1; i++) {
            if (field[column][i + 1] !== 0) {
                r = i;
                break;
            }
        }
        field[column][r] = currentPlayer;
        setField(field);
        if (checkRow() || checkCol() || checkDiagonalDown() || checkDiagonalUp()) {
            setWinner(true);
        }
        let whoseMove = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayer(whoseMove);
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

    function checkRow() {
        for (let i = 0; i < h; i++) { // row
            for (let j = 0; j < w - 3; j++) { //col
                let find = true;
                for (let k = j ; k < j + 4; k++) { // 4 in row
                    if (field[k][i] !== currentPlayer) {
                        find = false;
                        break;
                    }
                }
                if (find) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkDiagonalDown() {
        for (let i = 0; i < h - 3; i++) { // row
            for (let j = 0; j < w - 3; j++) { //col
                let find = true;
                for (let k = 0 ; k < 4; k++) { // 4 in row
                    if (field[j + k][i + k] !== currentPlayer) {
                        find = false;
                        break;
                    }
                }
                if (find) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkDiagonalUp() {
        for (let i = 3; i < h ; i++) { // row
            for (let j = 0; j < w - 3; j++) { //col
                let find = true;
                for (let k = 0 ; k < 4; k++) { // 4 in row
                    if (field[j + k][i - k] !== currentPlayer) {
                        find = false;
                        break;
                    }
                }
                if (find) {
                    return true;
                }
            }
        }
        return false;
    }

    function checkCol() {
        for (let i = 0; i < w; i++) { // col
            for (let j = 0; j < h - 3; j++) { //row
                let find = true;
                for (let k = j ; k < j + 4; k++) { // 4 in col
                    if (field[i][k] !== currentPlayer) {
                        find = false;
                        break;
                    }
                }
                if (find) {
                    return true;
                }
            }
        }
        return false;
    }

    if (!props.location.state) {
        return <Redirect to='/'/>
    }

    if (Winner) {
        return <Redirect to='/over'/>
    }
    return (
        <div className="App">
            <p> {props.location.state.playerFirstPlayer}</p>
            vs
            <p> {props.location.state.playerSecondPlayer}</p>

            <Table field={field} currentPlayer={currentPlayer} onColumnPress={(col) => move(col)}/>
        </div>
    );
}

export default App;
