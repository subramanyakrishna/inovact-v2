import React, { useEffect, useState } from 'react'
import RequestProfile from './RequestProfile'
import ConnectionProfile from './ConnectionProfile'
import Spinner from '../../../Spinner'
import { useDispatch, useSelector } from 'react-redux'
import {
    updateConnectReqAcceptPending,
    updateMyConnections,
    updatePendingRequests,
    updateTotalNumberOfConnections,
} from 'redux/actions/connectionsAction'

// const mapStateToProps = (state: any) => {
//     return {
//         ownId: state.userInfo.id,
//         pendingRequests: state.connections.pending_requests,
//         myConnections: state.connections.my_connections,
//     }
// }
// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         setPendingRequests: (filteredPendingRequest: any) => {
//             dispatch(updatePendingRequests(filteredPendingRequest))
//         },
//         setMyConnections: (filteredConnectedAccount: any) => {
//             dispatch(updateMyConnections(filteredConnectedAccount))
//         },
//         setConnectRequestPending: (filteredConnectReqAcceptPending: any) => {
//             dispatch(
//                 updateConnectReqAcceptPending(filteredConnectReqAcceptPending)
//             )
//         },
//     }
// }
// class CenterRequests extends Component<any, any> {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             pendingRequesLoad: true,
//             myConnectionsLoad: true,
//             showConnection: false,
//             showRequest: false,
//         }
//     }

//     handleRequestButton(event: any) {
//         this.setState({ showRequest: true, showConnection: false })
//     }

//     handleConnectionButton(event: any) {
//         event.target.style.borderBottom = '2px solid blue'
//         this.setState({ showRequest: false, showConnection: true })
//     }

//     async acceptConnectRequest(id: number, user: any) {
//         const filteredPendingRequests = this.props.pendingRequests.filter(
//             (user: any) => user.id !== id
//         )
//         this.props.setPendingRequests(filteredPendingRequests)

//         const response = await this.props.makeApiCall(
//             'post',
//             `connections/accept?user_id=${id}`
//         )
//         this.props.setMyConnections([...this.props.myConnections, user])

//         console.log(response)
//     }
//     async rejectConnectRequest(id: number) {
//         //call api to connect
//         console.log(id)
//         const filteredPendingRequest = this.props.pendingRequests.filter(
//             (user: any) => user.id !== id
//         )

//         this.props.setPendingRequests(filteredPendingRequest)
//         const response = await this.props.makeApiCall(
//             'post',
//             `connections/reject?user_id=${id}`
//         )
//         console.log(response)
//     }
//     async handleRemoveConnection(id: number) {
//         const filteredMyConnections = this.props.myConnections.filter(
//             (user: any) => user.id !== id
//         )
//         this.props.setMyConnections(filteredMyConnections)
//         const response = await this.props.makeApiCall(
//             'post',
//             `connections/remove?user_id=${id}`
//         )
//         console.log(`connections/remove?user_id=${id}`, response)
//     }
//     async getUserData(id: number, connected_at: string): Promise<any> {
//         const dataFromApi = await this.props.makeApiCall('get', `user?id=${id}`)
//         console.log(dataFromApi)
//         const userData = dataFromApi.data.data.user[0]
//         return {
//             id: id,
//             name: `${userData.first_name} ${userData.last_name}`,
//             avatar: userData.avatar,
//             designation: userData.designation,
//             connected_at: connected_at,
//             organization: userData.organization,
//             skills: userData.skills,
//         }
//     }

