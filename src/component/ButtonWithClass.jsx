import React, { Component } from 'react';

class ButtonWithClass extends Component {
    constructor() {
        super()
        this.state = {
            key1:"This is the default of a class component",
            key2:0
        }
    }

    render() {
        return (
            <div>
                <>
                {this.state.key1}
                <button onClick={() => this.setState({key1: "Class component clicked!"})}>Click mee! C</button>

                <button onClick={() => this.setState({key2: "1"})}>{this.state.key2}</button>
                </>
            </div>
        );
    }
}

export default ButtonWithClass;