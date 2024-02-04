import React from 'react';
import Box from './Box.jsx'

function Board({gameData, setBox}) {
    return (
        <div className='board'>
            {gameData.map((a_row, row_idx) => {
                return (
                    <div className='row'>
                        {a_row.map((elem, col_idx) => {
                            return (
                                <Box 
                                    key={`r${row_idx}-c${col_idx}`}
                                    row_idx={row_idx}
                                    col_idx={col_idx}
                                    boxData={gameData[row_idx][col_idx]}
                                    setBox={setBox}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default Board;