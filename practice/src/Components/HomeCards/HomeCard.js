import React, { Component } from 'react';
import CardComp from '../CardComp/CardComp';
class HomeCard extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <CardComp
                            btnname="Desktop"
                            name="Desktop"
                            img="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        />
                    </div>

                    <div className='col-4'>
                        <CardComp
                            btnname="Computer"
                            name="Computer keyboard"
                            img="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                        />
                    </div>

                    <div className='col-4'>
                        <CardComp
                            btnname="Table"
                            name="Table"
                            img="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default HomeCard;
