import React, { Component } from 'react';
import "./Container.css";
class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className='container  bg-success mt-5 p-5'>
                    <div className='row bg-primary'> Row1</div>
                    <div className='row bg-dark'>Row2</div>
                </div>

                <div className='container bg-danger mt-5 p-5'>
                    <div className='row bg-primary'>
                        <div className='col bg-warning'>Col 1</div>
                        <div className='col bg-info'>Col 2</div>
                        <div className='col'>Col 3</div>
                        <div className='col'>Col 4</div>
                        <div className='col'>Col 5</div>
                        <div className='col'>Col 6</div>
                        <div className='col'>Col 7</div>
                        <div className='col'>Col 8</div>
                        <div className='col'>Col 9</div>
                        <div className='col'>Col 10</div>
                        <div className='col'>Col 11</div>
                        <div className='col'>Col 12</div>
                    </div>
                    <div className='row bg-dark'>Row2</div>
                </div>

                <div className='container-fluid bg-primary mt-5 p-4'>
                    <div className='row'>
                        <div className='col-6 bg-dark text-white'>Col 1</div>
                        <div className='col-6 bg-warning text-white'> Col 2</div>
                    </div>

                    <div className='row mt-2'>
                        <div className='col-2  bg-secondary'>Col 1</div>
                        <div className='col-8  bg-warning'>Col 2</div>
                        <div className='col-2  bg-info'>Col 3</div>
                    </div>
                </div>

                <div className="card">
                    <img src="https://media.istockphoto.com/id/183764681/photo/3d-gift-card.jpg?b=1&s=170667a&w=0&k=20&c=cwQcCegtVu9kfjrm9adhQvLHhV8vbZQjA-yjbzr1q8E=" class="card-img-top" alt="Gift card"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-danger">Go somewhere</a>
                    </div>
                </div>

            </>
        );
    }
}
export default Container;

