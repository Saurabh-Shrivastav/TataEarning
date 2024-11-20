import React, { act, useReducer } from "react";
function UseReducer() {

    // Define useReducer Function
    let initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case 'inc':
                return state + 1

            case 'dec':
                return state - 1

            case 'reset':
                return initialState
            default:
                return state
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    console.log();



    return (
        <>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch('inc')}>+</button> &nbsp;
            <button onClick={() => dispatch('dec')}>-</button> &nbsp;
            <button onClick={() => dispatch('reset')}>*</button>
        </>
    )
}
export default UseReducer;