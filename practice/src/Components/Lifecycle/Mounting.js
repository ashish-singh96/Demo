import React, { Component } from 'react'

class Mounting extends Component {
    constructor(props){
        super(props);
        console.log("Constructor is called");
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps is called");
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount is called");
    }
    render() {
        console.log("Render is called");
        return (
            <div className='container mt-5'>
                <h2>Mounting phase</h2>
                <p className='lead text-primary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus labore, explicabo fugit sed perferendis enim
                    voluptate atque. Animi consequatur iure quasi! Laboriosam reiciendis dolor soluta repellendus molestias consequatur
                    voluptatum doloremque.
                </p>
            </div>
        );
    }
}
export default Mounting;
