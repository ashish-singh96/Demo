import React, { Component } from 'react'

class B extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandName: "Apple",
            modelName: "Iphone 14",
        };
    }
    sendData= ()=>{
        this.props.updateState(this.state.brandName,this.state.modelName);
    }
    render() {
        return (
            <div className='contaner'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-warning text-white'>
                                <h2>B Component</h2>
                            </div>
                            <div className='card-body'>
                                <button className='btn btn-info' onClick={this.sendData}>Send Data to Parent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default B;
