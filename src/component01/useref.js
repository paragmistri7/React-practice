import { useRef } from "react"

function Userefcompo() {

    let user = useRef(null)

     function goll() {
         console.log(user)
         user.current.value = "22232"
         user.current.style.color = "white"
         user.current.style.backgroundColor = "green"
     }
    return (
        <>
            <h1>
                Useref component
            </h1>
            
            <input type="text" ref={user}></input>
            <button onClick={goll}>click me</button>
        </>
    )
}
export default Userefcompo