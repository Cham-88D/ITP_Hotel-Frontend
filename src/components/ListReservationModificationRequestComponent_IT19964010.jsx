
import React, { Component } from 'react';
import ReservationRequestService_IT19964010 from '../adapters/ReservationRequestService_IT19964010';
class ListReservationModificationRequestComponent_IT19964010 extends Component {

    constructor(props){
        super(props)

        this.state={
            res_modification_requests: []
          
        }
        this.addRes_Modification_Request=this.addRes_Modification_Request.bind(this);
        // this.updateRes_Modification_Request=this.updateRes_Modification_Request.bind(this);
        this.deleteRes_Modification_Request=this.deleteRes_Modification_Request.bind(this);
    }

    
    componentDidMount(){
        ReservationRequestService_IT19964010.getAllRes_Modification_Requests().then((res) => {

            this.setState({res_modification_requests:res.data});
        });
    }

    viewRes_Modification_Request(id){
        this.props.history.push(`/view-request/${id}`);
    }


    deleteRes_Modification_Request(id){
        var confirmtext;
           if(window.confirm("Are You Sure You want to Delete This Reservation Modify Request !")){
                ReservationRequestService_IT19964010.deleteRes_Modification_Requests(id).then(res =>{
                this.setState({res_modification_requests:this.state.res_modification_requests.filter(res_modification_request=>res_modification_request.reserve_M_Id!==id)});
                confirmtext="You Succesfully deleted Rservation";
                        }) ;
                     }else{
                         confirmtext="Try again";
                      }
    }
   
    // updateRes_Modification_Request(id){
    //     this.props.history.push(`/update-request/${id}`);

    // }

    addRes_Modification_Request(){
        this.props.history.push('/add-request');
    }


    render() {
        return (
            
             <div>

                <h2 className="text-center"> Room Reservation Modification Request List </h2>
                    <div className="row">
                      <button className="btn btn-primary" onClick={this.addRes_Modification_Request}> Add Room Reservation Modification Request </button>
                    </div>
                    <div className="row">
                      <table className= "table table-striped table-bordered">

                          <thead>

                              <tr> 
                                 <th> Reservation ID</th>
                                  <th> Modification Type</th>
                                  <th> Modification Reason</th>
                                  <th> Message</th>
                                  <th> Requested Date </th>
                                  <th> Actions </th>
                              </tr>

                          </thead>

                          <tbody>
                              {
                                  this.state.res_modification_requests.map(
                                    res_modification_request=>
                                      <tr key={res_modification_request.reserve_M_Id}>
                                          
                                          <td>{res_modification_request.rm_id}</td>
                                          <td>{res_modification_request.rm_Type}</td>
                                          <td>{res_modification_request.r_Reason}</td>
                                          <td>{res_modification_request.r_Message}</td>
                                          <td>{res_modification_request.rm_Req_Date}</td>
                                          <tb>
                                              <button style={{marginLeft: "10px" }} onClick= {() =>this.deleteRes_Modification_Request(res_modification_request.reserve_M_Id)} className="btn btn-danger"> Delete </button>
                                              <button style={{background: "rgb(197, 161, 60) 0%",marginLeft: "30px" }}  onClick= {() =>this.viewRes_Modification_Request(res_modification_request.reserve_M_Id)} className="btn btn-info"> View </button>
                                              
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


export default ListReservationModificationRequestComponent_IT19964010;