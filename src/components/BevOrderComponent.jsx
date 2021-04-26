import React, { Component } from 'react';

class BevOrderComponent extends Component {

    render() {
        return (
            <div>
                 <div className="container">
                    <div className="row">
                        <div className="card col-md-10 offset-md-4 offset-md-2">
                            <h3 className="text-center" >Add Beverages</h3>
                            <div className="card-body">
                            <div id="sa">
                                <form >
                
                <div className="form-group">
                                        <label for="beverage type">Beverage Type</label>
                                        <select id="b_Type" class="form-control">
                                             <option selected>Choose...</option>
                                             <option>Beer</option>
                                            </select>
                  </div>

                  <div className="form-group">
                                        <label for="beverage type">Beverage Name</label>
                                        <select id="b_Type" class="form-control">
                                             <option selected>Choose...</option>
                                             <option>Tiger</option>
                                            </select>
                  </div>

                  <div className="form-group">
                                            <label>Quantity : </label>
                                            <input type="number" className="form-control"  />
                                            </div>

                 <div className="form-group">
                                            <label>Rate :</label>
                                            <input type="text" className="form-control"  />
                 </div>
                 
                 
                 <div className="form-group">
                                            <label>Discount :</label>
                                            <input type="text" className="form-control"  />
                 </div>
                 <button className="btn btn-success" style={{background:"#bd9660"}} onClick="">Save</button>
                 <button className="btn btn-danger" onClick="" style={{marginLeft:"10px"}}>Cancel</button>
                
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