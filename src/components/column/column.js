import React from 'react';
import Cell from "../cell/cell";
import './col_style.css';

function Column(props) {
    return (
     /*<div onClick={() => props.onCellPress(props.columnId)}>*/
     <div className='game_column' onClick={() => {props.onColumnPress(props.columnId);
     }}>
        <Cell value={props.data[0]} row={0} />
        <Cell value={props.data[1]} row={1} />
        <Cell value={props.data[2]} row={2} />
        <Cell value={props.data[3]} row={3} />
        <Cell value={props.data[4]} row={4} />
        <Cell value={props.data[5]} row={5} />
    </div>
    )

}
export default Column;
