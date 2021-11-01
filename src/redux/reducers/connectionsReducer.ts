import { connectionActionTypes } from 'redux/actionTypes/connectionsActionTypes'

const initialState = {
    pending_requests: [],
    my_connections: [],
    people_you_may_know: [],
    connect_req_accept_pending: [],
    connection_data: [],
    my_connnections_complete: [],
    connected_account_ids: [],
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
        case connectionActionTypes.CONNECTION_DATA:
            return { ...state, connection_data: action.payload }
        case connectionActionTypes.MY_CONNECTIONS_COMPLETE:
            return { ...state, my_connnections_complete: action.payload }
        case connectionActionTypes.CONNECTED_ACCOUNT_ID:
            return {
                ...state,
                connected_account_ids: action.payload,
            }
        default:
            return state
    }
}
export { connectionsReducer }
