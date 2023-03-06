import { Component, PureComponent } from "react";

class Pureprop01compo extends Component{ 
   
    render() {

        return (
            <>
                <h1>pure props component</h1>

                <h2> count : : { this.props.name}</h2>

            </>
        )
    }
}
export default Pureprop01compo