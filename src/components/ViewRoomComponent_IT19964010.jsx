import React, { Component } from 'react';
import RoomService_IT19964010 from '../adapters/RoomService_IT19964010';

class ViewRoomComponent_IT19964010 extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,
            room: {}
          
        }
    } 
    componentDidMount(){
         RoomService_IT19964010.getRoomById(this.state.id).then( res =>{
            this.setState({room: res.data});
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
                    <h3 className = "text-center"> View Room details</h3>
                    <div className= "card-body">
                        <div className="row">
                            <label> Room Type :</label>
                            <div> { this.state.room.room_Type}</div>
                        </div>
                        <div className="row">
                            <label> Room Status :</label>
                            <div> { this.state.room.room_Status}</div>
                        </div>
                        <div className="row">
                            <label> Room Price :</label>
                            <div> { this.state.room.r_Price}</div>
                        </div>
                    </div>
               </div>

            </div>
        );
    }
}

export default ViewRoomComponent_IT19964010;