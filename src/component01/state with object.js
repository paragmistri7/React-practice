import { useState } from "react"

function Stateobj() {

    const [data, setdata] = useState({name:"parag",age : 20})

    return (
        <>
            <h1>State With Object</h1>

            <input type="text" value={data.name} onChange={(e)=>{setdata({age:data.age,name: e.target.value})} } />
            <input type="number" value={data.age} onChange={(e) => { setdata({name:data.name , age: e.target.value }) }} />
            
            {/* <input type="text" value={data.name} onChange={(e)=>{setdata({...data,name: e.target.value})} } />
            <input type="number" value={data.age} onChange={(e)=>{setdata({...data,age: e.target.value})} } /> */}

            <h2>{ data.name}</h2>
            <h2>{ data.age}</h2>
        </>
    )

}
export default Stateobj