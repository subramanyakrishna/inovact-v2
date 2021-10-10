import { teamWithAdminAccessConstants } from 'redux/actionTypes/teamWithAdminAccessConstants'

const updateTeamWithAdminAccessAction = (teams: any) => ({
    type: teamWithAdminAccessConstants.UPDATE_TEAM_WITH_ADMIN_ACCESS,
    payload: teams,
})

export { updateTeamWithAdminAccessAction }
