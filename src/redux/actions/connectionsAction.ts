import { connectionActionTypes } from 'redux/actionTypes/connectionsActionTypes'

const updateMyConnections = (my_connections: any) => {
    return {
        type: connectionActionTypes.MY_CONNECTIONS,
        payload: my_connections,
    }
}
const updatePeopleYouMayKnow = (people_you_may_know: any) => {
    return {
        type: connectionActionTypes.PEOPLE_YOU_MAY_KNOW,
        payload: people_you_may_know,
    }
}

const updatePendingRequests = (pending_requests: any) => {
    return {
        type: connectionActionTypes.PENDING_REQUESTS,
        payload: pending_requests,
    }
}
const updateConnectReqAcceptPending = (connect_req_accept_pending: any) => {
    return {
        type: connectionActionTypes.CONNECT_REQUEST_ACCEPT_PENDING,
        payload: connect_req_accept_pending,
    }
}
const updateConnectedAccountId = (connectedAccountId: number[]) => {
    return {
        type: connectionActionTypes.CONNECTED_ACCOUNT_ID,
        payload: connectedAccountId,
    }
}

const updateConnectionData = (connectionData: any) => {
    return {
        type: connectionActionTypes.CONNECTION_DATA,
        payload: connectionData,
    }
}
const updateConnectionComplete = (data: any) => {
    return {
        type: connectionActionTypes.MY_CONNECTIONS_COMPLETE,
        payload: data,
    }
}
export {
    updateMyConnections,
    updatePeopleYouMayKnow,
    updatePendingRequests,
    updateConnectReqAcceptPending,
    updateConnectionData,
    updateConnectionComplete,
    updateConnectedAccountId,
}
