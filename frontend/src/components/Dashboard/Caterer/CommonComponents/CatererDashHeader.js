import React from 'react'
import auth from '../../../Home/CommonComponents/Auth'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

const CatererDashHeader = (props) => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Link exact to="/catererDashboard">  <Navbar.Brand href="#home">CatererZone</Navbar.Brand></Link>
                <Nav className="mr-auto">
                    <Link exact to="/catererDashboard"><Nav.Link href="#home">Home</Nav.Link></Link>
                    <Link to="/catererDashboard/uploadProjectImage"> <Nav.Link href="#features">Add Caterer</Nav.Link></Link>
                    <Link to="/catererDashboard/showProjects"> <Nav.Link href="#features">My Info</Nav.Link></Link>

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

export default CatererDashHeader
