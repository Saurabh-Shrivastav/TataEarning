import React from "react";
import Second from "./Second";
function First({ name }) {
    // console.log(name)

    return (
        <>
            {/* <h1>{name}</h1> */}
            < Second name={name} />
        </>
    )
}
export default First;
