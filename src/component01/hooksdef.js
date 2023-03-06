import { useState } from "react"


function Hooksdef() {

    // let abc = "ABC"
    // const [data, setdata] = useState(abc)  

    const [data, setdata] = useState("parag")  

    

    // const btn = () => {
    //     setdata ("mistry")
    // }
    
    function btn() {
        setdata ("parag @ gohil")    
    }


    return (
        <>
            <h1>{data}</h1>
            {/* <button onClick={()=>{setdata("gohil")}}>click here</button> */}
            <button onClick={btn}>click here</button>
        </>
    )
}
export default Hooksdef