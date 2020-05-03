import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CatererCard from './CatererCard';
import CardDeck from 'react-bootstrap/CardDeck'

const UserDashUI = (props) => {

    const [caterer, setCaterer] = useState([])

    useEffect(() => {
        fetchProjectsFromServer()

    }, [])

    return (
        <div>
            <CardDeck>
                {caterer.map(projectData =>
                    <CatererCard key={projectData._id} projectData={projectData} />
                )}
            </CardDeck>
        </div >

    )

    function fetchProjectsFromServer() {
        console.log('In fetchProjectsFromServer ')
        fetch('/api/consumer/getAllProjects')
            .then(response => response.json())
            .then(data => {
                setCaterer(data)
            })
            .catch(err => console.log('Error when calling api : ' + err))
    }
}

export default UserDashUI
