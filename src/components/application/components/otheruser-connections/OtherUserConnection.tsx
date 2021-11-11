import { useState, useEffect } from 'react'
import RightNetworkStats from './components/RightNetworkStats'
import CenterRequests from './components/CenterRequests'
import PeopleYouMayKnow from './components/PeopleYouMayKnow'
import axios from 'axios'
import { useDispatch } from 'react-redux'

function OtherUserConnections() {
    const [width, setWidth] = useState(window.innerWidth)
    const WIDTH_LIMIT = 992
    const handleWindowResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])

    return (
        <div className="connections-page">
            <div className="connections-top-components">
                <CenterRequests />
                {width < WIDTH_LIMIT && <RightNetworkStats />}
                <PeopleYouMayKnow />
            </div>
            <div className="connections-right-components">
                {width > WIDTH_LIMIT && <RightNetworkStats />}
            </div>
        </div>
    )
}

export default OtherUserConnections
