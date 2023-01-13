import React, { Component } from 'react'

class CardComp extends Component {
    render() {
        return (
            <div className='card'>
                <div className='card-header'>
                <img src={this.props.img} className='img-fluid'/>
                </div>

                <div className='card-body'>
                    <h2>{this.props.name}</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum quod facere! Nobis nemo provident dolore
                        dicta sint incidunt consequatur eaque ullam soluta, sunt adipisci deserunt impedit exercitationem? Nesciunt, saepe.
                    </p>
                    <button className='btn btn-outline-primary'>{this.props.btnname } </button>
                </div>
            </div>
        );
    }
}
export default CardComp;
