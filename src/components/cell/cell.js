import React from 'react';
import './cell_style.css';

function Cell(props) {
    return (
    <span className='cell'>
        {props.value}
    </span>
    )
}

export default Cell;
