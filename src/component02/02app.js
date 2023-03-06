import { Component } from "react";
import { CommonContext } from "./01commoncontext";
import Main01 from "./03maincontext";
import Updatebuttton from "./04 buttoncontext";

class Appcontext extends Component {

    constructor() {

        super()
        this.updatcolor = (color) => {
            this.setState({
                color: color
            })
        }
        
        this.state = {
            color: "green",
            updatcolor: this.updatcolor
        }

    }
    render() {

        return (
            <>
                <CommonContext.Provider value={this.state}>
                    <h2>where are u......</h2>
                    <Main01 />
                    <Updatebuttton />
                </CommonContext.Provider>
            </>
        )
    }


}

export default Appcontext