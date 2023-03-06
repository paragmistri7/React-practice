
function Passfun(props) {
    return (
        <>
            <h1>pass function to parent component</h1>
            {/* <button onClick={props.data}>click here</button> */}
            <button onClick={()=>props.data()}>click here</button>
        </>
    )
}
export default Passfun