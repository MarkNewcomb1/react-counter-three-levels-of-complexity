import axios from 'axios'
import * as actionTypes from "../constants/actions";

export const counterActions = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.COUNTER_REQUEST })
        const { data } = await axios.get('/api/counter')
        dispatch({ type: actionTypes.COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: actionTypes.COUNTER_FAIL, payload: error.response &&
                error.response.data.message ? error.response.data.message
                : error.message
        })
    }
}

export const incrementAction = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.COUNTER_REQUEST })
        const { data } = await axios.put('/api/counter/increment')
        dispatch({ type: actionTypes.COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: actionTypes.COUNTER_FAIL, payload: error.response &&
                error.response.data.message ? error.response.data.message
                : error.message
        })
    }
}

export const decrementAction = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.COUNTER_REQUEST })
        const { data } = await axios.put('/api/counter/decrement')
        dispatch({ type: actionTypes.COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: actionTypes.COUNTER_FAIL, payload: error.response &&
                error.response.data.message ? error.response.data.message
                : error.message
        })
    }
}

export const resetAction = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.COUNTER_REQUEST })
        const { data } = await axios.put('/api/counter/reset')
        dispatch({ type: actionTypes.COUNTER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: actionTypes.COUNTER_FAIL, payload: error.response &&
                error.response.data.message ? error.response.data.message
                : error.message
        })
    }
}