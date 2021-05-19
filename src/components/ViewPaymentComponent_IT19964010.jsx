
import React, { Component } from 'react';
import PaymentService_IT19964010 from '../adapters/PaymentService_IT19964010';

class ViewPaymentComponent_IT19964010 extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            payment: {}
          
        }
    } 
    componentDidMount(){
        PaymentService_IT19964010.getPaymentById(this.state.id).then( res =>{
            this.setState({payment: res.data});
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
                    <h3 className = "text-center"> View Payment details</h3>
                    <div className= "card-body">
                        <div className="row">
                            <label> Payment Date :</label>
                            <div> { this.state.payment.p_Date}</div>
                        </div>
                        <div className="row">
                            <label> Payment For :</label>
                            <div> { this.state.payment.pay_For}</div>
                        </div>
                        <div className="row">
                            <label> Payment Amount :</label>
                            <div> { this.state.payment.amount}</div>
                        </div>
                        <div className="row">
                            <label>  Payment Method :</label>
                            <div> { this.state.payment.method}</div>
                        </div>
                    </div>
               </div>

            </div>
        );
    }
}

export default ViewPaymentComponent_IT19964010;