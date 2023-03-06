import React, { Component } from 'react'
import { render } from 'react-dom';

class Stateclass extends Component {

    constructor() {
        super()
        this.state =
            { data: "dont see me" }
    }

    Update=()=>
    {
        this.setState({ data: "now u see me" })
    }

    render()
    {
        return (
            <>
                <h2>{this.state.data}</h2>
                <button onClick={this.Update}>update data</button>
            </>
        )
    }
}
export default Stateclass