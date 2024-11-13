import React, { useContext } from 'react'
import { greetContext } from './One'

const Four = () => {
    let res = useContext(greetContext)
    let { firstName, lastName } = res


    return (
        <>
            <h2>Name :{firstName} {lastName}</h2>
        </>
    )
}
export default Four;

