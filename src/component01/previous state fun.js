import { useState } from "react"

function Previousstate() {

    const [count, setcount] = useState(1)

    function updates() {

        // let rand = Math.floor(Math.random() * 10)
        // setcount((pre) => {
        //     console.log(pre)
        //     if (pre<5) {
        //         alert("low value")
        //     }
        //     return (rand)
        // })


        for (let i = 0; i < 5; i++){
            // setcount(count+1)
            setcount((pre) => {
               return pre + 1
            })
        }
    }
    return (
        <>
            <h1>Previous state</h1>
            <h2>{count}</h2>
            <button onClick={updates}>click me</button>
        </>
    )
}
export default Previousstate