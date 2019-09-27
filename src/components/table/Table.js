import React from 'react';
import Column from '../column/column';
import './table_style.css';

export default function Table(props) {

    return <div>
        <p> Ход игрока: {props.currentPlayer} </p>
        <div className='game_field'>
            <Column columnId={0} onColumnPress={props.onColumnPress} data={props.field[0]}/>
            <Column columnId={1} onColumnPress={props.onColumnPress} data={props.field[1]}/>
            <Column columnId={2} onColumnPress={props.onColumnPress} data={props.field[2]}/>
            <Column columnId={3} onColumnPress={props.onColumnPress} data={props.field[3]}/>
            <Column columnId={4} onColumnPress={props.onColumnPress} data={props.field[4]}/>
            <Column columnId={5} onColumnPress={props.onColumnPress} data={props.field[5]}/>
            <Column columnId={6} onColumnPress={props.onColumnPress} data={props.field[6]}/>
        </div>
    </div>
}