//     async getFilteredPendingRequestsAndConnectedAccount(
//         allConnectionsFromApi: any
//     ): Promise<any> {
//         let filteredPendingRequest: any = []
//         let filteredConnectedAccount: any = []
//         let filteredConnectReqAcceptPending: any = []
//         await allConnectionsFromApi.forEach(async (connection: any) => {
//             const otherUserId =
//                 connection.user1 === this.props.ownId
//                     ? connection.user2
//                     : connection.user1
//             const theOtherUserData = await this.getUserData(
//                 otherUserId,
//                 connection.connected_at
//             )
//             //user1 is connection sender user2 is receiver
//             if (
//                 connection.status === 'pending' &&
//                 connection.user2 === this.props.ownId
//             ) {
//                 filteredPendingRequest.push(theOtherUserData)
//             } else if (
//                 connection.status === 'pending' &&
//                 connection.user1 === this.props.ownId
//             ) {
//                 filteredConnectReqAcceptPending.push(theOtherUserData)
//             } else {
//                 filteredConnectedAccount.push(theOtherUserData)
//             }
//         })
//         this.setState({ pendingRequesLoad: false, myConnectionsLoad: false })

//         return {
//             filteredPendingRequest,
//             filteredConnectedAccount,
//             filteredConnectReqAcceptPending,
//         }
//     }
//     async componentDidMount() {
//         const dataFromConnectionApi = await this.props.makeApiCall(
//             'get',
//             'connections'
//         )
//         const allConnectionsFromApi =
//             dataFromConnectionApi.data.data.connections

//         const {
//             filteredPendingReqccount,
//             filteredConnectedAccount,
//             filteredConnectReqAcceptPending,
//         } = await this.getFilteredPendingRequestsAndConnectedAccount(
//             allConnectionsFromApi
//         )
//         this.props.setPendingRequests(filteredPendingReqccount)
//         this.props.setMyConnections(filteredConnectedAccount)
//         this.props.setConnectRequestPending(filteredConnectReqAcceptPending)
//     }
//     render() {
//         return (
//             <div className="requests-connections">
//                 <div className="requests-connections-btn">
//                     <button
//                         onClick={(e) => this.handleRequestButton(e)}
//                         style={{
//                             borderBottom: this.state.showRequest
//                                 ? '5px solid #5579BD'
//                                 : 'none',
//                         }}
//                     >
//                         Requests ({this.props.pendingRequests.length})
//                     </button>
//                     <button
//                         onClick={(e) => this.handleConnectionButton(e)}
//                         style={{
//                             borderBottom: this.state.showConnection
//                                 ? '5px solid #5579BD'
//                                 : 'none',
//                         }}
//                     >
//                         My Connections ({this.props.myConnections.length})
//                     </button>
//                 </div>
//                 {this.state.showRequest && (
//                     <div className="requests-connections-profiles">
//                         {this.state.pendingRequesLoad && <Spinner />}
//                         {this.props.pendingRequests.length == 0 &&
//                             !this.state.pendingRequesLoad && (
//                                 <span
//                                     style={{
//                                         marginTop: '10rem',
//                                     }}
//                                 >
//                                     Your pending requests will be shown here{' '}
//                                 </span>
//                             )}
//                         <div>
//                             {!this.state.pendingRequesLoad &&
//                                 this.props.pendingRequests.length != 0 &&
//                                 this.props.pendingRequests.map((user: any) => (
//                                     <RequestProfile
//                                         key={user.id}
//                                         user={user}
//                                         acceptConnectRequest={
//                                             this.acceptConnectRequest
//                                         }
//                                         rejectConnectRequest={
//                                             this.rejectConnectRequest
//                                         }
//                                     />
//                                 ))}
//                         </div>
//                     </div>
//                 )}
//                 {this.state.showConnection && (
//                     <div className="requests-connections-profiles">
//                         {this.state.myConnectionsLoad && <Spinner />}
//                         {!this.state.myConnectionsLoad &&
//                             this.props.myConnections.length === 0 && (
//                                 <span
//                                     style={{
//                                         marginTop: '10rem',
//                                     }}
//                                 >
//                                     Your connections will be shown here{' '}
//                                 </span>
//                             )}

//                         <div>
//                             {!this.state.myConnectionsLoad &&
//                                 this.props.myConnections.length !== 0 &&
//                                 this.props.myConnections.map(
//                                     (user: any, i: number) => (
//                                         <ConnectionProfile
//                                             key={i}
//                                             user={user}
//                                             handleRemoveConnection={
//                                                 this.handleRemoveConnection
//                                             }
//                                         />
//                                     )
//                                 )}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         )
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CenterRequests)

