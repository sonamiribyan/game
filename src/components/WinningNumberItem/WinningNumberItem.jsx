import React from 'react';
import './winningNumberItem.css'

function WinningNumberItem(props) {
    return (
        <div className='winning-number-item' style={{ backgroundColor: props.backgroundColor?props.backgroundColor:'' }}>
            <span className='winning-number-item-text'>{props.number?props.number:'n'}</span>
        </div>

    );
}
export default WinningNumberItem;