import Reuse01compo from "./component01/01reusecompo"

function Reusecompo() {

    // const arry01 = ["parag", "harnish", "hardik", "chirag"]

    const tb = [
        { name: "parag", email: "parag@gohil.com", contact: 972545334 },
        { name: "hardik", email: "hadik.com", contact: 75857858 },
        { name: "honey", email: "hufjhfj.com", contact: 97254578575334 }
    ]

    return (
        <>
                {tb.map((item, i) => 
                    <Reuse01compo data={item} />
                
                )}
        </>
    )
}
export default Reusecompo