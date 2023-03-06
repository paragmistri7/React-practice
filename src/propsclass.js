import React, { Component } from "react";
import Classcompo from "./classcompo";
import Prop01 from "./01propsclass";

export default class Propsclass extends Component {

    constructor() {
        super()
        this.state = {data : "parag" ,data2 : "harnish" ,emails : "parag@.com"}
    }

    name2 = () => {      
        this.setState({ data: "gohil", data2: "panchal",emails :"gohil@yagoo.com" })
        
    }


    render() {
        return (
            <>
                < Prop01 name={this.state.data} email={this.state.emails} />
            < Prop01 name= {this.state.data2} email = {"harnish@.com"} />
            
                <button onClick={this.name2}> clicl</button>
            </>
        )
}

}