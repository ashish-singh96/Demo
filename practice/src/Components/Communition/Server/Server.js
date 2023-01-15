import React, { Component } from 'react'

class Server extends Component {
    constructor(props){
        super(props);
        this.serverRef=React.createRef();
    }
    getServerData=()=>{
        alert(this.serverRef.current.value)
    };
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
                                    <input ref={this.serverRef} type="text" placeholder='Server Msg' className='form-control' />
                                </div>
                                <button className='btn btn-warning mt-3 'onClick={this.getServerData}>Send</button>
                            </div>
                            <div className='card-footer'>
                                <p>{this.props.clientData}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Server;