import React, { Component } from 'react';
import BeverageService from '../../services/BeverageService';
import BarRoomOrderService from "../../services/BarRoomOrderService";

class BevOrderComponent extends Component {

    constructor(props){
    super(props);

        this.state={
            bevTypes:[],
            beverages: [],
            barroom_order_id:null,
            bev_type:"",
            bev_ID: "",
            orderDate: new Date(),
            status:"parked",
            quantity: 0,
            rate: 0,
            discount:0,
            //total:0,
            beverageOrderLines:[]
        }

        this.onChangeFormFeild = this.onChangeFormFeild.bind(this);
        this.onSelectBeverage = this.onSelectBeverage.bind(this);
        this.onClickCancel = this.onClickCancel.bind(this);
        this.createBeverageOrder = this.createBeverageOrder.bind(this);
    }

    componentDidMount(){
        const {orderDate,status} = this.state;

        BarRoomOrderService.createOrder({orderDate,status}).then((res1)=>{
            BeverageService.getBevType().then((res2)=>{
                BeverageService.getBeverage().then((res3) => {
                    this.setState({
                        ...this.state,
                        barroom_order_id: res1.data.barroom_order_ID,
                        bevTypes: res2.data,
                        beverages:res3.data
                    });
                });
            })
        })
    }

    createBeverageOrder(e){
        e.preventDefault();
        const {discount,quantity,barroom_order_id,bev_ID,rate} = this.state;
        let totalWithOutDiscount = quantity*rate;
        let discountedValue =  (totalWithOutDiscount*discount)/100;
        let beverage;
        let bar_room_order;
        BeverageService.getBeverageByID(bev_ID).then((res1)=>{
            beverage = res1.data;
            BarRoomOrderService.getBarRoomOrderById(barroom_order_id).then((res2)=>{
                bar_room_order= res2.data;
                BarRoomOrderService.addBeverageToOrder({discount:parseFloat(discount),quantity,total:(totalWithOutDiscount-discountedValue),barroom_Order:bar_room_order,beverage}).then((res3)=>{
                    BarRoomOrderService.getBeverageOrdersByBarRoomOrderId(barroom_order_id).then((res4)=>{
                        this.setState({
                        ...this.state,
                        beverageOrderLines:res4.data
                    })
                    })
                })
            })
        })
    }

    onClickCancel(){
        this.setState({
            ...this.state,
            bev_ID: null,
            quantity: 0,
            rate: 0,
            discount:0,
            total:0,
            bev_type:"",
        })
    }

    onSelectBeverage(event){
        let bev_ID = event.target.value
        const {beverages} = this.state;

        let selectedBeverage = beverages.filter((bev)=>{
            return bev.bev_ID === parseInt(bev_ID);
        })
        if(selectedBeverage.length>0){
            this.setState({
                ...this.state,
                bev_ID:parseInt(bev_ID),
                rate: selectedBeverage[0].unit_Price,
                discount:selectedBeverage[0].discount,
            })
        }else{
            console.log("selectedBeverage",selectedBeverage)
        }
    }

    onChangeFormFeild(feild){
        this.setState({
            ...this.state,
            ...feild
        })
    }

    render() {
        const {beverages,bevTypes,quantity,bev_type,rate,discount,beverageOrderLines} = this.state;
        let beverageOptions = [];
        if(beverages !== undefined && beverages.length>0){
             beverageOptions = beverages.map(({bev_ID,b_Name})=>{
                return {name:b_Name,value:bev_ID}
            })
        }
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-10 offset-md-4 offset-md-2">
                            <h3 className="text-center" >Create Order</h3>
                            <div className="card-body">
                            <div id="sa">
                                <form >
                  <div className="form-group">
                                        <label for="beverage type">Beverage Type</label>
                                        <select id="b_Type" class="form-control" value={bev_type} onChange={(event)=>{this.onChangeFormFeild({bev_type:event.target.value})}}>
                                             <option selected>Choose...</option>
                                             {bevTypes.map(({b_Type,index})=>{
                                                 return (<option value={b_Type} key={index}>{b_Type}</option>)
                                             })}
                                             
                                            </select>
                  </div>
                  <div className="form-group">
                                        <label for="beverage type">Beverage Name</label>
                                        <select id="b_Type" class="form-control" onChange={this.onSelectBeverage}>
                                            <option selected>Choose...</option>
                                            {beverageOptions.map((item,index)=>{
                                                return (<option value={item.value} key={index}>{item.name}</option>)
                                            })}
                                        </select>
                                        
                  </div>
                  <div className="form-group">
                                            <label>Quantity : </label>
                                            <input type="number" className="form-control"  value={quantity} onChange={(event)=>{this.onChangeFormFeild({quantity:parseInt(event.target.value)})}}/>
                                            </div>

                 <div className="form-group">
                                            <label>Rate :</label>
                                            <input type="text" className="form-control"  value={rate} disabled/>
                 </div>
                 <div className="form-group">
                                            <label>Discount :</label>
                                            <input type="text" className="form-control"  value={discount} disabled/>
                 </div>
                 <button className="btn btn-success" style={{background:"#bd9660"}} onClick={this.createBeverageOrder}>Save</button>
                 <button className="btn btn-danger" onClick={this.onClickCancel} style={{marginLeft:"10px"}}>Cancel</button>
                
                 </form>
                 </div>

              <div id='ja'>
              <h2 className="text-center">Billing Area</h2>
              <hr ></hr>
              <hr ></hr>
              
                        <table  className="table table-striped table-bordered">
                            <tr>
                                <th style={{color:'red'}}>Item Name</th>
                                <th style={{color:'red'}}>Qty</th>
                                <th style={{color:'red'}}>Rate</th>
                                <th style={{color:'red'}}>Discount</th>
                                <th style={{color:'red'}}>Total</th>
                            </tr>
                                {beverageOrderLines && beverageOrderLines.length>0 ? (
                                    beverageOrderLines.map((item)=>{
                                        return(
                                            <tr key={item[0]}>
                                                <td>{item[4]}</td>
                                                <td>{item[2]}</td>
                                                <td>{item[5]}</td>
                                                <td>{item[1]}</td>
                                                <td>{item[3]}</td>
                                            </tr>
                                        )
                                    })
                                ):(<span>No items added</span>)}
                        </table>
                        <button className="btn btn-success"  style={{marginLeft:"270px",background:"#bd9660" }} onClick="">Save</button>


              </div>
                 </div>
                        </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default BevOrderComponent;