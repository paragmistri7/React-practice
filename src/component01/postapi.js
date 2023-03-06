import { useState } from "react"

function Postapi() {

    const [ name ,setname] = useState('')
    const [ email ,setemail] = useState('')
    const [contact, setcontact] = useState('')
    
    function setuser() {
        console.log({name,email,contact})

        let data = {name, email, contact}

        fetch("https://jsonplaceholder.typicode.com/posts", {

            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
            
            

            
        }).then((result)=>{
            // console.log(result)
           
            result.json().then((resp) => {
                console.log(resp)
            })
        })
    }
    return (
        <>
        <h1>Post API </h1>

            <form>
                <input type="text" name="name" onChange={(e)=>setname(e.target.value)}/><br></br><br></br>
                <input type="text" name="email" onChange={(e)=>setemail(e.target.value)} /><br></br><br></br>
                <input type="text" name="contact" onChange={(e)=>setcontact(e.target.value)} /><br></br><br></br>

                <button onClick={setuser} type="button">click here</button>
            </form>
        </>
    )
}
export default Postapi