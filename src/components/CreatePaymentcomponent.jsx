import React, { Component } from 'react';


import PaymentService from '../adapters/PaymentService';



const initialState={
    p_Date:'',
    pay_For:'',
    amount:'',
    method:'',

    p_DateError:'',
    pay_ForError:'',
    amountError:'',
    methodError:''
          
}
class CreatePaymentcomponent extends Component {
        constructor(props){
            super(props)
   
            this.state=initialState;
               
        this.changep_DateHandler=this.changep_DateHandler.bind(this);
        this.changepay_ForHandler= this.changepay_ForHandler.bind(this);
        this.changeamountHandler=this.changeamountHandler.bind(this);
        this.changemethodHandler= this.changemethodHandler.bind(this);
        
        
        
        this.savePayment=this.savePayment.bind(this);
    
    }


    validate=()=>{
        let p_DateError='';
        let pay_ForError='';
        let amountError='';
        let methodError='';

        if(!this.state.p_Date){
            p_DateError="Payment Date is Required !";
        }
        if(!this.state.pay_For){
            pay_ForError="Payment Reason is Required !";
        }
        if(!this.state.amount){
            amountError="Payment Amount is Required !";
        }
        if(!this.state.method){
            methodError="Payment Method is Required !";
        }
        // if(!this.state.r_Price<1000){
        //     r_PriceError="Room Price is Required !";
        // }
        if(p_DateError||pay_ForError||amountError||methodError){
            this.setState({p_DateError,pay_ForError,amountError,methodError});
            return false;
        }
        return true;


    }


    savePayment = (e) => {
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let payment ={p_Date:this.state.p_Date, pay_For:this.state.pay_For,amount:this.state.amount,method:this.state.method};
            console.log('payment =>' + JSON.stringify(payment));
        
            PaymentService.createPayment(payment).then(res =>{
                this.props.history.push('/payments');
            });
        }
    }


    changep_DateHandler = (event) => {
        this.setState({p_Date:event.target.value});
    }

    changepay_ForHandler= (event) => {
        this.setState({pay_For:event.target.value});
    }

    changeamountHandler = (event) => {
        this.setState({amount:event.target.value});
    }
    changemethodHandler = (event) => {
        this.setState({method:event.target.value});
    }

    cancel(){
        this.props.history.push('/payments');
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




                <div className ="container">
                    <div className="row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className=" text-center"> Add Payment</h3>
                            <div className="card-body">
 
                                <form>
                                    {/* <div className="form-group">
                                    <label> Room Type : </label>
                                    <input placeholder="Room Type" name="room_Type" className="form-control"
                                        value={ this.state.room_Type} onChange={this.changeroom_TypeHandler} />
                                    </div> */}

                                    <div className="form-group">
                                    <label> Payment Amount: </label>
                                    <input placeholder="Payment Amount" name="amount" className="formcontrol"
                                        value={ this.state.amount} onChange={this.changeamountHandler} />
                                     <div style={{fontSize: 12, color: "red"}}>{this.state.amountError} </div>
                                    </div>

         

                                    <div className="form-group">
                                    <label> Pay For: </label><br/>
                                        <select placeholder="CHOOSE" value={this.state.pay_For}  name="pay_For" className="formcontrol"
                                            onChange={this.changepay_ForHandler}> 
                                            <option></option>
                                            <option > Room Reservation</option>
                                            <option> Event Booking</option>
                                            <option > Other</option>
                                        </select>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.pay_ForError} </div>
                                    </div>

                                    <div className="form-group">
                                    <label> Payment Method: </label><br/>
                                        <select placeholder="CHOOSE" value={this.state.method}  name="method" className="formcontrol"
                                            onChange={this.changemethodHandler}> 
                                             <option></option>
                                            <option > Mastercard</option>
                                            <option> Debitcard</option>
                                            <option > Electronic bank transfer</option>
                                        </select>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.methodError} </div>
                                    </div>

                                    <div className="form-group">
                                    <label> Payment Date: </label>
                                    <input placeholder="Payment Amount" name="p_Date" className="formcontrol" type="date"
                                        value={ this.state.p_Date} onChange={this.changep_DateHandler} />
                                     <div style={{fontSize: 12, color: "red"}}>{this.state.p_DateError} </div>
                                    </div>


                                    <button style={{background: "rgb(197, 161, 60) 0%"}} className="btn btn-success" onClick={this.savePayment }> Save </button>
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

export default CreatePaymentcomponent;