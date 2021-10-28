import { useState, useEffect } from 'react'
import RightNetworkStats from './components/RightNetworkStats'
import CenterRequests from './components/CenterRequests'
import PeopleYouMayKnow from './components/PeopleYouMayKnow'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { userInfoConstants } from 'redux/actionTypes/userInfoConstants'

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
    const dispatch = useDispatch()

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])
    useEffect(() => {
        ;(async () => {
            const response = await makeApiCall('get', 'user')

            dispatch({
                type: userInfoConstants.UPDATE_WHOLE_PROFILE,
                payload: response.data.data.user[0],
            })
        })()
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
