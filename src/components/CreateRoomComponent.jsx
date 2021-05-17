import React, { Component } from 'react';
import RoomService from '../adapters/RoomService';



const initialState={
    room_Type:'',
    room_Status:'',
    r_Price:'',


    room_TypeError:'',
    room_StatusError:'',
    r_PriceError:''
          
}
class CreateRoomComponent extends Component {
        constructor(props){
            super(props)
   
            this.state=initialState;
               
        this.changeroom_TypeHandler=this.changeroom_TypeHandler.bind(this);
        this.changeroom_StatusHandler= this.changeroom_StatusHandler.bind(this);
        this.saveRoom=this.saveRoom.bind(this);
    
    }


    validate=()=>{
        let room_TypeError='';
        let room_StatusError='';
        let r_PriceError='';

        if(!this.state.room_Type){
            room_TypeError="Room Type is Required !";
        }
        if(!this.state.room_Status){
            room_StatusError="Room Status is Required !";
        }
        if(!this.state.r_Price){
            r_PriceError="Room Price is Required !";
        }
        // if(!this.state.r_Price<1000){
        //     r_PriceError="Room Price is Required !";
        // }
        if(room_TypeError||room_StatusError||r_PriceError){
            this.setState({room_TypeError,room_StatusError,r_PriceError});
            return false;
        }
        return true;


    }


    saveRoom = (e) => {
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            let room ={room_Type:this.state.room_Type, room_Status:this.state.room_Status,r_Price:this.state.r_Price};
            console.log('room =>' + JSON.stringify(room));
        
            RoomService.createRoom(room).then(res =>{
                this.props.history.push('/rooms');
            });
        }
    }


    changeroom_TypeHandler = (event) => {
        this.setState({room_Type:event.target.value});
    }

    changeroom_StatusHandler = (event) => {
        this.setState({room_Status:event.target.value});
    }

    changer_priceHandler = (event) => {
        this.setState({r_Price:event.target.value});
    }
    

    cancel(){
        this.props.history.push('/rooms');
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
                            <h3 className=" text-center"> Add Room </h3>
                            <div className="card-body">
 
                                <form>
                                    {/* <div className="form-group">
                                    <label> Room Type : </label>
                                    <input placeholder="Room Type" name="room_Type" className="form-control"
                                        value={ this.state.room_Type} onChange={this.changeroom_TypeHandler} />
                                    </div> */}

                                    <div className="form-group">
                                        <label> Room Type : </label> <br/>
                                        <input type="radio" placeholder="Room Type" name="room_Type" className="formcontrol"
                                            value="AC" onChange={this.changeroom_TypeHandler} />
                                        <span>AC</span><br/>

                                       
                                        <input type="radio" placeholder="Room Type" name="room_Type" className="formcontrol"
                                            value="NON AC" onChange={this.changeroom_TypeHandler} />
                                        <span>NON AC</span><br/>

                                        <div style={{fontSize: 12, color: "red"}}>{this.state.room_TypeError} </div>
                                        
                                    </div>

                                    <div className="form-group">
                                    <label> Room Status : </label><br/>
                                        <input type="radio" placeholder="Room Status" name="room_Status" className="formcontrol"
                                            value="Available" onChange={this.changeroom_StatusHandler} />
                                        <span>Available</span><br/>
                                        
                                        <input type="radio" placeholder="Room Status" name="room_Status" className="formcontrol"
                                            value="Not Available" onChange={this.changeroom_StatusHandler} />
                                        <span>Not Available</span><br/>
                                        <div style={{fontSize: 12, color: "red"}}>{this.state.room_StatusError} </div>


                                    </div>

                                    <div className="form-group">
                                    <label> Room price : </label>
                                    <input placeholder="Room price" name="r_price" className="formcontrol"
                                        value={ this.state.r_Price} onChange={this.changer_priceHandler} />
                                     <div style={{fontSize: 12, color: "red"}}>{this.state.r_PriceError} </div>
                                    </div>

                                     
                                    <button style={{background: "rgb(197, 161, 60) 0%"}}  className="btn btn-success" onClick={this.saveRoom}> Save </button>
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

export default CreateRoomComponent;