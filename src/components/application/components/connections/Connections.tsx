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

    // useEffect(() => {
    //     console.log('myConnections', myConnections)
    //     console.log('myConnections.length', myConnections.length)
    // }, [pendingRequests, myConnections])

    // const handleRequestButton = (event: any) => {
    //     setShowRequest(true)
    //     setShowConnection(false)
    // }
    // const handleConnectionButton = (event: any) => {
    //     event.target.style.borderBottom = '2px solid blue'
    //     setShowRequest(false)
    //     setShowConnection(true)
    // }

    // const acceptConnectRequest = async (id: number, user: any) => {
    //     const filteredPendingRequests = pendingRequests.filter(
    //         (user: any) => user.id !== id
    //     )
    //     setPendingRequests(filteredPendingRequests)
    //     dispath(updatePendingRequests(filteredPendingRequests))

    //     const response = await makeApiCall(
    //         'post',
    //         `connections/accept?user_id=${id}`
    //     )

    //     setMyConnections([...myConnections, user])
    //     console.log(response)
    // }

    // const rejectConnectRequest = async (id: number) => {
    //     //call api to connect
    //     console.log(id)
    //     const filteredPendingRequest = pendingRequests.filter(
    //         (user: any) => user.id !== id
    //     )
    //     setPendingRequests(filteredPendingRequest)
    //     dispath(updatePendingRequests(filteredPendingRequest))
    //     const response = await makeApiCall(
    //         'post',
    //         `connections/reject?user_id=${id}`
    //     )
    //     console.log(response)
    // }

    // const removeConnection = (id: number) => {
    //     const filteredMyConnections = myConnections.filter(
    //         (user: any) => user.id !== id
    //     )
    //     setMyConnections(filteredMyConnections)
    //     dispath(updateMyConnections(filteredMyConnections))
    // }

    // const getUserData = async (id: number, connected_at: string) => {
    //     const dataFromApi = await makeApiCall('get', `user?id=${id}`)
    //     console.log(dataFromApi)
    //     const userData = dataFromApi.data.data.user[0]
    //     return {
    //         id: id,
    //         name: `${userData.first_name} ${userData.last_name}`,
    //         avatar: userData.avatar,
    //         designation: userData.designation,
    //         connected_at: connected_at,
    //         role: userData.role,
    //         organization: userData.organization,
    //         skills: userData.skills,
    //     }
    // }
    // const getFilteredPendingRequestsAndConnectedAccount = async (
    //     allConnectionsFromApi: any
    // ) => {
    //     let filteredPendingRequest: any = []
    //     let filteredConnectedAccount: any = []
    //     let filteredConnectReqAcceptPending: any = []
    //     await allConnectionsFromApi.forEach(async (connection: any) => {
    //         const otherUserId =
    //             connection.user1 === ownId ? connection.user2 : connection.user1
    //         const theOtherUserData = await getUserData(
    //             otherUserId,
    //             connection.connected_at
    //         )
    //         //user1 is connection sender user2 is receiver
    //         if (connection.status === 'pending' && connection.user2 === ownId) {
    //             filteredPendingRequest.push(theOtherUserData)
    //         } else if (
    //             connection.status === 'pending' &&
    //             connection.user1 === ownId
    //         ) {
    //             filteredConnectReqAcceptPending.push(theOtherUserData)
    //         } else {
    //             filteredConnectedAccount.push(theOtherUserData)
    //         }
    //     })
    //     setPendingRequestLoad(false)
    //     setMyConnectionLoad(false)
    //     return {
    //         filteredPendingRequest,
    //         filteredConnectedAccount,
    //         filteredConnectReqAcceptPending,
    //     }
    // }
    // const handleRemoveConnection = async (id: number) => {
    //     setMyConnections(myConnections.filter((user: any) => user.id !== id))
    //     const response = await makeApiCall(
    //         'post',
    //         `connections/remove?user_id=${id}`
    //     )
    //     console.log(response)
    // }

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
