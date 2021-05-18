
import React, { Component } from 'react';

import ReservationService_IT19964010 from '../adapters/ReservationService_IT19964010';

class UpdateReservation_IT19964010 extends Component {
    constructor(props){
        super(props)

        this.state={

        id: this.props.match.params.id,
        cus_Name:'',
        cus_Phone:'',
        check_In:'',
        check_Out:'',
        no_Of_Ac_Rooms:'',
        no_Of_Non_Ac_Rooms:'',
        no_Of_Child:'',
        no_Of_Adult:'',
   

}
// class UpdateReservation extends Component {
//     constructor(props){
//         super(props)

//         this.state=initialState;
           
    this.changecus_NameHandler=this.changecus_NameHandler.bind(this);
    this.changecus_PhoneHandler= this.changecus_PhoneHandler.bind(this);
    this.changecheck_InHandler=this.changecheck_InHandler.bind(this);
    this.changecheck_OutHandler= this.changecheck_OutHandler.bind(this);
    this.changeno_Of_Ac_RoomsHandler=this.changeno_Of_Ac_RoomsHandler.bind(this);
    this.changeno_Of_Non_Ac_RoomsHandler= this.changeno_Of_Non_Ac_RoomsHandler.bind(this);
    this.changeno_Of_ChildHandler=this.changeno_Of_ChildHandler.bind(this);
    this.changeno_Of_AdultHandler= this.changeno_Of_AdultHandler.bind(this);


//     // this.saveReservation=this.saveReservation.bind(this);

}


componentDidMount(){
    ReservationService_IT19964010.getReservationtById(this.state.id).then( (res) => {
        let reservation = res.data;
        this.setState({
            cus_Name:reservation.cus_Name,
            cus_Phone:reservation.cus_Phone,
            check_In:reservation.check_In,
            check_Out:reservation.check_Out,
            no_Of_Ac_Rooms:reservation.no_Of_Ac_Rooms,
            no_Of_Non_Ac_Rooms:reservation.no_Of_Non_Ac_Rooms,
            no_Of_Child:reservation.no_Of_Child,
            no_Of_Adult:reservation.no_Of_Adult,
           

            
        });
    });
}

updateReservation =(e) => {
    e.preventDefault();
    let reservation ={cus_Name:this.state.cus_Name, cus_Phone:this.state.cus_Phone,check_In:this.state.check_In,
                check_Out:this.state.check_Out,no_Of_Ac_Rooms:this.state.no_Of_Ac_Rooms,no_Of_Non_Ac_Rooms:this.state.no_Of_Non_Ac_Rooms,
                no_Of_Child:this.state.no_Of_Child,no_Of_Adult:this.state.no_Of_Adult};
                console.log('reservation =>' + JSON.stringify(reservation));

                ReservationService_IT19964010.createReservation(reservation).then(res =>{
                     this.props.history.push('/reservations');
                });

   
}


changecus_NameHandler= (event) => {
    this.setState({cus_Name:event.target.value});
}

changecus_PhoneHandler = (event) => {
    this.setState({cus_Phone:event.target.value});
}

changecheck_InHandler = (event) => {
    this.setState({check_In:event.target.value});
}
changecheck_OutHandler= (event) => {
    this.setState({check_Out:event.target.value});
}

changeno_Of_Ac_RoomsHandler= (event) => {
    this.setState({no_Of_Ac_Rooms:event.target.value});
}

changeno_Of_Non_Ac_RoomsHandler = (event) => {
    this.setState({no_Of_Non_Ac_Rooms:event.target.value});
}
changeno_Of_ChildHandler= (event) => {
    this.setState({no_Of_Child:event.target.value});
}

changeno_Of_AdultHandler = (event) => {
    this.setState({no_Of_Adult:event.target.value});
}


cancel(){
    this.props.history.push('/reservations');
}
render() {
    return (
        <div>

{/* 
<div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className = "navbar-brand" >Room Reservation Management  </div>

                    </nav>
                </header>
            </div> */}



            <div className ="container">
                <div className="row">
                    <div className= "card col-md-6 offset-md-3 offset-md-3">
                        <h3 className=" text-center"> Update Reservation </h3>
                        <div className="card-body">

                            <form>
                                {/* <div className="form-group">
                                <label> Room Type : </label>
                                <input placeholder="Room Type" name="room_Type" className="form-control"
                                    value={ this.state.room_Type} onChange={this.changeroom_TypeHandler} />
                                </div> */}

                                

                                <div className="form-group">
                                <label> Customer Name : </label>
                                <input placeholder="Customer Name" name="cus_Name" className="formcontrol"
                                    value={ this.state.cus_Name} onChange={this.changecus_NameHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.cus_NameError} </div>
                                </div>

                                <div className="form-group">
                                <label> Customer Phone : </label>
                                <input placeholder="Customer Phone" name="cus_Phone" className="formcontrol"
                                    value={ this.state.cus_Phone} onChange={this.changecus_PhoneHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.cus_PhoneError} </div>
                                </div>

                                <div className="form-group">
                                <label> Check In : </label>
                                <input placeholder="Check In" name="check_In" className="formcontrol"
                                    value={ this.state.check_In} onChange={this.changecheck_InHandler} type="date"/>
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.check_InError} </div>
                                </div>

                                <div className="form-group">
                                <label> Check Out : </label>
                                <input placeholder="Check Out" name="check_Out" className="formcontrol"
                                    value={ this.state.check_Out} onChange={this.changecheck_OutHandler} type="date" />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.check_OutError} </div>
                                </div>

                                <div className="form-group">
                                <label>  No Of Ac Rooms  : </label>
                                <input placeholder="No Of Ac Rooms" name="no_Of_Ac_Rooms" className="formcontrol"
                                    value={ this.state.no_Of_Ac_Rooms} onChange={this.changeno_Of_Ac_RoomsHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.no_Of_Ac_RoomsError} </div>
                                </div>

                                <div className="form-group">
                                <label>No Of Non Ac Rooms : </label>
                                <input placeholder="No Of Non Ac Rooms" name="no_Of_Non_Ac_Rooms" className="formcontrol"
                                    value={ this.state.no_Of_Non_Ac_Rooms} onChange={this.changeno_Of_Non_Ac_RoomsHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.no_Of_Non_Ac_RoomsError} </div>
                                </div>

                                <div className="form-group">
                                <label> No Of Child : </label>
                                <input placeholder="No Of Child"  name="no_Of_Child" className="formcontrol"
                                    value={ this.state.no_Of_Child} onChange={this.changeno_Of_ChildHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.no_Of_ChildError} </div>
                                </div>

                

                                <div className="form-group">
                                <label>No Of Adult : </label>
                                <input placeholder="No Of Adult" name="no_Of_Adult" className="formcontrol"
                                    value={ this.state.no_Of_Adult} onChange={this.changeno_Of_AdultHandler} />
                                 <div style={{fontSize: 12, color: "red"}}>{this.state.no_Of_AdultError} </div>
                                </div>

                                 

                                <button style={{background: "rgb(197, 161, 60) 0%"}} className="btn btn-success" onClick={this.updateReservation}> Update </button>

                                <button className="btn btn-danger" style={{marginLeft: "10px" }} onClick={this.cancel.bind(this)}  > Cancel </button> 
                             </form>   

                        </div>

                    
                    
                    </div>

                </div>
            </div>
        </div>
    );
}
}




export default UpdateReservation_IT19964010 ;