function CenterRequests({ makeApiCall }: any) {
    const [showRequest, setShowRequest] = useState(true)
    const [showConnection, setShowConnection] = useState(false)
    const [pendingRequesLoad, setPendingRequestLoad] = useState<boolean>(true)
    const [myConnectionsLoad, setMyConnectionLoad] = useState<boolean>(true)
    const ownId = useSelector((state: any) => state.userInfo.id)

    const pendingRequests = useSelector(
        (state: any) => state.connections.pending_requests
    )
    const myConnections = useSelector(
        (state: any) => state.connections.my_connections
    )
    const dispath = useDispatch()
    const connections = useSelector((state: any) => state.connections)

    useEffect(() => {
        console.log(connections)
    }, [connections])

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

            dispath(updatePendingRequests(filteredPendingRequest))
            dispath(updateMyConnections(filteredConnectedAccount))

            dispath(
                updateTotalNumberOfConnections(filteredConnectedAccount.length)
            )
            dispath(
                updateConnectReqAcceptPending(filteredConnectReqAcceptPending)
            )
        })()
    }, [])

    const handleRequestButton = (event: any) => {
        setShowRequest(true)
        setShowConnection(false)
    }
    const handleConnectionButton = (event: any) => {
        event.target.style.borderBottom = '2px solid blue'
        setShowRequest(false)
        setShowConnection(true)
    }

    const acceptConnectRequest = async (id: number, user: any) => {
        const filteredPendingRequests = pendingRequests.filter(
            (user: any) => user.id !== id
        )
        dispath(updatePendingRequests(filteredPendingRequests))

        const response = await makeApiCall(
            'post',
            `connections/accept?user_id=${id}`
        )
        dispath(updateMyConnections([...myConnections, user]))
        console.log(response)
    }

    const rejectConnectRequest = async (id: number) => {
        //call api to connect
        console.log(id)
        const filteredPendingRequest = pendingRequests.filter(
            (user: any) => user.id !== id
        )

        dispath(updatePendingRequests(filteredPendingRequest))
        const response = await makeApiCall(
            'post',
            `connections/reject?user_id=${id}`
        )
        console.log(response)
    }

    const handleRemoveConnection = async (id: number) => {
        const filteredMyConnections = myConnections.filter(
            (user: any) => user.id !== id
        )
        dispath(updateMyConnections(filteredMyConnections))
        const response = await makeApiCall(
            'post',
            `connections/remove?user_id=${id}`
        )
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
                    Requests ({pendingRequests.length})
                </button>
                <button
                    onClick={handleConnectionButton}
                    style={{
                        borderBottom: showConnection
                            ? '5px solid #5579BD'
                            : 'none',
                    }}
                >
                    My Connections ({myConnections.length})
                </button>
            </div>
            {showRequest && (
                <div className="requests-connections-profiles">
                    {pendingRequesLoad && <Spinner />}
                    {pendingRequests.length == 0 && !pendingRequesLoad && (
                        <span
                            style={{
                                marginTop: '10rem',
                            }}
                        >
                            Your pending requests will be shown here{' '}
                        </span>
                    )}
                    <div>
                        {!pendingRequesLoad &&
                            pendingRequests.length != 0 &&
                            pendingRequests.map((user: any) => (
                                <RequestProfile
                                    key={user.id}
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
                    {myConnectionsLoad && <Spinner />}
                    {!myConnectionsLoad && myConnections.length === 0 && (
                        <span
                            style={{
                                marginTop: '10rem',
                            }}
                        >
                            Your connections will be shown here{' '}
                        </span>
                    )}

                    <div>
                        {!myConnectionsLoad &&
                            myConnections.length !== 0 &&
                            myConnections.map((user: any, i: number) => (
                                <ConnectionProfile
                                    key={i}
                                    user={user}
                                    handleRemoveConnection={
                                        handleRemoveConnection
                                    }
                                />
                            ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default CenterRequests
