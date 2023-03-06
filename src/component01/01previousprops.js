import { useEffect, useRef } from "react"

function Previosprops01(props) {

    const lastval = useRef()

    useEffect(() => {
        lastval.current = props.counter
    })
    const priousoproo = lastval.current  
    
    return (
        <>
            
            <h1>Previos props</h1>

            <h2>count : { props.counter}</h2>
            <h2>previous : { priousoproo}</h2>
            <br/>
            <h2>differance : {priousoproo - props.counter}</h2>
            <h2>differance : { props.counter - priousoproo }</h2>
            
        </>
    )
}
export default Previosprops01