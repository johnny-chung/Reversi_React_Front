import React from 'react';


function Box({row_idx, col_idx, boxData, setBox}) {

    function handleClick() {
        setBox(row_idx, col_idx)
    }

    function renderCircle(boxData) {
        if (boxData === 0) {
            return
        } else {
            const color = boxData === 1? 'white-color' : 'black-color';
            return (
                <div className={`circle ${color}`}></div>
            )
        }
    }
    

    return (
        <div 
            className='box'
            onClick={handleClick} 
        >
            {renderCircle(boxData)}
        </div>
    )
}

export default Box;