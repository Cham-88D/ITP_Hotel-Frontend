import React, { Component } from 'react';
import ReservationService from '../adapters/ReservationService';

class ViewReservationComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            reservation: {}
          
        }
    } 
    componentDidMount(){
        ReservationService.getReservationtById(this.state.id).then( res =>{
            this.setState({reservation: res.data});
         })
    }
    
    render() {
        return (
            <div>


               <div className ="card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Reservation details</h3>
                    <div className= "card-body">
                    <div className="row">
                            <label> Room Reservation ID :</label>
                            <div> { this.state.reservation.res_Id}</div>
                        </div>


                        <div className="row">
                            <label> Customer Name :</label>
                            <div> { this.state.reservation.cus_Name}</div>
                        </div>
                        <div className="row">
                            <label> Customer Phone :</label>
                            <div> { this.state.reservation.cus_Phone}</div>
                        </div>
                        <div className="row">
                            <label> Check In :</label>
                            <div> { this.state.reservation.check_In}</div>
                        </div>
                        <div className="row">
                            <label> Check Out :</label>
                            <div> { this.state.reservation.check_Out}</div>
                        </div>
                        <div className="row">
                            <label> No Of Ac Rooms :</label>
                            <div> { this.state.reservation.no_Of_Ac_Rooms}</div>
                        </div>
                        <div className="row">
                            <label> No Of Non Ac Rooms :</label>
                            <div> { this.state.reservation.no_Of_Non_Ac_Rooms}</div>
                        </div>
                        <div className="row">
                            <label>  No Of Child :</label>
                            <div> { this.state.reservation.no_Of_Child}</div>
                        </div>
                        <div className="row">
                            <label> No Of Adult :</label>
                            <div> { this.state.reservation.no_Of_Adult}</div>
                        </div>

                    </div>
               </div>

            </div>
        );
    }
}

export default ViewReservationComponent;