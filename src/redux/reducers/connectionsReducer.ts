import { connectionActionTypes } from 'redux/actionTypes/connectionsActionTypes'

const initialState = {
    pending_requests: [],
    my_connections: [],
    people_you_may_know: [],
    connect_req_accept_pending: [],
    my_connection_length: 0,
}

const connectionsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case connectionActionTypes.MY_CONNECTIONS:
            return { ...state, my_connections: action.payload }
        case connectionActionTypes.PENDING_REQUESTS:
            return { ...state, pending_requests: action.payload }
        case connectionActionTypes.PEOPLE_YOU_MAY_KNOW:
            return { ...state, people_you_may_know: action.payload }
        case connectionActionTypes.CONNECT_REQUEST_ACCEPT_PENDING:
            return { ...state, connect_req_accept_pending: action.payload }
        case connectionActionTypes.MY_CONNECTION_LENGTH:
            return { ...state, my_connection_length: action.payload }
        default:
            return state
    }
}
export { connectionsReducer }
