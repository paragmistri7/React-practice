import { useState } from "react"

function Hides() {
const [name1 , name2] = useState(false)

     function name3() {
         name2(true)        
     }
     function name4() {
         name2(false)         
    }
    

     function name5() {
         name2(!name1)   
    }
    
    
    return (
        <>
            {name1 ? <h1>hide show and toggle</h1>:null}
       
            <button onClick={name3}>show</button>
            <button onClick={name4}>hide</button>

            <button onClick={name5}>toggle</button>
        </>
    )
}
export default Hides