// import React from 'React'
import { useState } from 'react'

function Statecfunction() {

    const [data, setData] = useState("parag")

    function Statefn() {
        setData("gohil")
    }

    const [dat, one] = useState(0)
    function number() {
        return one(dat + 1)
    }

    return (
        <>

            <h1>{data}</h1>
            <button onClick={Statefn}>state function</button>
            
            <h1>{dat}</h1>
            <button onClick={number}>number +</button>

        </>
    )

}
export default Statecfunction;