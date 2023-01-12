import React from "react";

class State extends React.Component {

    constructor() {
        super();
        this.state = {
            title: "React Component",
            description: "It is a React Component",
        }
    }
    updateState = () => {
        this.setState({
            title: "State Component",
            description: "It is state Compoent",
        });
    };
    render() {
        return (<div>
            <h2>{this.state.title}</h2>
            <p>{this.state.description}</p>
            <button onClick={this.updateState}>Update UI</button>
        </div>
        );
    }
}
export default State;