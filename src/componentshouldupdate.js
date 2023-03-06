
import React, { Component } from "react";

class Shouldupdate extends Component {

    constructor() {
        super()
        this.state = { count: 0 }
        console.log("constructor")
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate")
        if (this.state.count > 5) {
            alert("hello its updated")       
        }
        
        return true
    }

    render() {
        console.log("render")
        return (
            <>
                <h1>component should update </h1>

                <h1>counter : {this.state.count} </h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>update data</button>

            </>
        )
    }
}
export default Shouldupdate;