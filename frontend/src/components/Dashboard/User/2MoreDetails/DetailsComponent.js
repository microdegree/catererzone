import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';

const DetailsComponent = (props) => {

    const [bookingInfo, setBookingInfo] = useState({})
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);

        calculatePrice(data)

    }
    console.log(errors);

    return (

        <div style={{ fontWeight: "bold" }}>
            <center>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', border: '#fff' }}>
                            <br />
                            <center>
                                <Col>
                                    <Card.Img variant="top" src={'../' + props.location.projectData.imageName} style={{ padding: 10, height: '500px', width: '500px' }} />
                                </Col>
                            </center>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '48rem', border: '#fff' }}>
                            <br />

                            <Card.Body>
                                <Card.Text>
                                    <br />
                                    <Row style={{ fontWeight: "bold", fontSize: '25px' }}>{props.location.projectData.catererName}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererLocation Location : {props.location.projectData.catererLocation}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererAddress Name : {props.location.projectData.catererAddress}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererContact: {props.location.projectData.catererContact}</Row>
                                    <Row style={{ fontWeight: "bold", fontSize: '20px' }}>catererFoodTypeSupported: {props.location.projectData.catererFoodTypeSupported}</Row>

                                    <br />


                                    <Form onSubmit={handleSubmit(onSubmit)}>

                                        <Form.Group controlId="numberOfHeads">
                                            <Form.Label>Number of People</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Number of People" name="numberOfHeads" ref={register({ required: true, maxLength: 80 })} />
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="numSelectedStarterVeg">
                                            <Form.Label>Select Number of Items - Starter Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedStarterVeg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="numSelectedStarterNonveg">
                                            <Form.Label>Select Number of Items - Starter Non Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedStarterNonveg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="numSelectedCurryVeg">
                                            <Form.Label>Select Number of Items - Curry Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedCurryVeg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>



                                        <Form.Group as={Col} controlId="numSelectedCurryNonVeg">
                                            <Form.Label>Select Number of Items - Curry Non Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedCurryNonVeg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group as={Col} controlId="numSelectedRiceItemVeg">
                                            <Form.Label>Select Number of Items - RiceItem Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedRiceItemVeg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="numSelectedRiceItemNonVeg">
                                            <Form.Label>Select Number of Items - RiceItem Non Veg</Form.Label>
                                            <Form.Control as="select" name="numSelectedRiceItemNonVeg" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} controlId="numSelectedDesserts">
                                            <Form.Label>Select Number of Items - Desserts</Form.Label>
                                            <Form.Control as="select" name="numSelectedDesserts" ref={register({ required: true })}>
                                                <option>0</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <br /> <br /> <br />
                                        <Button variant="primary" type="submit">
                                            Calculate
                             </Button>
                                    </Form>

                                    <h2> Final Price : {bookingInfo.finalPrice}</h2>


                                    <Row>projectData Details
                                         <Link to={{
                                            pathname: '/userDashboard/confirmationPage',
                                            projectData: props.location.projectData,
                                            bookingInfo: bookingInfo

                                        }}>
                                            &nbsp;  &nbsp;  &nbsp; <Button >Check Out</Button></Link>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </center>
        </div>
    )

    function calculatePrice(data) {

        const catererPricing = props.location.projectData;
        let finalPrice = data.numberOfHeads * (
            (data.numSelectedStarterVeg * catererPricing.cateredPricePerItemStarterVeg) +
            (data.numSelectedStarterNonveg * catererPricing.cateredPricePerItemStarterNonVeg) +
            (data.numSelectedCurryVeg * catererPricing.cateredPricePerItemCurryveg) +
            (data.numSelectedCurryNonVeg * catererPricing.cateredPricePerItemCurryNonveg) +
            (data.numSelectedRiceItemVeg * catererPricing.cateredPricePerItemRiceVeg) +
            (data.numSelectedRiceItemNonVeg * catererPricing.cateredPricePerItemRiceNonVeg) +
            (data.numSelectedDesserts * catererPricing.cateredPricePerItemDessert)
        )


        let BookingInfoTemp = { ...data, "finalPrice": finalPrice }


        setBookingInfo(BookingInfoTemp)

    }

}

export default DetailsComponent
