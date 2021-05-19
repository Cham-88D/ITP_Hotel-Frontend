import React, { Component } from 'react';
import PurchasedItemDetailService from '../adapters/PurchasedItemDetailService';

class UpdatePurchasedItemDetail extends Component {
    constructor(props){
        super(props)

        this.state = {
            invoiceNo: this.props.match.params.id,
            itemCode:'',
            itemName:'',
            categoty:'',
            description:'',
            date: '',
            sid: '',
            payment:'',
            
        }
        this.changeInvoiceNoHandler = this.changeInvoiceNoHandler.bind(this);
        this.changeItemCodeHandler = this.changeItemCodeHandler.bind(this);
        this.updatePurchasedItemDetail = this.updatePurchasedItemDetail.bind(this);
    }
    componentDidMount(){
        PurchasedItemDetailService.getPurchasedItemDetailById(this.state.invoiceNo).then((res) => {
            let purchaseditemdetail = res.data;
            this.setState({invoiceNo:purchaseditemdetail.invoiceNo, itemCode: purchaseditemdetail.itemCode, itemName: purchaseditemdetail.itemName, category: purchaseditemdetail.it_Category, description: purchaseditemdetail.description, date: purchaseditemdetail.date, sid: purchaseditemdetail.sid, payment: purchaseditemdetail.payment })
        });
    } 
    updatePurchasedItemDetail = (e) => {
        e.preventDefault();
        let purchaseditemdetail = {invoiceNo:this.state.invoiceNo, itemCode:this.state.itemCode, itemName:this.state.itemName, it_Category:this.state.category, description:this.state.description, /*date:this.state.date,*/ sid: this.state.sid, payment: this.state.payment};
        console.log('purchaseditemdetail => ' + JSON.stringify(purchaseditemdetail));
        PurchasedItemDetailService.updatePurchasedItemDetail(purchaseditemdetail, this.state.invoiceNo).then( res =>{
            this.props.history.push('/view-purchaseditem');
        });
    }
    changeInvoiceNoHandler = (event) => {
        this.setState({invoiceNo: event.target.value});
    }
    changeItemCodeHandler = (event) => {
        this.setState({itemCode: event.target.value});
    }
    changeItemNameHandler = (event) => {
        this.setState({itemName: event.target.value});
    }
    changeCategoryHandler = (event) => {
        this.setState({category: event.target.value});
    }
    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }
   /* changeDateHandler = (event) => {
        this.setState({date: event.target.value});
    }*/
    changeSIDHandler = (event) => {
        this.setState({sid: event.target.value});
    }
    changePaymentHandler = (event) => {
        this.setState({payment: event.target.value});
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row" className="css">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className = "text-center"><b>Update Purchased Item</b></h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group"> 
                                        <label>Invoice No:</label>
                                        <input placeholder = "Invoice No" name="invoiceNo" className = "form-control"
                                            value={this.state.invoiceNo} onChange={this.changeInvoiceNoHandler} readOnly/>
                                     </div> 
                                    <div className = "form-group">
                                        <label>Item Code:</label>
                                        <input placeholder = "Item Code" name="itemCode" className = "form-control"
                                            value={this.state.itemCode} onChange={this.changeItemCodeHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Item Name:</label>
                                        <input  placeholder = "Item Name" name="itemName" className = "form-control"
                                            value={this.state.itemName} onChange={this.changeItemNameHandler}/>
                                    </div>
                                    
                                    
                                    <div className = "form-group">
                                        <label>Category:</label>
                                        <select name = "category" className ="form-control" value ={this.state.category} onChange={this.changeCategoryHandler}>
                                            <option value ="furniture">Furniture</option>
                                            <option value ="decorationItems">Decoration Items</option>
                                            <option value ="electricalItems">Electrical Items</option>
                                            <option value ="kitchenItems">Kitchen Items</option>
                                            <option value ="cleaningProducts">Cleaning Products</option>

                                        </select>

                                    </div>
                                    <div className = "form-group">
                                        <label>Description:</label>
                                        <input placeholder = "Description" name="description" className = "form-control"
                                            value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                    </div>
                                    
                                    <div className = "form-group"> 
                                       <label>Date:</label> 
                                        <input  placeholder = "Date"  name="date" className = "form-control" 
                                             value={this.state.date} /*onChange={this.changeDateHandler}*//> 
                                    </div> 
                                    <div className = "form-group">
                                        <label>Supplier Id:</label>
                                        <input  placeholder = "Supplier Id"  name="sid" className = "form-control"
                                            value={this.state.sid} onChange={this.changeSIDHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Payment:</label>
                                        <input  placeholder = "Payment"  name="payment" className = "form-control"
                                            value={this.state.payment} onChange={this.changePaymentHandler}/>
                                    </div>
                                    
                                    <button type="submit" className = "btn btn-success"   onClick = {this.updatePurchasedItemDetail}>Update</button>
                                    <button type="reset" className = "btn btn-danger" /*onClick = {this.cancel.bind(this)}*/ style={{marginLeft: "10px"}}>Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    };
}

export default UpdatePurchasedItemDetail;