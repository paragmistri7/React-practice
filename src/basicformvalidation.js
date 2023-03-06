import { useState } from "react"


function Bform() {

    const [user, setuser] = useState()
    const [password, setpassword] = useState()
    const [usererr, setusererr] = useState()
    const [passerr, setpasserr] = useState()

    function formsub(f) {
      
        f.preventDefault()

        if (user.length < 5 || password.length< 3) {
            alert ("please valid enter detail")
        }
        else (
            alert (" enter detail is correct")
        )
    }


    function userhand(e) {
        console.log(e.target.value)

        let item = (e.target.value)
        if (item.length < 5) {
            setusererr(true)
        } else {
            setusererr(false)
        }
         setuser (item)
    }

    function passhand(g) {
        let item2 = (g.target.value)
        if (item2.length < 6) {
            setpasserr(true)
        } else {
            setpasserr(false)
        }
        setpassword(item2)
    }

    return (
        <>
            <h1>login form validation</h1>

            <form onSubmit={formsub}>
                <input type="text" placeholder="enter name" onChange={userhand}></input>
                {usererr ? <h2>name is invalid </h2> : ""}    <br></br><br></br>

                <input type="password" placeholder="enter password" onChange={passhand}></input>
                {passerr ? <h2>password is invalid</h2> : ""}    <br></br><br></br>

                <button type="submit">Submit</button>
            </form>
        </>
    )

}
export default Bform