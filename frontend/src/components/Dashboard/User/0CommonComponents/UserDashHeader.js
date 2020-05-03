import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const UserDashHeader = (props) => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Link exact to="/userDashboard">  <Navbar.Brand href="#home">CatererZone</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/userDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/userDashboard/myOrders"> <Nav.Link href="#features">My Orders</Nav.Link></Link>

                    <Button
                        onClick={() => {
                            auth.logout(() => {
                                props.logout.push("/");
                            });
                        }}
                    >
                        Logout
                    </Button>
                </Nav>
            </Navbar>
        </div>
    )
}

export default UserDashHeader
