import React, { Component } from 'react';
import RoomService from '../adapters/RoomService';


class  UpdateRoomComponent extends Component {
    constructor(props){
        super(props)

        this.state={
           id: this.props.match.params.id,
           room_Type:'',
           room_Status:'',
           r_Price:''
          
        }

        this.changeroom_TypeHandler=this.changeroom_TypeHandler.bind(this);
        this.changeroom_StatusHandler= this.changeroom_StatusHandler.bind(this);
        // this.updateRoom=this.updateRoom.bind(this);
    
    }
    componentDidMount(){
        RoomService.getRoomById(this.state.id).then( (res) => {
            let room = res.data;
            this.setState({
                room_Type:room.room_Type,
                room_Status:room.room_Status,
                r_Price:room.r_Price
            });
        });
    }
    updateRoom =(e) => {
        e.preventDefault();
        let room = {room_Type:this.state.room_Type,room_Status:this.state.room_Status,r_Price:this.state.r_Price }
        console.log('room =>' + JSON.stringify(room));

        RoomService.updateRoom(room,this.state.id).then(res=>{
           this.props.history.push('/rooms') 
        });

       
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
            </div>
 */}


                <div className ="container">
                    <div className="row">
                        <div className= "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Update Room </h3>
                            <div className="card-body">
 
                                <form>
                                    <div className="form-group">
                                    <label> Room Type : </label>
                                    <input placeholder="Room Type" name="room_Type" className="form-control"
                                        value={ this.state.room_Type} onChange={this.changeroom_TypeHandler} />
                                    </div>

                                    <div className="form-group">
                                    <label> Room Status : </label>
                                    <input placeholder="Room Status" name="room_Status" className="form-control"
                                        value={ this.state.room_Status} onChange={this.changeroom_StatusHandler} />
                                    </div>

                                    <div className="form-group">
                                    <label> Room price : </label>
                                    <input placeholder="Room price" name="r_price" className="form-control"
                                        value={ this.state.r_Price} onChange={this.changer_priceHandler} />
                                    </div>

                                    
                                    <button className="btn btn-success" onClick={this.updateRoom}> Update </button>
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

export default UpdateRoomComponent;