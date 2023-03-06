import { Component } from "react"
import { CommonContext } from "./01commoncontext"

class Main01 extends Component{
  
    render() {
        
        return (
            <>
                
                <CommonContext.Consumer>
                    {
                        ({ color }) => (
                            <h2 style={{backgroundColor : color}} >this is main page....</h2>
                
                        )
                    }
                </CommonContext.Consumer>
            </>
        )
    }
}
export default Main01