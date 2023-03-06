import React, { Component } from "react";

class Rendermethod extends Component{
    constructor() {
        super()
        this.state = { val: "ball" }
        console.log("call 3")
        
}

    render() {
        console.log("call 2")
        return (
            <>
                <h1> render method </h1>
                <h3>{ this.props.data}</h3>

                <h3>{this.state.val}</h3>
                <button onClick={()=>this.setState({val :"tall"})}> click here</button>
            </>

        )
    }
}
export default Rendermethod