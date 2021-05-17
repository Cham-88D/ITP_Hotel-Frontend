// import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

// import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateRoomComponent from './components/CreateRoomComponent';
import UpdateRoomComponent from './components/UpdateRoomComponent';
import ViewRoomComponent from './components/ViewRoomComponent';
import ListRoomComponent from './components/ListRoomComponent';
import ListReservationComponent from './components/ListReservationComponent';
import CreateReservationComponent from './components/CreateReservationComponent';
import ViewReservationComponent from './components/ViewReservationComponent';
import UpdateReservation from './components/UpdateReservation';
import CustomerReservationComponent from './components/CustomerReservationComponent';
import CreateReservationCus from './components/CreateReservationCus';
import ListReservationModificationRequestComponent from './components/ListReservationModificationRequestComponent';
import CreateResRequestComponent from './components/CreateResRequestComponent';
import ListpaymentComponent from './components/ListpaymentComponent';
import CusCreateResRequestComponent from './components/CusCreateResRequestComponent';
import Navbar from './components/Navbar';
import ReservationReport from './components/ReservationReport';
import CreatePaymentcomponent from './components/CreatePaymentcomponent';
import CusCreatePaymentComponent from './components/CusCreatePaymentComponent';
import ViewPaymentComponent from './components/ViewPaymentComponent';
import ViewResRequestComponent from './components/ViewResRequestComponent';


function App() {
  return (
  <div>
    <Router> 
      
        {/* <HeaderComponent/> */}
          <div className="container">
            <Navbar/>
            <Switch>localhost:3000/update-room/


              <Route path= "/" exact component= {ListRoomComponent} />
              <Route path= "/rooms" component= {ListRoomComponent}/>  
              {/* <ListRoomComponent/> */}
              <Route path= "/add-room" component= {CreateRoomComponent} /> 
              <Route path= "/update-room/:id" component= {UpdateRoomComponent}/> 
              <Route path= "/view-room/:id" component= {ViewRoomComponent}/> 
              <Route path= "/reservations" component= {ListReservationComponent}/> 
              <Route path= "/add-reservation" component= {CreateReservationComponent} /> 
              <Route path= "/update-reservation/:id" component= {UpdateReservation} /> 
              <Route path= "/view-reservation/:id" component= {ViewReservationComponent}/> 
              <Route path= "/cus-res" component= {CustomerReservationComponent} /> 
              <Route path= "/cus-create-res" component= {CreateReservationCus} /> 

              <Route path= "/res_modification_requests" component= {ListReservationModificationRequestComponent}/> 
              <Route path= "/add-request" component= {CreateResRequestComponent}/> 
              <Route path= "/cus-res-req" component= {CusCreateResRequestComponent}/> 
              <Route path= "/room-report" component= {ReservationReport}/> 
              <Route path= "/payments" component= {ListpaymentComponent}/> 
              <Route path= "/add-payments" component= {CreatePaymentcomponent}/> 
              <Route path= "/cus-payments" component= {CusCreatePaymentComponent}/> 
              <Route path= "/view-payment/:id" component= {ViewPaymentComponent}/> 
              <Route path= "/view-request/:id" component= {ViewResRequestComponent}/> 


             </Switch> 
             
          </div>
        <FooterComponent/>
      </Router> 
  </div>
  );
}

export default App;
