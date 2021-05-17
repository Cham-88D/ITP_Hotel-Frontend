import React from 'react';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBAnimation,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownItem,
    MDBDropdownMenu, MDBBtn, MDBLink,
} from 'mdbreact';


import AuthService from "../adapters/AuthService";
import 'mdbreact/dist/css/mdb.css'
import 'bootstrap-css-only/css/bootstrap.min.css';


function auth() {

    let user = AuthService.getCurrentUser();
    let role='';
    if(user !== null){
    user["roles"].map(result => {
        role = result
        return role;
       }
    );}
    return role;
}




function link()
{
    let role = auth();
    let link =''
    let user = AuthService.getCurrentUser();
    if(user !== null){
        if(role === 'user'){
          link =   <MDBNavItem style={{marginLeft:"20px" }}>
                        <MDBNavLink to="/user-account">Account</MDBNavLink>
                  </MDBNavItem>
        }
        else if(role === 'HRmanager')
        {
            link =   <MDBNavItem style={{marginLeft:"20px"}}>
                <MDBNavLink to="/employee">DashBoard</MDBNavLink>
            </MDBNavItem>
        }

    }
    return link;
}

class Navigation extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            isWideEnough: false,
            change: false,
        };
        this.onClick = this.onClick.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }


    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if (window.scrollY === 0) {
            this.setState({ change: false });
        } else if (window.scrollY > 0 ) {
            this.setState({ change: true });
        }
    }

    onClick() {

        this.setState({
            collapse: !this.state.collapse,



        });
    }

    onLogout (){
         AuthService.logout();

    }





    render() {


            let user = AuthService.getCurrentUser();

            let button;
            if ( user  !== null) {
                button =   <MDBBtn outline color="deep-orange" style={{padding:"1px"}} onClick={this.onLogout} >Log-Out</MDBBtn>
            }
            else
            {
                button =  <MDBBtn outline color="deep-orange" style={{padding:"1px"}} href="/login">Sign-Up</MDBBtn>
            }




        return (
            <div>
                <header>

                        <MDBNavbar fixed="top" dark expand="md" scrolling color={"black"} >
                            <MDBNavbarBrand href="/">
                                <MDBAnimation type="slideInLeft" >
                                <strong style={{ color: this.state.change ? "#e97b2c":"white"}}>
                                    Villa Acres Green</strong>
                                    </MDBAnimation>
                            </MDBNavbarBrand>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar >
                                <MDBNavbarNav right>
                                    <MDBNavItem active style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/" style={{color:"#e97b2c"}}>Home</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/gallery">Gallery</MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <MDBNavLink to="/contact-us">Contact-us</MDBNavLink>
                                    </MDBNavItem>
                                    {link()}
                                    <MDBNavItem style={{marginRight:"440px",marginLeft:"20px" }}>
                                        <MDBDropdown>
                                            <MDBDropdownToggle nav caret>
                                                <div className="d-none d-md-inline" >Booking</div>
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu className="dropdown-default">
                                                <MDBLink to="/room">   <MDBDropdownItem > Room </MDBDropdownItem></MDBLink>
                                                <MDBLink to="/event"> <MDBDropdownItem >Event</MDBDropdownItem></MDBLink>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                    <MDBNavItem style={{marginLeft:"20px" }}>
                                        <div>
                                            {button}
                                        </div>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                </header >


            </div>
        );
    }
}

export default Navigation;