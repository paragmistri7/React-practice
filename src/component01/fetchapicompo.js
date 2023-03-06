import { useEffect, useState } from "react"

function Fetchapicompo() {

    const [data, setdata] = useState()
    useEffect(() => {


        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then((result) => {

                result.json()
                .then((req) => {

                // console.log("results", req)
                setdata(req)
            })
        })

    }, [])

    function deleteuser(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/1/comments ${id}`, {
            method: "DELETE"
        }).then((delt) => {
            delt.json.then((delts) => {
                console.log(delts)
            })
        })
    }

    console.log(data)
    return (
        <>
            <h1>Get API Data </h1>

            <table border="1">
                <tbody>

                    <tr>
                        <td>postId</td>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                    </tr>

                    </tbody>
                </table>
            {
                data.map((item) =>
                    <tr >
                        <td>{item.postId}</td>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <button onClick={deleteuser}>delete</button>
                    </tr>

                )
            }

        </>
    )
}
export default Fetchapicompo