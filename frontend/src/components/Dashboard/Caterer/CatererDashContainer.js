import React, { useEffect, useState } from 'react'
import auth from '../../Home/CommonComponents/Auth'
import CatererDashHeader from './CommonComponents/CatererDashHeader';
import CatererDashUI from './CatererDashHome/CatererDashUI';
import AddCaterer from './AddCaterer/AddCaterer';
import { Route } from "react-router-dom";
import UploadCatererLogo from './AddCaterer/UploadCatererLogo';
import ShowCaterer from './ShowCaterer/ShowCaterer';
import ModifyCatererModal from './ShowCaterer/ModifyCaterer/ModifyCatererModal';

const CatererDashContainer = (props) => {

    const [userInDash, setUserInDash] = useState(0);
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        fetchUser()
    }, [userId])


    return (
        <div>
            <CatererDashHeader logout={props.history} />

            <Route exact path="/catererDashboard" component={CatererDashUI} />
            <Route exact path="/catererDashboard/createJobOpenings" component={AddCaterer} />
            <Route exact path="/catererDashboard/uploadProjectImage" component={UploadCatererLogo} />

            <Route exact path="/catererDashboard/showProjects" component={ShowCaterer} />
            <Route exact path="/catererDashboard/showProjects/modal/modifyProject" component={ModifyCatererModal} />

        </div>
    )

    async function fetchUser() {
        console.log('userInDash Before ' + userInDash)
        let requestObject = { "email": auth.userEmail }
        fetch('/api/users/getUserInfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestObject),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Dash ' + JSON.stringify(data))
                console.log('Dash ' + data[0].name)
                setUserInDash(data[0])
                setUserId(data[0].name)
            })
            .catch(err => console.log('Error when calling api : ' + err))
        console.log('userInDash After ' + userInDash)
    }
}

export default CatererDashContainer
