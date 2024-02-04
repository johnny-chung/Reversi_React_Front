import axios from 'axios'
const apiBaseUrl = 'http://localhost:5000/api'


function checkMoveAPI(gameData, t_row, t_col, player) {
    const apiUrl = apiBaseUrl + '/check_move/'
    const payload = {
        board: gameData,
        row: t_row,
        col: t_col,
        player: player
    }
    return axios.post(apiUrl, payload)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.log('API error: ', error)
            throw error;
        });

}

function checkMoveExistAPI(gameData, player) {
    const apiUrl = apiBaseUrl + '/check_move_exists/'
    const payload = {
        board: gameData,
        player: player
    }
    return axios.post(apiUrl, payload)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.log('API error: ', error)
            throw error;
        });

}

function predictionAPI(gameData, player) {
    const apiUrl = apiBaseUrl + '/predict/'
    const payload = {
        board: gameData,
        player: player
    }
    return axios.post(apiUrl, payload)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.log('API error: ', error)
            throw error;
        });

}

function checkWinAPI(gameData) {
    const apiUrl = apiBaseUrl + '/check_win/'
    const payload = {
        board: gameData
    }
    return axios.post(apiUrl, payload)
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            console.log('API error: ', error)
            throw error;
        });

}

export { checkMoveAPI, checkMoveExistAPI, predictionAPI, checkWinAPI }