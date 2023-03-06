import { Component } from "react"
import Unmountcompo from "./01componentunmount"

class Unmountcompo01 extends Component{
    constructor() {
        super()
        this.state = {name : "parag gohil"}
    }
    
   
    render() {
        return (
            <>
                {this.state.name ? <Unmountcompo /> :<h1>parent component</h1>}
                
                {/* <Unmountcompo /> */}
                <button onClick={()=> this.setState({name : !this.state.name}) }> click to change</button>
            </>
        )
    }
}
export default Unmountcompo01