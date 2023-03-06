import { useRef } from "react"
import Forward01 from "./01Forwardref"

function Forwardr() {

    let fors = useRef(null)
   
    function updat() {
        fors.current.value = "1000"
        fors.current.style.color ="red"
    }
    return (
        <>
            <h1>Forward Ref</h1>
            
         <Forward01 ref= {fors} />
        <button onClick={updat} >click me</button>
        </>
    )
    
}
export default Forwardr