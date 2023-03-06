import React, { useState } from "react"
function Getinput() {

    const [name1, name2] = useState("fool")
    const [name3, name4] = useState("fgfgggg")


    const name5 = () => {
        name4(true)
    }

    function changedata(val) {
        console.log(val.target.value)
        name2(val.target.value)
        name4(false)
    }

    return (
        <>
            <h1>get the input data</h1>

            {/* <h1> {name1}</h1> */}
            {name3 ? <h1> {name1}</h1> : null}
            <input type="text" onChange={changedata}></input>
            <button onClick={name5}>click to print data</button>
        </>
    )
}
export default Getinput