import { otherUserConnectionsConstants } from 'redux/actionTypes/otherUserConnections'

const initialState: any = []

const otherUserConnectionsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case otherUserConnectionsConstants.OTHER_USER_CONNECTIONS_ALL:
            return [...action.payload]
        case otherUserConnectionsConstants.OTHER_USER_CONNECTIONS_CLEAR:
            return initialState
        default:
            return state
    }
}
export { otherUserConnectionsReducer }
