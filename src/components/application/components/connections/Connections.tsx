import React, { useState, useEffect } from 'react'
import RightNetworkStats from './components/RightNetworkStats'
import CenterRequests from './components/CenterRequests'
import PeopleYouMayKnow from './components/PeopleYouMayKnow'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateConnectReqAcceptPending,
    updateMyConnections,
    updatePendingRequests,
} from 'redux/actions/connectionsAction'

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

    const [showRequest, setShowRequest] = useState(true)
    const [showConnection, setShowConnection] = useState(false)
    const [pendingRequests, setPendingRequests] = useState([])
    const [myConnections, setMyConnections] = useState([])
    const [pendingRequesLoad, setPendingRequestLoad] = useState<boolean>(true)
    const [myConnectionsLoad, setMyConnectionLoad] = useState<boolean>(true)
    const ownId = useSelector((state: any) => state.userInfo.id)

    const dispath = useDispatch()

    useEffect(() => {
        ;(async () => {
            const dataFromConnectionApi = await makeApiCall(
                'get',
                'connections'
            )
            const allConnectionsFromApi =
                dataFromConnectionApi.data.data.connections

            const {
                filteredPendingRequest,
                filteredConnectedAccount,
                filteredConnectReqAcceptPending,
            } = await getFilteredPendingRequestsAndConnectedAccount(
                allConnectionsFromApi
            )

            setPendingRequests(filteredPendingRequest)
            console.log('filteredConnectedAccount', [
                ...filteredConnectedAccount,
            ])
            setMyConnections(filteredConnectedAccount)
            dispath(updatePendingRequests(filteredPendingRequest))
            dispath(updateMyConnections(filteredConnectedAccount))
            dispath(
                updateConnectReqAcceptPending(filteredConnectReqAcceptPending)
            )
        })()
    }, [])

    useEffect(() => {
        console.log('myConnections', myConnections)
        console.log('myConnections.length', myConnections.length)
    }, [pendingRequests, myConnections])

    const handleRequestButton = (event: any) => {
        setShowRequest(true)
        setShowConnection(false)
    }
    const handleConnectionButton = (event: any) => {
        event.target.style.borderBottom = '2px solid blue'
        setShowRequest(false)
        setShowConnection(true)
    }

    const acceptConnectRequest = async (id: number) => {
        const filteredPendingRequests = pendingRequests.filter(
            (user: any) => user.id !== id
        )
        setPendingRequests(filteredPendingRequests)
        dispath(updatePendingRequests(filteredPendingRequests))

        const response = await makeApiCall(
            'post',
            `connections/accept?user_id=${id}`
        )
        console.log(response)
    }

    const rejectConnectRequest = async (id: number) => {
        //call api to connect
        console.log(id)
        const filteredPendingRequest = pendingRequests.filter(
            (user: any) => user.id !== id
        )
        setPendingRequests(filteredPendingRequest)
        dispath(updatePendingRequests(filteredPendingRequest))
        const response = await makeApiCall(
            'post',
            `connections/reject?user_id=${id}`
        )
        console.log(response)
    }

    const removeConnection = (id: number) => {
        const filteredMyConnections = myConnections.filter(
            (user: any) => user.id !== id
        )
        setMyConnections(filteredMyConnections)
        dispath(updateMyConnections(filteredMyConnections))
    }

    const getUserData = async (id: number, connected_at: string) => {
        const dataFromApi = await makeApiCall('get', `user?id=${id}`)
        console.log(dataFromApi)
        const userData = dataFromApi.data.data.user[0]
        return {
            id: id,
            name: `${userData.first_name} ${userData.last_name}`,
            avatar: userData.avatar,
            designation: userData.designation,
            connected_at: connected_at,
            role: userData.role,
            organization: userData.organization,
            skills: userData.skills,
        }
    }
    const getFilteredPendingRequestsAndConnectedAccount = async (
        allConnectionsFromApi: any
    ) => {
        let filteredPendingRequest: any = []
        let filteredConnectedAccount: any = []
        let filteredConnectReqAcceptPending: any = []
        await allConnectionsFromApi.forEach(async (connection: any) => {
            const otherUserId =
                connection.user1 === ownId ? connection.user2 : connection.user1
            const theOtherUserData = await getUserData(
                otherUserId,
                connection.connected_at
            )
            //user1 is connection sender user2 is receiver
            if (connection.status === 'pending' && connection.user2 === ownId) {
                filteredPendingRequest.push(theOtherUserData)
            } else if (
                connection.status === 'pending' &&
                connection.user1 === ownId
            ) {
                filteredConnectReqAcceptPending.push(theOtherUserData)
            } else {
                filteredConnectedAccount.push(theOtherUserData)
            }
        })
        setPendingRequestLoad(false)
        setMyConnectionLoad(false)
        return {
            filteredPendingRequest,
            filteredConnectedAccount,
            filteredConnectReqAcceptPending,
        }
    }
    return (
        <div className="connections-page">
            <div className="connections-top-components">
                <CenterRequests
                    makeApiCall={makeApiCall}
                    removeConnection={removeConnection}
                    rejectConnectRequest={rejectConnectRequest}
                    acceptConnectRequest={acceptConnectRequest}
                    handleConnectionButton={handleConnectionButton}
                    handleRequestButton={handleRequestButton}
                    myConnectionsLoad={myConnectionsLoad}
                    pendingRequests={pendingRequests}
                    showConnection={showConnection}
                    showRequest={showRequest}
                    pendingRequesLoad={pendingRequesLoad}
                    myConnections={myConnections}
                />
                {width < WIDTH_LIMIT && (
                    <RightNetworkStats
                        numberOfConnections={myConnections.length}
                    />
                )}
                <PeopleYouMayKnow makeApiCall={makeApiCall} />
            </div>
            <div className="connections-right-components">
                {width > WIDTH_LIMIT && (
                    <RightNetworkStats
                        numberOfConnections={myConnections.length}
                    />
                )}
            </div>
        </div>
    )
}

export default Connections
