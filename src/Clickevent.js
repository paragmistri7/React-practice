import React, { Component } from 'react';

class Clickevent extends Component {

    render() {
        const clicked = () => {
            return alert("called")
        }
        return (
            <div>
                <button onClick={clicked}>click here</button>
            </div>
        );
    }
}

export default Clickevent;