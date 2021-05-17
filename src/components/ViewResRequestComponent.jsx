import React, { Component } from 'react';
import ReservationRequestService from '../adapters/ReservationRequestService';

class ViewResRequestComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            res_modification_request: {}
          
        }
    } 
    componentDidMount(){
        ReservationRequestService.
        getRes_Modification_RequestById(this.state.id).then( res =>{
            this.setState({res_modification_request: res.data});
         })
    }
    
    render() {
        return (
            <div>

{/* <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className = "navbar-brand" >Room Reservation Management  </div>

                    </nav>
                </header>
            </div> */}



               <div className ="card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Room Reservation Modification details</h3>
                    <div className= "card-body">
                        <div className="row">
                            <label> Reservation ID :</label>
                            <div> { this.state.res_modification_request.rm_id}</div>
                        </div>
                        <div className="row">
                            <label> Modification Type :</label>
                            <div> { this.state.res_modification_request.rm_Type}</div>
                        </div>
                        <div className="row">
                            <label> Modification Reason :</label>
                            <div> { this.state.res_modification_request.r_Reason}</div>
                        </div>
                        <div className="row">
                            <label> Message:</label>
                            <div> { this.state.res_modification_request.r_Message}</div>
                        </div>
                       
                        <div className="row">
                            <label> Requested Date :</label>
                            <div> { this.state.res_modification_request.rm_Req_Date}</div>
                        </div>
                        
                    </div>
               </div>

            </div>
        );
    }
}

export default ViewResRequestComponent;