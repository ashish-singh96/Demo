import React, { Component } from 'react'

class Client extends Component {
    constructor(props) {
        super(props);
        this.clientRef = React.createRef()
        this.h2Ref = React.createRef()
    }
    getClientData = () => {
        //alert(this.clientRef.current.value)
        // this.h2Ref.current.innerText="Client comp changed"
        // this.h2Ref.current.style.color="red";
        this.props.updateClientData(this.clientRef.current.value)
    };
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-header bg-info text-white'>
                                <h2 ref={this.h2Ref}>Client Component</h2>
                            </div>
                            <div className='card-body'>
                                <div>
                                    <input ref={this.clientRef} type="text" placeholder='Client message' className='form-control' />
                                </div>
                                <button className='btn btn-info mt-3' onClick={this.getClientData}>Send</button>
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
