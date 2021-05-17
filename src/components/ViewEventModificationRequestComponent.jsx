import React, { Component } from 'react';
import EventModificationRequestService from '../services/EventModificationRequestService';

class ViewEventModificationRequestComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            ev_M_ID: this.props.match.params.ev_M_ID,
            eventModificationRequest: {}
        }
      
    }

    componentDidMount(){
        EventModificationRequestService.getEv_Modification_RequestById(this.state.ev_M_ID).then( res =>{
            this.setState({eventModificationRequest: res.data});
            
        })
   
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">View Event Modification Request Details</h3>
                    <div className = "card-body">
                        {/* <div className = "row">
                           <label>Booking ID:</label>
                           <div> {this.state.eventModificationRequest.booking} </div>
                        </div> */}
                        <div className = "row">
                           <label>Email:</label>
                           <div> {this.state.eventModificationRequest.email} </div>
                        </div>
                        <div className = "row">
                           <label>Reason for the Modification:</label>
                           <div> {this.state.eventModificationRequest.reason} </div>
                        </div>
                        <div className = "row">
                           <label>Days Remaining for the Event:</label>
                           <div> {this.state.eventModificationRequest.days_Remain_Booking} </div>
                        </div>
                        <div className = "row">
                           <label>Message:</label>
                           <div> {this.state.eventModificationRequest.message} </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEventModificationRequestComponent;