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

export { updateMyConnections, updatePeopleYouMayKnow, updatePendingRequests }
