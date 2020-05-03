import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import auth from '../../../../Home/CommonComponents/Auth'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ModifyCatererForm = (props) => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        callServerToUpdateInfo(data)

        props.handleClose()
    }
    console.log(errors);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="catererName">
                <Form.Label>Caterer Name</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.catererName} placeholder="Enter Caterer name" name="catererName" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="catererLocation">
                <Form.Label>Caterer Location</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.catererLocation} placeholder="Enter Location" name="catererLocation" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="catererAddress">
                <Form.Label>Caterer Address</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.catererAddress} placeholder="Enter Caterer Address" name="catererAddress" ref={register({ required: true, maxLength: 400 })} />
            </Form.Group>

            <Form.Group controlId="catererContact">
                <Form.Label>Caterer Contact</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.catererContact} placeholder="Enter Contact Info" name="catererContact" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="catererFoodTypeSupported">
                <Form.Label>Food Type Serviced</Form.Label>
                <Form.Control type="text" defaultValue={props.projectData.catererFoodTypeSupported} placeholder="Veg/Non-Veg/Both" name="catererFoodTypeSupported" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemStarterVeg">
                <Form.Label>Starter Veg - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemStarterVeg} placeholder="Curry - 12 Rs per head" name="cateredPricePerItemStarterVeg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemCurryveg">
                <Form.Label>Curry Veg  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemCurryveg} placeholder="Curry - 3 Rs per head" name="cateredPricePerItemCurryveg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemRiceVeg">
                <Form.Label>RiceItem Veg  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemRiceVeg} placeholder="Curry - 2 Rs per head" name="cateredPricePerItemRiceVeg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>


            <Form.Group controlId="cateredPricePerItemStarterNonVeg">
                <Form.Label>Starter Non-Veg - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemStarterNonVeg} placeholder="Curry - 12 Rs per head" name="cateredPricePerItemStarterNonVeg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemCurryNonveg">
                <Form.Label>Curry Non-Veg  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemCurryNonveg} placeholder="Curry - 3 Rs per head" name="cateredPricePerItemCurryNonveg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemRiceNonVeg">
                <Form.Label>RiceItem Non-Veg  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemRiceNonVeg} placeholder="Curry - 2 Rs per head" name="cateredPricePerItemRiceNonVeg" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemRoti">
                <Form.Label>Rotis  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemRoti} placeholder="Curry - 2 Rs per head" name="cateredPricePerItemRoti" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <Form.Group controlId="cateredPricePerItemDessert">
                <Form.Label>Dessert  - Price Per item per head</Form.Label>
                <Form.Control type="number" defaultValue={props.projectData.cateredPricePerItemDessert} placeholder="Curry - 2 Rs per head" name="cateredPricePerItemDessert" ref={register({ required: true, maxLength: 80 })} />
            </Form.Group>

            <br /> <br /> <br />
            <Button variant="primary" type="submit">
                Submit
 </Button>
        </Form>
    )

    function callServerToUpdateInfo(requestObject) {

        requestObject = { ...requestObject, "email": auth.userEmail, 'imageName': props.projectData.imageName }
        console.log('call server 1 ', requestObject)

        fetch('/api/admin/modifyProject', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject)
        })
            .then(res => res.json())
            .then(data1 => console.log('data from update ', data1))
            .catch(error => console.log('Error while modify project Info ', error))

    }

}

export default ModifyCatererForm
