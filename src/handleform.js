import { useState } from "react";

function Handleform() {
    const [name, setName] = useState("")
    const [interest , setinterest] = useState()
    const [tnc ,settnc]  = useState("")
    
    function dontsub(e) {
        e.preventDefault()
        console.log(name,tnc,interest)
    }
     

    return (
        <>
            <form onSubmit={dontsub}>
                <input type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)}></input> <br></br><br></br>
                <select onChange={(e)=>setinterest(e.target.value)}>
                    <option>parag</option>
                    <option>hardik</option>
                    <option>harnish</option>
                </select>   <br></br><br></br>
                <input type="checkbox" onChange={(e)=>settnc(e.target.checked)}></input>  <br></br><br></br>
                <input type="submit"></input>

            </form>
        </>
    )
}
export default Handleform;