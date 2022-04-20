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

// function ButtonWithHooks() {
//     const [key1, setKey1] = useState("This is the default state of a Function component.");
//     const [key2, setKey2] = useState(0);

//     return (
//         <>
//             <div>{key1}</div>
//             <div>{key2}</div>
//             <button onClick={() => setKey1("Function Button Clicked")}>Function Button</button>
//             <button onClick={() => setKey2(1)}>Change the number</button>
//         </>
//     )
// };

export default ButtonWithClass;