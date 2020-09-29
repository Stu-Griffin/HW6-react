import {increment, decrement} from '../action/action.js';
export function rootReducer(state, action) {
    if(action.type === increment) {
        return(state + 1)
    } else if(action.type === decrement) {
        return(state - 1)
    } else {
        return(state)
    }
}