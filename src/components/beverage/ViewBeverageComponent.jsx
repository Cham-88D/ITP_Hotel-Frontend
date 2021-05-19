import React, { Component } from 'react';

class ViewBeverageComponent extends Component {

    constructor(props){
        super(props)
        this.state ={
            bev_ID: this.props.match.params.bev_ID,
            
        }
    }
    render() {
        
        return (
            <div>
                <h2>View Beverage Details</h2>
            </div>
        );
    }
}

export default ViewBeverageComponent;