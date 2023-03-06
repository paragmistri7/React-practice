 import React, { Component } from "react";

class Didmount extends Component{
    constructor() {
        super()
        this.state = {name : " parag"}
        console.log("constructor")
    }
    
    componentDidMount() {
        console.log ("componentdidmount")
        // after HTML load (render)
    }


    

    render() {
        console.log("render")

       

        return (
            <>
                <h1>Component did mount</h1>
                
                <h2>{this.state.name}</h2>
                <button onClick={()=> {this.setState({name : "gohil"})}}>click</button>
            </>
         )
     }
}
 export default Didmount