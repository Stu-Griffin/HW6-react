export function rootReducer(state, action) {
    if(action.type === "+") {
        return(state + 1)
    } else if(action.type === "-") {
        return(state - 1)
    } else {
        return(state)
    }
}