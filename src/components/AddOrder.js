import React, { useState, useEffect } from 'react';
import { Col, Row, Container, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';



function AddOrder() {
    const [menu_order_id, setMenu_order_id] = useState("");
    const [show, setShow] = useState(false);
    const [category, setCategory] = useState([]);
    const [gtCategory, getCategory] = useState("");
    const [menuItem, setMenuItem] = useState([]);
    const [disount, setUnitPrice] = useState("");
    const [untPrice, setDiscount] = useState("");
    const [menu, setMenu] = useState("");
    const [d,setd] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [total, setTotal] = useState(0);
    


    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/menu_item_category').then((res) => {
            setCategory(res.data);
            console.log(category);
            console.log("yes");
        }).catch((err) => {
            alert(err)
        })


    }, [])


  


    function onDisplay() {
        // const x = document.getElementById("f1").style.display;
        // if (x === "none") {
        //     document.getElementById("f1").style.display = 'block'
        // } else {
        //     document.getElementById("f1").style.display = 'block'
        // }

        document.getElementById("f1").style.display = 'block'
       axios.get('http://localhost:8080/api/v1//res_menu_item/type/' + gtCategory).then((res) => {
        
            setMenuItem(res.data);

            
            console.log(menuItem);
          
        }).catch((err) => {
            alert(err)
        })


    }


    function fx(e)
    { console.log(e);
        axios.get('http://localhost:8080/api/v1//res_menu_item/name/' + e).then((res) => {
        
            setd(res.data);
            console.log(res.data);
          
        }).catch((err) => {
            alert(err)
        })

    }
   
   
   
   
   
    function saveMenu() {
        
      /*  const x = document.getElementById("form-row").style.display;
        if (x === "block") {
            document.getElementById("form-row").style.display = 'none'
        } else {
            document.getElementById("form-row").style.display = 'block'
        }*/


        
        axios.get('http://localhost:8080/api/v1//res_menu_item/name/' + menu).then((res) => {
           
            console.log(res.data)
            // setUnitPrice(res.data[0].unit_price)
            // setDiscount(res.data[0].discount)
            // console.log(disount)
            // console.log(untPrice)

        }).catch((err) => {
            alert(err)
        })

       // setTotal(((parseInt(untPrice)*parseInt(disount))/100)*parseInt(quantity))




        // const newOrder = {
        //     disount,
        //     untPrice,
        //     quantity,
        //     menu,
        //     total,
        // }

        // axios.get('', newOrder).then((res) => {

        // }).catch((err) => {
        //     alert(err)
        // })


    }



    return (

        <div>


            <Container>
                <div class="form-group col-md-6">
                    <label for="foodType">Food Type</label>
                    <select  id="foodType" class="form-control" onChange={(e) => {
                        const selectCatogory = e.target.value;
                        getCategory(selectCatogory);
                    }}> <option></option>
                        {category.map(function (category) {
                            return <option>
                                {category.menuItemType}
                            </option>

                        })}
                    </select>
                </div>

                <button style={{ marginTop: 20 }} onClick={e => onDisplay()}>Create Order</button>



                <Row>
                    <Col lg={5} >

                        <div className="row">
                            <div className="card col-md-10 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                <h3 className="text-center">Order Menu Item</h3>
                                <div className="card-body">

                                    <div id="f1" style={{ display: "none" }}>
                                        <form >
                                            <div class="form-row">
                                              
                                                <div class="form-group col-md-6">
                                                    <label for="foodName">Food Item Name</label>
                                                    <select id="foodNmae" class="form-control" onChange={(e) => {
                                                        
                                                        const selectMenu = e.target.value;
                                                        setMenu(selectMenu);
                                                        fx(selectMenu);
                                                
                                                        
                                                    }} >
                                                       <option></option>
                                                        {menuItem.map(function (menuItem) {
                                                            return <option>
                                                                {menuItem.menuItemName}
                                                            </option>

                                                        })}

                                                    </select>
                                                    <div>
                                                    {d.map(function (menuItem) {
                                                            return  <div className="form-row">
                                                            <div class="form-group col-md-6">
                                                                <label for="discount">Discount</label>
                                                                <input type="text" class="form-control" id="discount" value={menuItem.discount} disabled/>

                                                                <label for="discount">Unit Price</label>
                                                                <input type="text" class="form-control" id="discount" value={menuItem.unitPrice} disabled/>
                                                                
                                                            </div>
                                                            </div>
                                                        
                                                          

                                                        })}

                                                    </div>

                                                  




                                                    <button onClick={saveMenu}>Enter Quantity</button>
                                                </div>

                                            </div>

                                            <div class="form-row" style={{ display: "none" }}>
                                                <div class="form-group  col-md-4">
                                                    <label for="quantity">Quantity</label> 
                                                    <input type="text" class="form-control" id="quantity" onChange={(e)=>{
                                                        setQuantity(e.target.value)
                                                    }} />
                                                   
                                                    {/* <div style={{fontSize:12, color:"red"}}>{this.state.descriptionError}</div> */}
                                                </div>
                                            </div>

                                            <div class="form-row">
                                                <div class="form-group col-md-4">
                                                    <button type="submit" id="submit" class="btn " onClick={saveMenu} style={{ background: "#bd9660", color: "white" }} >Save</button>
                                                </div>
                                                <div class="form-group col-md-4">
                                                    <button id="reset" type="reset" class="btn " style={{ marginLeft: 30, background: "#bd9660", color: "white" }} >Reset</button>
                                                </div>
                                            </div>

                                        </form>
                                    </div>

                                </div>
                            </div>

                        </div>


                    </Col>
                    <Col lg={7} >

                        <div className="row">
                            <div className="card col-md-10 offset-md-3 offset-md-3" style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px" }}>
                                <div className="container  bg-dark" style={{ color: 'white', marginTop: 10 }} >
                                    <h3 className="text-center" style={{ fontSize: 14, textAlign: "center", marginTop: 5 }}>BILLING    AREA</h3>
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
                                            <button type="submit" id="submit" class="btn " style={{ marginLeft: 250, marginTop: 150, background: "#bd9660", color: "white" }}>Submit</button>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <button type="submit" id="submit" class="btn " style={{ marginLeft: 200, marginTop: 150, marginRight: 250, background: "#bd9660", color: "white" }}>Print Bill</button>
                                        </div>

                                    </div>



                                </div>
                            </div>

                        </div>


                    </Col>
                </Row>
            </Container>
        </div>



    )

}

export default AddOrder;