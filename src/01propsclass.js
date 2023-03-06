import React, { Component } from "react";

class Props01 extends Component {
    render() {
        return (
            <>
                <h1>{this.props.name}</h1>
                <h1>{this.props.email}</h1>
            </>
        )
    }
}
export default Props01