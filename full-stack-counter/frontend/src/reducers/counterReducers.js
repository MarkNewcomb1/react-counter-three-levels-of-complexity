import * as actionTypes from "../constants/actions";
import axios from 'axios';

export const counterReducer = (state = { loading: true, count: 0 }, action) => {
    switch (action.type) {
        case actionTypes.COUNTER_REQUEST:
            return {
                loading: true, count: 0
            }
        case actionTypes.COUNTER_SUCCESS:
            return {
                loading: false, count: action.payload
            }
        case actionTypes.COUNTER_FAIL:
            return {
                loading: false, error: action.payload
            }
        case actionTypes.INCREMENT:
            return {
                loading: false, count: action.payload
            };
        case actionTypes.DECREMENT:
            return {
                loading: false,
                count: action.payload,
            };
        case actionTypes.RESET:
            return {
                loading: false,
                count: action.payload,
            };
        default:
            return state;
    }
}