import { Component } from "react"
import { Button } from "react-bootstrap"
import { CommonContext } from "./01commoncontext"

function Updatebuttton(){
  
   
        
        return (
            <>
                
                <CommonContext.Consumer>
                   
                    {
                        ({ updatcolor }) => (
                            <>
                           <button onClick={()=>updatcolor("yellow")}>Update Color</button>
                    
                           <button onClick={()=>updatcolor("red")}>Update Color</button>
                            </>

                        )
                    }
                            
                   
                        
                    
      </CommonContext.Consumer>
            </>
        )
    
}
export default Updatebuttton