import React, { Component } from 'react'

class Server extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-warning text-white'>
                                <h2>Server Component</h2>
                            </div>

                            <div className='card-body'>
                                <div>
                                    <input type="text" placeholder='Server Msg' className='form-control' />
                                </div>
                                <button className='btn btn-warning mt-3'>Send</button>
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
export default Server;
