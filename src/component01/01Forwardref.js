import React, { forwardRef } from "react"


function Forward01(prop,pol) {
    return (
        <>
        <input type="text" ref = {pol}></input>
        </>
    )
}
export default forwardRef(Forward01)