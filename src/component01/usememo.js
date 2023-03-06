import { useMemo, useState } from "react"

function Memocompo() {


    const [count, setcount] = useState(1)
    const [data, setdata] = useState(10)

    const Multimemo = useMemo(() => {
        console.log("0123255")
        function memo1() {
            return count + 2

        }
    },[data]
    )

    return (
        <>
            <h1>Memo component = rerendering = pure compo</h1>

            <h3> Count : {count}</h3>
            <h3>Data : {data}</h3>
            <h3>{Multimemo}</h3>

            <button onClick={() => setcount(count + 1)}>count</button>
            <button onClick={() => setdata(data + 5)}>data</button>
        </>
    )
}
export default Memocompo