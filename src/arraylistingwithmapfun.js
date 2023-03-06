function Arraylisting() {

    const arry01 = ["parag", "harnish", "hardik", "chirag"]

    const tb = [
        { name: "parag", email: "parag@gohil.com", contact: 972545334 },
        { name: "hardik", email: "hadik.com", contact: 75857858 },
        { name: "honey", email: "hufjhfj.com", contact: 97254578575334 }
    ]


    // arry01.map((item) => {
    //     console.log("name is ", item)
    // })


    // for (let i = 0; i < arry01.length; i++) {
    //     console.log("name is ", arry01[i])

    // }


    return (
        <>
            <h1>Array listing with map function</h1>

            {/* ONLY MAP FUN WORK IN RETURN FOR LOOPING  FOR LOOP NOT WORK IN RETURN  */}
            {/* {arry01.map((item) =>{
                console.log("name is ", item)
            }                               
            )} */}
            
             
            

                {tb.map((item) => {
                    console.log("name is ", item.email)

                }
                )}
           
                            
       

            

            

            



            {/* syntax error in for loop */ }

    {/* {
                for (let i = 0; i < arry01.length; i++) {
                console.log("name is ", arry01[i])
           }  } */}
        </>
    )
}
export default Arraylisting