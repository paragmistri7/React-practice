import { useState } from "react"

function HOCcompo() {
    return (
        <>
            <h1><i> HOC </i>  </h1>
            {/* <Counter/> */}

            <Green cmp={Counter} />
            <Red cmp={Counter} />
            <Yellow cmp={Counter} />
        </>
    )
}


function Green(props) {
    return <h3 style={{backgroundColor:"green",width:"200px", textAlign:"center"}}> Green : <props.cmp/></h3>
}
function Red(props) {
    return <h3 style={{backgroundColor:"red",width:"200px", textAlign:"center"}}> Red : <props.cmp/></h3>
}
function Yellow(props) {
    return <h3 style={{backgroundColor:"yellow",width:"200px", textAlign:"center"}}> Yellow : <props.cmp/></h3>
}


function Counter() {

    const [data, setdata] = useState(0)

    return (
        <>
            <h4>{data}</h4>
            <button onClick={() => setdata(data + 1)}>click me..</button>
        </>
    )
}
export default HOCcompo