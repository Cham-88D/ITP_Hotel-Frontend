import React, { useState, Component } from 'react';

import { Col, Row, Container, Card,Form,Button } from 'react-bootstrap';
class AddOrderForm extends Component {

    constructor(props){
        super(props)
     

        this.state= {
            menu_order_id:'',
            show:false
         
        }
     this.onDisplay =  this.onDisplay.bind(this)
      
 } 
      onDisplay()
      {
          this.setState({
                
                show:!this.state.show
                
          });
      }


    render() {

            let form =""
            if(this.state.show === true)
            {
                form = <form>
                <div class="form-row">
                <div class="form-group col-md-6">
                     <label for="foodType">Food Type</label>
                     <select id="foodType" class="form-control">
                         <option selected>Choose...</option>
                         <option>...</option>
                        </select>
                 </div>
                 <div class="form-group col-md-6">
                     <label for="foodName">Food Item Name</label>
                     <select id="foodNmae" class="form-control">
                         <option selected>Choose...</option>
                         <option>...</option>
                        </select>
                 </div>
                   
                </div>
                <div class="form-row">
                    <div class="form-group  col-md-5">
                        <label for="unit_price">Unit Price</label>
                        <input type="text" class="form-control" id="unit_price"  />
                        <div style={{fontSize:12, color:"red"}}>{this.state.unitPriceError}</div>
                    </div>
                </div>
                <div class="form-row">
                <div class="form-group  col-md-4">
                        <label for="quantity">Quantity</label>
                        <input type="text" class="form-control" id="quantity" />
                        <div style={{fontSize:12, color:"red"}}>{this.state.descriptionError}</div>
                </div>
                </div>
                <div className="form-row">
                    <div class="form-group col-md-6">
                        <label for="discount">Discount</label>
                        <input type="text" class="form-control" id="discount"/>
                        <div style={{fontSize:12, color:"red"}}>{this.state.discountError}</div>
                    </div>
               
                 </div>
                 <div class="form-row">
                    <div class="form-group col-md-4">
                         <button type="submit" id="submit" class="btn " style={{background: "#bd9660",color:"white"}} >Save</button>
                     </div>
                     <div class="form-group col-md-4">
                         <button  id="reset" type="reset" class="btn " style={{marginLeft:30,background: "#bd9660",color:"white"}} >Reset</button>
                     </div>
                </div>

                </form>
            }
 


        return (
          
            <div>
                  
                  <Container>
                      <button style={{marginTop:20}} onClick={this.onDisplay}>Create Order</button>
                    <Row>
                    <Col lg={5} >
                        
                            <div className="row"> 
                                <div className="card col-md-10 offset-md-3 offset-md-3"  style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                    <h3 className="text-center">Order Menu Item</h3>
                                    <div className="card-body">
                                            
                                       {form}

                                    </div>
                                </div>
                               
                             </div>
                   
                       
                    </Col>
                    <Col lg={7} >
                        
                            <div className="row"> 
                                <div className="card col-md-10 offset-md-3 offset-md-3" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                                    <div className="container  bg-dark" style={{color:'white',marginTop:10}} >
                                    <h3 className="text-center"   style={{fontSize:14,textAlign:"center",marginTop:5}}>BILLING    AREA</h3>
                                    </div>
                                    <div className="card-body">

                                    <div className="row">
                <table className="table table-striped ">

                    <thead>

                        <tr>
                           
                           <th>Menu Item Name </th> 
                           <th>Unit Price </th> 
                           <th>Quantity </th> 
                           <th>Discount </th> 
                           <th>Total </th> 
                          
                          
                        </tr>

                    </thead>

                    <tbody>

                       
                    </tbody>


                </table>
                                         <div class="form-group col-md-4">
                                             <button type="submit" id="submit" class="btn " style={{marginLeft:250,marginTop:150,background: "#bd9660",color:"white"}}>Submit</button>
                                         </div>
                                         <div class="form-group col-md-4">
                                             <button type="submit" id="submit" class="btn " style={{marginLeft:200,marginTop:150,marginRight:250,background: "#bd9660",color:"white"}}>Print Bill</button>
                                         </div>

            </div>



                                    </div>
                                </div>
                               
                             </div>
                   
                        
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AddOrderForm;