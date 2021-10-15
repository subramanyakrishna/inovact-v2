import { teamWithAdminAccessConstants } from 'redux/actionTypes/teamWithAdminAccessConstants'
const initialState = {
    teamWithAdminAccess: [],
}
const updateTeamWithAdminAccessReducer = (
    state = initialState,
    action: any
) => {
    switch (action.type) {
        case teamWithAdminAccessConstants.UPDATE_TEAM_WITH_ADMIN_ACCESS:
            return {
                ...state,
                teamWithAdminAccess: action.payload,
            }
        default:
            return state
    }
}
export { updateTeamWithAdminAccessReducer }
