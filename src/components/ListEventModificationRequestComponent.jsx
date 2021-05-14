import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import EventModificationRequestService from '../services/EventModificationRequestService';

class ListEventModificationRequestComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            eventModificationRequests: [],
            searchId:''
        }
        this.addEventModificationRequest = this.addEventModificationRequest.bind(this);
        this.viewEventModificationRequest = this.viewEventModificationRequest.bind(this);

    }
    
     viewEventModificationRequest(ev_M_ID){
         this.props.history.push(`/view-event-modification-request/${ev_M_ID}`);
     }
    
     addEventModificationRequest(){
         this.props.history.push('/add-event-modification-request');
     }

     searchEventModificationRequestId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }

     componentDidMount(){
        EventModificationRequestService.getAllEv_Modification_Requests().then( (res) =>{
        
            this.setState({eventModificationRequests: res.data});
         });
     }

    render() {
        let filterEventModificationRequestId = this.state.eventModificationRequests.filter((
            eventModificationRequest)=>{
                return eventModificationRequest.reason.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            <div>
                 <div class="form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:80}} placeholder="Enter Event Modification Request Reason" value={this.state.searchId} onChange={this.searchEventModificationRequestId.bind(this)} />
                </div>
                <h2 className="tableheading "> Event Modification Requests List</h2> 
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addEventModificationRequest}>Add Event Modification Request </button>
                </div>
               <div className="row">
                <table className="table table-striped table=bordered">
                    <thead>
                        <tr className="theartr">
                            <th>Event Modification Request ID</th>
                            <th>Booking ID</th>
                            <th>EMAIL</th>
                            <th>REASON</th>
                            <th>DAYS REMAINING FOR THE EVENT</th>
                            <th>MESSAGE</th>   
                            <th>ACTIONS</th>                                             
                        </tr>
                    </thead>

                    { <tbody>
                        {
                            filterEventModificationRequestId.map(
                            //this.state.eventModificationRequests.map(
                                eventModificationRequest =>
                                <tr key= {eventModificationRequest.ev_M_ID}>
                                    <td> {eventModificationRequest.ev_M_ID} </td>
                                    <td> {eventModificationRequest.booking} </td>
                                    <td> {eventModificationRequest.email} </td>
                                    <td> {eventModificationRequest.reason} </td>
                                    <td> {eventModificationRequest.days_Remain_Booking} </td>
                                    <td> {eventModificationRequest.message} </td>
                                    <td>
                                        <button onClick = { () => this.viewEventModificationRequest(eventModificationRequest.ev_M_ID)} className="btn btn-success">VIEW</button>  
                                    </td>
                                </tr>

                            )
                        }

                    </tbody> }
                </table>
              </div> 
            </div>
        );
    }
}

export default ListEventModificationRequestComponent;