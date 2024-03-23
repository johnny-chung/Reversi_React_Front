import React, { useState, useEffect } from 'react';
import Board from './Board.tsx'
import { checkMoveAPI, checkMoveExistAPI, predictionAPI, checkWinAPI } from './API.tsx';

function Game() {

    const init_board = Array.from({ length: 8 }, () => Array(8).fill(0));
    init_board[3][3] = -1;
    init_board[4][4] = -1;
    init_board[3][4] = 1;
    init_board[4][3] = 1;

    const [player, setPlayer] = useState(1)
    const [gameData, setGameData] = useState(init_board)
    const [log, setLog] = useState()

    async function makeAiMove() {
        if (player === -1) {
            let move_exists = false
            while (move_exists === false) {
                const response = await predictionAPI(gameData, -1);
                setGameData(response.new_game_data);
                move_exists = await checkMoveExistAPI(response.new_game_data, 1)
            }
            setPlayer(prev => -prev)
        }
    };

    async function changePlayer() {
        const move_exists = await checkMoveExistAPI(gameData, -player)
        if (move_exists === true) {
            setPlayer(prev => {
                return -1 * prev
            })
        }
    };


    async function checkWin() {
        const response = await checkWinAPI(gameData)
        if (response === 1) {
            setLog('Player 1 win')
        }
        else if (response === -1) {
            setLog('Player 2 win')
        }
    }

    useEffect(() => {
        makeAiMove();
    }, [player]);

    useEffect(() => {
        checkWin();
    }, [gameData]);


    async function handleSetBox(t_row: number, t_col: number) {
        try {
            const response = await checkMoveAPI(gameData, t_row, t_col, player);
            if (response.move_valid === true) {
                setGameData(response.new_game_data)
                await changePlayer()
            }
        } catch (err) {
            console.log(err)
        }
    }

    function handleReset() {
        setGameData(init_board)
        setPlayer(1)
        setLog('')
    }

    return (
        <div className='game'>
            <p>Turn: {player === 1 ? 'Player' : 'AI'}</p>
            <Board
                gameData={gameData}
                setBox={handleSetBox}
            />
            <p>{log}</p>
            <button
                onClick={handleReset}
            >
                Reset
            </button>
        </div>
    )
}

export default Game;