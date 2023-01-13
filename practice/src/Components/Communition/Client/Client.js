import React, { Component } from 'react'

class Client extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-info text-white'>
                                <h2>Client Component</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <input type="text" placeholder='Client message' className='form-control' />
                                </div>
                                <button className='btn btn-info mt-3'>Send</button>
                            </div>
                            <div className='card-footer'>
                            <p></p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Client;
