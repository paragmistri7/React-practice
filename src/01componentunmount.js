import React, { Component } from "react";

class Unmountcompo extends Component{

    componentWillUnmount() {
        console.log("componentWillUnmount")
           
        // only declare this component for toggle not declare parent component
       
    }

    render() {
        return (
            <>
              <h1>01 component did unmount</h1>
            </>
        )
    }
}
export default Unmountcompo