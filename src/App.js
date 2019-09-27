import React, {useState} from 'react';
import './App.css';
import Table  from './components/table/Table';

function App() {
    const [field, setField] = useState([
        [1, 0, 0, 0, 0, 0],
        [2, 1, 0, 0, 0, 0],
        [2, 1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [2, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0],
    ]);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    // const Winner = 0;

    function move(column) {
        console.log(column);
        let whoseMove = currentPlayer === 1 ? 2 : 1;
        setCurrentPlayer(whoseMove);
        setField([
            [1, 1, 1, 1, 1, 1],
            [2, 1, 0, 0, 0, 0],
            [2, 1, 1, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 0],
        ])
    }


  return (
    <div className="App">
        <Table field={field} currentPlayer={currentPlayer} onColumnPress={(col) => move(col)} />
    </div>
  );
}

export default App;
