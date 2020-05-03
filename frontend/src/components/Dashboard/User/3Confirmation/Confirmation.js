import React from 'react'
import { Link } from 'react-router-dom'
import auth from '../../../Home/CommonComponents/Auth'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Confirmation = (props) => {
    return (
        <div>
            <center>
                <Card style={{ width: '48rem', backgroundColor: '#68FFDC' }}><Card.Body>
                    <Card.Title>Confirmation Page</Card.Title>
                    <Card.Text>

                    </Card.Text>
                    <Row>
                        <Col>
                            <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '250px', width: '300px' }} />
                        </Col>
                        <Col>
                            <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.catererName}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererLocation Location : {props.location.projectData.catererLocation}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererAddress Name : {props.location.projectData.catererAddress}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererContact: {props.location.projectData.catererContact}</Row>
                            <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererFoodTypeSupported: {props.location.projectData.catererFoodTypeSupported}</Row>


Booking Info :
Total Cost - {props.location.bookingInfo.finalPrice}
                            Total Num Of people : {props.location.bookingInfo.numberOfHeads}
                            Total Num Of numSelectedStarterVeg : {props.location.bookingInfo.numSelectedStarterVeg}
                            Total Num Of numSelectedStarterNonveg : {props.location.bookingInfo.numSelectedStarterNonveg}
                            Total Num Of numSelectedCurryVeg : {props.location.bookingInfo.numSelectedCurryVeg}
                            Total Num Of numSelectedCurryNonVeg : {props.location.bookingInfo.numSelectedCurryNonVeg}
                            Total Num Of numSelectedRiceItemVeg : {props.location.bookingInfo.numSelectedRiceItemVeg}
                            Total Num Of numSelectedRiceItemNonVeg : {props.location.bookingInfo.numSelectedRiceItemNonVeg}
                            Total Num Of numSelectedDesserts : {props.location.bookingInfo.numSelectedDesserts}
                        </Col>
                    </Row>
                    <Button variant="primary"><Link to='/userDashboard/paymentsGateway' style={{ color: '#fff' }} onClick={confirmBookingAtServer}>Confirm Booking</Link></Button>

                </Card.Body>
                </Card>
            </center>

        </div>
    )

    function confirmBookingAtServer() {

        fetch('/api/consumer/addNewBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "consumerEmail": auth.userEmail,
                "adminEmail": props.location.projectData.email,
                "projectId": props.location.projectData._id,
                "numberOfHeads": props.location.bookingInfo.numberOfHeads,
                "numSelectedStarterVeg": props.location.bookingInfo.numSelectedStarterVeg,
                "numSelectedStarterNonveg": props.location.bookingInfo.numSelectedStarterNonveg,
                "numSelectedCurryVeg": props.location.bookingInfo.numSelectedCurryVeg,
                "numSelectedCurryNonVeg": props.location.bookingInfo.numSelectedCurryNonVeg,
                "numSelectedRiceItemVeg": props.location.bookingInfo.numSelectedRiceItemVeg,
                "numSelectedRiceItemNonVeg": props.location.bookingInfo.numSelectedRiceItemNonVeg,
                "numSelectedDesserts": props.location.bookingInfo.numSelectedDesserts,

                "finalPrice": props.location.bookingInfo.finalPrice

            }),
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log('error when calling confirmAppointmentAtServer ', error))

    }
}

export default Confirmation
