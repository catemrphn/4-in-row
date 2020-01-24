import React from 'react';
import './cell_style.css';

function Cell(props) {
    return (
    <span className={props.value===0 ? 'cell' : props.value === 1 ? ' cell cell_first_player' : ' cell cell_second_player'}>
        {/*{props.value}*/}
    </span>
    )
}

export default Cell;
