import React, { useCallback, useEffect, useState } from 'react'
import RequestProfile from './RequestProfile'
import ConnectionProfile from './ConnectionProfile'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateConnectReqAcceptPending,
    updateMyConnections,
    updatePendingRequests,
} from 'redux/actions/connectionsAction'
import Spinner from '../../../Spinner'
interface userI {
    id: number
    name: string
    avatar: string
    designation: string
    connected_at: string
    role: string
    organization: string
    skills: number[]
}

function CenterRequests({ makeApiCall }: any) {
    const [showRequest, setShowRequest] = useState(true)
    const [showConnection, setShowConnection] = useState(false)
    const [pendingRequests, setPendingRequests] = useState([])
    const [myConnections, setMyConnections] = useState([])
    const [pendingRequesLoad, setPendingRequestLoad] = useState<boolean>(true)
    const [myConnectionsLoad, setMyConnectionLoad] = useState<boolean>(true)

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

    const ownId = useSelector((state: any) => state.userInfo.id)
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
            const theOtherUserData: userI = await getUserData(
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
        <div className="requests-connections">
            <div className="requests-connections-btn">
                <button
                    onClick={handleRequestButton}
                    style={{
                        borderBottom: showRequest
                            ? '5px solid #5579BD'
                            : 'none',
                    }}
                >
                    Requests (10)
                </button>
                <button
                    onClick={handleConnectionButton}
                    style={{
                        borderBottom: showConnection
                            ? '5px solid #5579BD'
                            : 'none',
                    }}
                >
                    My Connections (473)
                </button>
            </div>
            {showRequest && (
                <div className="requests-connections-profiles">
                    <div>
                        {pendingRequesLoad ? (
                            <Spinner />
                        ) : pendingRequests.length == 0 ? (
                            <span
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10rem',
                                }}
                            >
                                Your pending requests will be shown here{' '}
                            </span>
                        ) : (
                            pendingRequests.map((user: any) => (
                                <RequestProfile
                                    key={user.id}
                                    user={user}
                                    acceptConnectRequest={acceptConnectRequest}
                                    rejectConnectRequest={rejectConnectRequest}
                                />
                            ))
                        )}
                    </div>
                </div>
            )}
            {showConnection && (
                <div className="requests-connections-profiles">
                    <div>
                        {myConnectionsLoad ? (
                            <Spinner />
                        ) : myConnections.length == 0 ? (
                            <span
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginTop: '10rem',
                                }}
                            >
                                Your connections will be shown here{' '}
                            </span>
                        ) : (
                            myConnections.map((user: any, i: number) => (
                                <ConnectionProfile
                                    key={i}
                                    user={user}
                                    removeConnection={removeConnection}
                                />
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CenterRequests
