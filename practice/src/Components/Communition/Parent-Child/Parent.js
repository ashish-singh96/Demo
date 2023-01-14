import React, { Component } from 'react'
import  Child from './Child';
 class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            city:""
        };
    }
    setDataToChild = ()=>{
        this.setState({
            name:"Ashish",
            city:"kanpur"
        });
    }
  render() {
    return (
           <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-header bg-secondary text-white'>
                            <h2>Parent Component</h2>
                        </div>

                        <div className='card-body'>
                            <Child name={this.state.name} city={this.state.city}/>
                        </div>

                        <div className='card-footer'>
                            <button onClick={this.setDataToChild} className='btn btn-primary'>Send Data to child</button>
                        </div>
                    </div>
                </div>
            </div>
           </div>
    )
  }
}
export default Parent;
