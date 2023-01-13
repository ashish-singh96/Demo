import React, { Component } from 'react'
import "./Button.css";
class Button extends Component {
    render() {
        return (
           
                <div className="btn-container bg-primary">
                    <button className="mybtn">Bootstrap</button>
                    <button className='btn btn-outline-danger'>New Bootstrap Button</button>
                </div>
        )
    }
}
export default Button;
