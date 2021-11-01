import { CREATE_TEAM, GET_TEAMS, INVITE_MEMBERS, UPDATE_TEAM_AVATAR } from './../actionTypes/teams'
import TeamsService from '../services/teams.services'

export const createTeam = (team: any) => async (dispatch: any) => {
    try {
        //? this data is temporary and will be replaced by the real data according to the backend
        const res = await TeamsService.createTeam(team)
        console.log(res)
        dispatch({
            type: CREATE_TEAM,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
    }
}

export const getTeams = (userId: string) => async (dispatch: any) => {
    try {
        const res = await TeamsService.getTeams(userId)
        console.log('teams redux', res.data)
        dispatch({
            type: GET_TEAMS,
            payload: res.data,
        })
    } catch (error) {
        throw error
    }
}

export const updateTeamAvatar =( teamUpdateImg:any, ) => async (dispatch :any) =>{
    try {
        console.log("putreq in teams",teamUpdateImg)
      const res = await TeamsService.updateTeamAvatar(teamUpdateImg)
      console.log('updated the image', res.data)
    //   dispatch({
    //       type: UPDATE_TEAM_AVATAR,
    //       payload: res.data
    //   })
    }
    catch(error){
        throw error
    }
}

export const inviteMembers = (bodyData: any) => async (dispatch: any) => {
    try {
        const res = await TeamsService.inviteMember(bodyData)
        dispatch({
            type: INVITE_MEMBERS,
            payload: res.data.insert_team_invitations.returning[0],
        })
    } catch (error) {
        throw error
    }
}
