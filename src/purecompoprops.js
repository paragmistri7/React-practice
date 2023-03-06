import { Component, PureComponent } from "react";
import Pureprop01compo from "./01purecompoprops";

class Purepropcompo extends PureComponent{ 
    constructor() {
        super()
        this.state = {name : 1}
    }
    render() {
        console.log("render called")
        return (
            <>
                <Pureprop01compo name ={this.state.name} />

            
                <button onClick={()=>{this.setState({name:this.state.name})}}>click me</button>
            </>
        )
    }
}
export default Purepropcompo