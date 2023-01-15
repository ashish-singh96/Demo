import React, { Component } from 'react'

 class Updating extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        };
    }
    static getDrivedStateFromProps(){
        console.log("getDrivedStateFromProps is called");
    }

    shouldComponentUpdate(nextprops,nextState){
        console.log("shouldComponentUpdate is called");
        if(this.state.count===nextState.count){
            return false;
        }else{
            return true;
        }
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate is called");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate is called");
    }
    // updateCount(){
    //     this.setState({
    //         count: this.state.count+1,
    //     })
    // }
    updateCount =()=>{
        this.setState({
            count:this.state.count+1,
        });
    };

  render() {
    console.log("Render is called");
    return (
      <div className='container text-center mt-5'>
        <div className='row'>
            <div className='col'>
                <p className=' lead'> Count: {this.state.count}</p>
                <button onClick={this.updateCount} className='btn btn-primary'>Update Count</button>
                
            </div>
        </div>
      </div>
    )
  }
}

export default Updating;
