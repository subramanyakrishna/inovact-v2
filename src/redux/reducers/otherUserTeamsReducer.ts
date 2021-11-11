import { otherUserTeamsConstants } from 'redux/actionTypes/otherUserTeamsConstants'

const initialState: any = []

const otherUserTeamsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case otherUserTeamsConstants.OTHER_USER_TEAMS_UPDATE_ALL:
            return [...action.payload]
        case otherUserTeamsConstants.OTHER_USER_TEAMS_CLEAR_ALL:
            return initialState
        default:
            return state
    }
}

export { otherUserTeamsReducer }
