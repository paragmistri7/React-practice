function Liftingcompo(e) {

    const data = "parag gohil"

    return (
        <>
        <h1>lifting = send data child to parent</h1>
        <button onClick={ e.alert}>Alert</button>
        <button onClick={()=>e.alert(data)}>Alert</button>
        </>
    )
}export default Liftingcompo