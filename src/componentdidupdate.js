import React, { Component } from "react";

class Didupdate extends Component {
    constructor() {
        super()
        this.state = { name: 0 , name2 : 0}
        console.log("constructor")
    }

    componentDidUpdate(preprops, prestat, snapshot) {
        
        console.log("component did update" , prestat.name , prestat.name2)
       if (prestat.name == prestat.name2 ) {
         alert ("Error,,,....")
       }
    //    if (prestat.name < 8 ) {
    //      alert ("Error,,,...88.")
    //    }

    }

    render() {
        console.log("render")
        
        return (
            <>
                <h1>component did update</h1>
                <h1>name2 :  {this.state.name2 + 1}</h1>
                
                <h1>name : {this.state.name + 1 }</h1>
                

                <h3>{this.state.name}</h3>
                <button onClick={()=>this.setState({name : 5, name2 :this.state.name2 + 1}) }>update data</button>
            </>

        )
    }
}
export default Didupdate