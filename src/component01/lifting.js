import Liftingcompo from "./01lifting"

function Lifting() {


  function parent(data) {
    alert("hey whats up....")
    alert(data)
    
    }
 
  return (
        <>
          <Liftingcompo alert ={parent} />
        </>
    )
}
export default Lifting