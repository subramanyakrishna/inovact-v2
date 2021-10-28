import { useState, useEffect } from 'react'
import RightNetworkStats from './components/RightNetworkStats'
import CenterRequests from './components/CenterRequests'
import PeopleYouMayKnow from './components/PeopleYouMayKnow'
import axios from 'axios'

const makeApiCall = async (method: any, route: string) => {
    console.log('method', method)
    console.log('route', route)

    const response = await axios({
        method: method,
        url: `https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/${route}`,
        headers: {
            Authorization: localStorage.getItem('user'),
            'Content-Type': 'application/json',
        },
    })
    return response
}

function Connections() {
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
                <CenterRequests makeApiCall={makeApiCall} />
                {width < WIDTH_LIMIT && <RightNetworkStats />}
                <PeopleYouMayKnow makeApiCall={makeApiCall} />
            </div>
            <div className="connections-right-components">
                {width > WIDTH_LIMIT && <RightNetworkStats />}
            </div>
        </div>
    )
}

export default Connections
