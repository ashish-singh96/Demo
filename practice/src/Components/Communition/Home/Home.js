import React, { Component } from 'react'
import Client from '../Client/Client';
import Server from '../Server/Server';

 class Home extends Component {
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
                <Client/>
            </div>
            <div className='col-6'>
                <Server/>
            </div>
        </div>
      </div>
    )
  }
}
export default Home;
