import React from 'react'
import NavBar from 'components/application/components/NavBar'
import RightNetworkStats from './components/RightNetworkStats';
import CenterRequests from './components/CenterRequests';
import PeopleYouMayKnow from './components/PeopleYouMayKnow';
import RightFilterDropdown from './components/RightFilterDropdown';
function Connections() {
    return (
    <div className="connections-page">
        <div className="connections-center-component">
            <CenterRequests/>
            <PeopleYouMayKnow/>
        </div>
        <div>
            <RightNetworkStats/>
            <RightFilterDropdown/>
        </div>
    </div>
    )
}

export default Connections;
