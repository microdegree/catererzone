import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'

const BookingCard = (props) => {

    const [userDataWhoBooked, setUserDataWhoBooked] = useState({})

    useEffect(() => {
        fetchUserInfoFromServer()
    }, [])

    return (
        <div>
            <Card style={{ width: '18rem', backgroundColor: '#68FFDC', margin: 25 }}>
                <Card.Body>
                    <Card.Title className="bg-primary" style={{ height: '30px', color: '#fff' }}>{userDataWhoBooked.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"  >{props.bookingData.consumerEmail}</Card.Subtitle>
                    <Card.Text style={{ color: '#ad0000', fontWeight: "bold" }}>
                        Applied by above candidate

                        <br />Booking Info :
                            Total Cost - {props.bookingData.finalPrice}
                            Total Num Of people : {props.bookingData.numberOfHeads}
                            Total Num Of numSelectedStarterVeg : {props.bookingData.numSelectedStarterVeg}
                            Total Num Of numSelectedStarterNonveg : {props.bookingData.numSelectedStarterNonveg}
                            Total Num Of numSelectedCurryVeg : {props.bookingData.numSelectedCurryVeg}
                            Total Num Of numSelectedCurryNonVeg : {props.bookingData.numSelectedCurryNonVeg}
                            Total Num Of numSelectedRiceItemVeg : {props.bookingData.numSelectedRiceItemVeg}
                            Total Num Of numSelectedRiceItemNonVeg : {props.bookingData.numSelectedRiceItemNonVeg}
                            Total Num Of numSelectedDesserts : {props.bookingData.numSelectedDesserts}

                    </Card.Text>
                    <Card.Footer className="text-muted">  Confirmed Booking</Card.Footer>
                </Card.Body>
            </Card>
        </div>
    )

    function fetchUserInfoFromServer() {

        console.log('In fetchBookingsFromServer ')

        //reuse the same login api to get userdata
        fetch('/api/authenticate/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': props.bookingData.consumerEmail })
        })
            .then(response => response.json())
            .then(data => {
                console.log('data retrieved ', data)
                setUserDataWhoBooked(data[0])
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default BookingCard
