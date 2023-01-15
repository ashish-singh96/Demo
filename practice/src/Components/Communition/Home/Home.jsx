import React, { Component } from 'react'
import Client from '../Client/Client';
import Server from '../Server/Server';

 class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      clientData:"",
    };
  }
  updateClientData=(data)=>{
         this.setState({
          clientData:data,
         })
  }
  render() {
    return (
      <div className='container p-5 mt-3'>
      <div className='row'>
        <div className='col text-white  text-center p-3 bg-primary'>
            <h2>Home Component</h2>
        </div>
      </div>
        <div className='row mt-3'>
            <div className='col-6'>
                <Client  updateClientData={this.updateClientData}/>
            </div>
            <div className='col-6'>
                <Server clientData={this.state.clientData}/>
            </div>
        </div>
      </div>
    )
  }
}
export default Home;