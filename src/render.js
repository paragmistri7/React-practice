import { useState } from "react";
import Rendermethod from "./01render";

function Rendersss() {

    const [name, setname] = useState("parag")

    console.log("call 1")
    return (
        <>
            <Rendermethod data={name} />
            <h2>{name}</h2>
            <button onClick={() => setname("gohil")}>update name</button>
        </>
    )
}
export default Rendersss