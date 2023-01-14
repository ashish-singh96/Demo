import React, { Component } from 'react'
import B from './B';
class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brandName: "",
            brandModel: "",
        };

    }
    updateState = (name,model) => {
        this.setState({
            brandName: name,
            brandModel: model,
        });
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-secondary text-white'>
                                <h2>A Component</h2>
                            </div>
                            <div className='card-body'>
                                <B  updateState={this.updateState}/>
                            </div>

                            <div className='card-footer'>
                                <p className='lead'>{this.state.brandName}</p>
                                <p className='lead'>{this.state.brandModel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default A;
