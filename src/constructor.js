import React, { Component } from 'react'

class Constructorcompo extends Component {

    constructor() {
        super()
        console.log("constructor")
        this.state={name : "parag"}
    }

    render() {
        console.log("render")
        return (

            <>
                <h1>whats up ....</h1>
                <h2>{this.state.name}</h2>
            </>

        )
    }
}
export default Constructorcompo