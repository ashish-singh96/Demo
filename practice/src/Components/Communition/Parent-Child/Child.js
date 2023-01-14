import React, { Component } from 'react'

class Client extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-info  text-white'>
                                <h2>Client Component</h2>
                            </div>
                            <div className='card-body'>
                                <p className='lead'>{this.props.name}</p>
                                <p className='lead'>{this.props.city}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Client;
