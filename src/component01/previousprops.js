import { useState } from "react";
import Previosprops01 from "./01previousprops";

function Previousprops() {

    const [count, setcount] = useState(0)


    
    return (
        <>
            <Previosprops01 counter= {count} />
            <button onClick={() => { setcount(Math.floor(Math.random()*10)) }}>update data</button>
        </>
    )
}
export default Previousprops