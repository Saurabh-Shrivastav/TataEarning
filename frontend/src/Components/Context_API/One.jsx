import React, { createContext } from 'react'
import Two from './Two'
import Four from './Four'

export const greetContext = createContext()

const One = () => {
    const firstName = 'Vaibhav'
    const lastName = 'Shrivastav'
    return (
        <>
            <greetContext.Provider value={{ firstName, lastName }} >
                <Four />
            </greetContext.Provider>

            
        </>

    )
}
export default One;