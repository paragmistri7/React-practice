import { useRef } from "react"

function Uncontro() {

    let ab = useRef()
    let abc = useRef()

    function subdd(e) {
        e.preventDefault()
        console.log(ab.current.value)
        console.log(abc.current.value)
    
        let input1 = document.getElementById("input")
        console.log(input1.value)
    }

    
    return (
        <>
            <h1>Uncontrolled component</h1>

            <form onSubmit={subdd}>
                <input type=" text" ref={ab}></input><br></br><br></br>
                <input type=" text" ref={abc}></input><br></br><br></br>

                <input type=" text" id = "input"></input><br></br><br></br>
                <button>Submit</button>
            </form>
        </>
    )
}
export default Uncontro