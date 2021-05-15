// import React, { useEffect,Component } from 'react'
import React, { Component } from 'react';
import PaymentService from '../adapters/PaymentService';

class ListpaymentComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            payments:[],
            searchId:''
          
        }
        this.addPayment=this.addPayment.bind(this);
        // this.updateRoom=this.updateRoom.bind(this);
        // this.deletePayment=this.deletePayment.bind(this);
        // this.GenerateReport = this.GenerateReport.bind(this);
    }

    
    componentDidMount(){
        PaymentService.getAllPayments().then((res) => {

            this.setState({payments:res.data});
        });
    }

    // viewPayment(id){
    //     this.props.history.push(`/view-payment/${id}`);
    // }

    // GenerateReport(){
    //     this.props.history.push('/room-report');
    // }

    // deletePayment(id){

    //     PaymentService.deletePayments(id).then(res =>{
    //        this.setState({payments:this.state.payments.filter(payment=>payment.pId!==id)});
    //    });
    // }


    // updateRoom(id){
    //     this.props.history.push(`/update-room/${id}`);

    // }

    addPayment(){
        this.props.history.push('/add-payments');
    }
    searchPId(event){
        this.setState({ searchId: event.target.value.substr(0,
            20)});
    }


    render() {
        let filterPId= this.state.payments.filter((
            payment)=>{
                return payment.p_Date.indexOf(this.state.
                    searchId)!==-1;
            }
        );
        return (
            
             <div>
                 <br></br>
                <div class="form-group col-md-4">
                    <input type="text" class="form-control" style={{marginLeft:0}} placeholder="Enter Paid Date" value={this.state.searchId} onChange={this.searchPId.bind(this)} />
                </div>
                <h2 className="text-center"> Payments List </h2>
                    <div className="row">
                      <button className="btn btn-primary" onClick={this.addPayment}> Add Payment</button>
                      {/* <button style={{marginLeft:"20px", color:"red"}} className="pdfbutton" onClick={this.GenerateReport} type='submit'>Generate PDF</button> */}
                    </div>
                    <div className="row">
                      <table className= "table table-striped table-bordered">

                          <thead>

                              <tr> 
                                  <th> Payment Date</th>
                                  <th> Payment For</th>
                                  <th> Payment Amount</th>
                                  <th> Payment Method </th>
                                  {/* <th> Action </th> */}
                              </tr>

                          </thead>

                          <tbody>
                              {
                                  filterPId.map(
                                //   this.state.payments.map(
                                    payment=>
                                      <tr key={payment.pId}>
                                          
                                          <td>{payment.p_Date}</td>
                                          <td>{payment.pay_For}</td>
                                          <td>{payment.amount}</td>
                                          <td>{payment.method}</td>
                                          <tb>
                                              {/* <button onClick= { () => this.updateRoom(room.roomId)}  className="btn btn-info"> Update </button> */}
                                              {/* <button style={{marginLeft: "10px" }} onClick= {() =>this.deletePayment(payment.pId)} className="btn btn-danger"> Delete </button> */}
                                              {/* <button style={{marginLeft: "30px" }} onClick= {() =>this.viewPayment(payment.pId)} className="btn btn-info"> View </button> */}
                                              
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

export default ListpaymentComponent;

