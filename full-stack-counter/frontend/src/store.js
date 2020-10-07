import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { counterReducer } from './reducers/counterReducers'

const reducer = combineReducers({
    counterList: counterReducer
})

const initialState = { count: 0 }

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools
    (applyMiddleware(...middleware)))

export default store