import React, { useEffect, useState } from 'react'
import RequestProfile from './RequestProfile'
import ConnectionProfile from './ConnectionProfile'
import { useDispatch, useSelector } from 'react-redux'
import { users } from '../usersData'
import {
    updateMyConnections,
    updatePendingRequests,
} from 'redux/actions/connectionsAction'

function CenterRequests({ makeApiCall }: any) {
    const [showRequest, setShowRequest] = useState(true)
    const [showConnection, setShowConnection] = useState(false)
    const dispath = useDispatch()
    const pending_requests = useSelector(
        (state: any) => state.connections.pending_requests
    )
    const my_connections = useSelector(
        (state: any) => state.connections.my_connections
    )
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
        console.log(id)
        dispath(
            updatePendingRequests(
                pending_requests.filter((user: any) => user.id != id)
            )
        )

        await makeApiCall({
            method: 'POST',
            route: `connections/accept?user_id=${id}`,
        })
    }

    const rejectConnectRequest = async (id: number) => {
        //call api to connect
        console.log(id)
        dispath(
            updatePendingRequests(
                pending_requests.filter((user: any) => user.id != id)
            )
        )
        await makeApiCall({
            method: 'POST',
            route: `connections/reject?user_id=${id}`,
        })
    }
    const removeConnection = (id: number) => {
        dispath(
            updateMyConnections(
                my_connections.filter((user: any) => user.id != id)
            )
        )
    }
    useEffect(() => {
        dispath(updatePendingRequests(users))
        dispath(updateMyConnections(users))
    }, [])
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
                        {pending_requests &&
                            pending_requests.map((user: any) => (
                                <RequestProfile
                                    user={user}
                                    acceptConnectRequest={acceptConnectRequest}
                                    rejectConnectRequest={rejectConnectRequest}
                                />
                            ))}
                    </div>
                </div>
            )}
            {showConnection && (
                <div className="requests-connections-profiles">
                    <div>
                        {my_connections &&
                            my_connections.map((user: any) => (
                                <ConnectionProfile
                                    user={user}
                                    removeConnection={removeConnection}
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CenterRequests
