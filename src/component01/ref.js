import { Component, createRef } from "react";

class Refcompo extends Component{
    constructor() {
        super()
        this.newref = createRef()
}
    componentDidMount() {
    // console.log(this.newref.current.value = "1000")
    }
    
     getval(){
         console.log(this.newref.current.value = "1000")
         this.newref.current.value = "1000"
         this.newref.current.style.color = "red" 
         this.newref.current.style.backgroundColor="yellow"
         
    }
    render() {
        return (
            <>
                <h1>Ref in React</h1>
                
                <input ref={this.newref} type="text"></input>
                <button onClick={()=>this.getval()}>click here</button>
            </>

        )
    }
}
export default  Refcompo