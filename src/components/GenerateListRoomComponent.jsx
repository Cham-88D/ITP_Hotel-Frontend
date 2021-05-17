import React, { Component } from 'react';
import RoomService from '../adapters/RoomService';

class GenerateListRoomComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            rooms:[]
          
        }
        // this.addRoom=this.addRoom.bind(this);
        // this.updateRoom=this.updateRoom.bind(this);
        // this.deleteRoom=this.deleteRoom.bind(this);
        this.GenerateReport = this.GenerateReport.bind(this);
    }

    
    componentDidMount(){
        RoomService.getAllRooms().then((res) => {

            this.setState({rooms:res.data});
        });
    }

    // viewRoom(id){
    //     this.props.history.push(`/view-room/${id}`);
    // }

    GenerateReport(){
        this.props.history.push('/room-report');
    }

    // deleteRoom(id){

    //    RoomService.deleteRooms(id).then(res =>{
    //        this.setState({rooms:this.state.rooms.filter(room=>room.roomId!==id)});
    //    });
    // }


    // updateRoom(id){
    //     this.props.history.push(`/update-room/${id}`);

    // }

    // addRoom(){
    //     this.props.history.push('/add-room');
    // }


    render() {
        return (
            
             <div>

                <h2 className="text-center"> Rooms List </h2>
                    <div className="row">
                      {/* <button className="btn btn-primary" onClick={this.addRoom}> Add Room </button> */}
                      {/* <button style={{marginLeft:"20px", color:"red"}} className="pdfbutton" onClick={this.GenerateReport} type='submit'>Generate PDF</button> */}
                    </div>
                    <div className="row">
                      <table className= "table table-striped table-bordered">

                          <thead>

                              <tr> 
                                  <th> Room Type</th>
                                  <th> Room Status</th>
                                  <th> Room Price</th>
                                  <th> Actions </th>
                              </tr>

                          </thead>

                          <tbody>
                              {
                                  this.state.rooms.map(
                                      room=>
                                      <tr key={room.roomId}>
                                          
                                          <td>{room.room_Type}</td>
                                          <td>{room.room_Status}</td>
                                          <td>{room.r_Price}</td>
                                          <tb>
                                              {/* <button onClick= { () => this.updateRoom(room.roomId)}  className="btn btn-info"> Update </button>
                                              <button style={{marginLeft: "10px" }} onClick= {() =>this.deleteRoom(room.roomId)} className="btn btn-danger"> Delete </button>
                                              <button style={{marginLeft: "30px" }} onClick= {() =>this.viewRoom(room.roomId)} className="btn btn-info"> View </button> */}
                                              
                                          </tb>
                                      </tr>
                                  )
                              }

          

                          </tbody>

                      </table>
                    </div>
            </div>
        );
    }
}

export default GenerateListRoomComponent;