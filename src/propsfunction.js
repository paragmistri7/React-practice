import Prop01 from "./01propsfunction"
import React,{useState} from "react"

function Propsfun() {

    const [name1 ,name2] = useState("parag")
    const [name11 ,name22] = useState("hardik")
    const [name111 ,name222] = useState("harnish")

   const  name3 = () => {
       name2("gohil")
       name22("unagar")
       name222("panchal")
    }
    
    return (
        <>
         <Prop01 nam={name1} email="jfhsdkjfh@.com" other={{add:"delhi", add2:"mumbai"}}></Prop01>
         <Prop01 nam={name11}  email="jfhsdkjfh@.com" other={{add:"delhi", add2:"mumbai"}} ></Prop01>
        <Prop01 nam={name111} email="jfhsdkjfh@.com" other={{ add: "delhi", add2: "mumbai" }} ></Prop01>
            
            {/* <button onClick={() => { name22("unagar") }}>click to change</button> */}
            <button onClick={name3}>click to change</button>
        </>
        
    )
}
export default Propsfun