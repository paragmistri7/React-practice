import React, { useState } from "react";
function Conren() {
    const [name1, name2] = useState(3)

    return (

        <>
            <h1>condition rendering</h1>

            {
                name1 == 1 ?  <h1>condition 1</h1>
                    : name1 == 2 ? <h1>condition 2</h1>
                        : name1 == 3 ? <h1>condition 3</h1>
                            : <h1>eroor.....</h1>
            }
        </>
    )
}
export default Conren;