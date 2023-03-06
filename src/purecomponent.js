import { Component, PureComponent } from "react";

class Purecompo extends PureComponent{ 
    constructor() {
        super()
        this.state = {name : 1}
    }
    render() {
        console.log("render called")
        return (
            <>
                <h1>pure component</h1>

                <h3>count : { this.state.name}</h3>
                <button onClick={()=>{this.setState({name:this.state.name + 1})}}>click me</button>
            </>
        )
    }
}
export default Purecompo