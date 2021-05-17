import React, { Component } from 'react';
import ReservationService from '../adapters/ReservationService';

class ListReservationComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            reservations: []
          
        }
        this.addReservation=this.addReservation.bind(this);
        this.updateReservation=this.updateReservation.bind(this);
        this.deleteReservation=this.deleteReservation.bind(this);
    }

    
    componentDidMount(){
        ReservationService.getAllReservations().then((res) => {

            this.setState({reservations: res.data});
        });
    }

    viewReservation(id){
        this.props.history.push(`/view-reservation/${id}`);
    }


    deleteReservation(id){

    //     ReservationService.deleteReservations(id).then(res =>{
    //        this.setState({reservations:this.state.reservations.filter(reservation=>reservation.res_Id!==id)});
    //    });
 
    var confirmtext;
       if(window.confirm("Are You Sure You want to Delete This Reservation !")){
        ReservationService.deleteReservations(id).then(res =>{
            this.setState({reservations:this.state.reservations.filter(reservation=>reservation.res_Id!==id)});
            confirmtext="You Succesfully deleted Rservation";
        }) ;
     }else{
         confirmtext="Try again";
      }
    }


    
    updateReservation(id){
        this.props.history.push(`/update-reservation/${id}`);

    }

    addReservation(){
        this.props.history.push('/add-reservation');
    }


    render() {
        return (
            <div>

                <h2 className="text-center"> Reservations List </h2>
                    <div className="row">
                      <button className="btn btn-primary" onClick={this.addReservation}> Add Reservation </button>
                    </div>
                    <div className="row">
                      <table className= "table table-striped table-bordered">

                          <thead>

                              <tr> 
                                  <th> Reservation ID</th>
                                  <th> Customer Name</th>
                                  <th> Customer Phone</th>
                                  <th> Check In</th>
                                  <th> Check Out </th>
                                  <th> No Of Ac Rooms </th>
                                  <th> No Of Non Ac Rooms </th>
                                  <th> No Of Child </th>
                                  <th> No Of Adult </th>
                                  <th> Actions </th>

                              </tr>

                          </thead>

                          <tbody>
                              {
                                  this.state.reservations.map(
                                    reservation=>
                                    <tr key={reservation.res_Id}>
                                          <td>{reservation.res_Id}</td>
                                          <td>{reservation.cus_Name}</td>
                                          <td>{reservation.cus_Phone}</td>
                                          <td>{reservation.check_In}</td>
                                          <td>{reservation.check_Out}</td>
                                          <td>{reservation.no_Of_Ac_Rooms}</td>
                                          <td>{reservation.no_Of_Non_Ac_Rooms}</td>
                                          <td>{reservation.no_Of_Child}</td>
                                          <td>{reservation.no_Of_Adult}</td>
                                          

                                          <tb>

                                              <button style={{background: "rgb(197, 161, 60) 0%"}} onClick= { () => this.updateReservation(reservation.res_Id)}  className="btn btn-info"> Update </button>
                                              <button style={{marginLeft: "1px" }} onClick= {() =>this.deleteReservation(reservation.res_Id)} className="btn btn-danger"> Delete </button>
                                              <button style={{background: "rgb(197, 161, 60) 0%"}} onClick= {() =>this.viewReservation(reservation.res_Id)} className="btn btn-info"> View </button>

                                              
                                          </tb>
                                      </tr>
                                  )
                              }

          

                          </tbody>

                      </table>
                    </div>
            </div>
        );
    }
}

export default ListReservationComponent;




