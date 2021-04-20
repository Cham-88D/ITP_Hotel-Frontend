import React from 'react';
import Navigation from '../components/Navbar';
import Home from '../pages/Home';
import {BrowserRouter as  Switch, Route, BrowserRouter} from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import Login from '../pages/Login';
import Gallery from '../pages/Gallery';
import Event from '../pages/Event';
import Room from '../pages/Room';
import Service from '../pages/service';
import About from '../pages/About';
import Footer from '../components/Footer';
import MapPage from  '../pages/Map';
import Register from '../pages/Register'
import UserAccount from "../pages/UserAccount";



const LoginContainer = () => (

    <div>
            <Route path='/login' exact component={Login} />
    </div>
)



const RegisterContainer = () => (

    <div>
        <Route path='/register' exact component={Register} />
    </div>
)





const DefaultContainer = () => (


            <div >

                <Navigation/>
                <Route path='/' exact component={Home} />
                <Route path='/contact-us' exact component={ContactUs} />
                <Route path='/gallery' exact component={Gallery} />
                <Route path='/event' exact component={Event} />
                <Route path='/room' exact component={Room} />
                <Route path='/service' exact component={Service} />
                <Route path='/about-us' exact component={About} />
                <Route path='/map' exact component={MapPage} />
                <Route path='/user-account' exact component={UserAccount } />
                <Footer/>

            </div>

)



function Routing() {

    return (
        <BrowserRouter >

                <Switch >


                    <Route  path="/login" exact component={LoginContainer} />
                    <Route  path="/register" exact component={RegisterContainer} />
                    <Route path='/' exact component={DefaultContainer} />
                    <Route path='/contact-us' exact component={DefaultContainer} />
                    <Route path='/gallery' exact component={DefaultContainer} />
                    <Route path='/event' exact component={DefaultContainer} />
                    <Route path='/room' exact component={DefaultContainer} />
                    <Route path='/service' exact component={DefaultContainer} />
                    <Route path='/about-us' exact component={DefaultContainer} />
                    <Route path='/map' exact component={DefaultContainer} />
                    <Route path='/user-account' exact component={DefaultContainer} />


                </Switch>



        </BrowserRouter>
    );

}

export default Routing;
