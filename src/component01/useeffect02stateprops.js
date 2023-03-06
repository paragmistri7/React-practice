import { useEffect } from "react"

function Stateprops022(props) {

    useEffect(() => {
        console.log("useState called only data")
 
    },[props.data])

    useEffect(() => {
        console.log("useState called only count....")
 
    },[props.count])
    return (
        <>
            <h1> count : {props.count}</h1>
            <h1> data : {props.data}</h1>
        </>
    )
}
export default Stateprops022