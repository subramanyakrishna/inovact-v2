import { CREATE_TEAM, GET_TEAMS, INVITE_MEMBERS } from './../actionTypes/teams'
import TeamsService from '../services/teams.services'
import { ICreateTeam } from 'redux/interfaces/teams.interface'

export const createTeam = (team: ICreateTeam) => async (dispatch: any) => {
    try {
        //? this data is temporary and will be replaced by the real data according to the backend
        const data = {
            name: team.name,
            looking_for_members: team.looking_for_members,
            looking_for_mentor: team.looking_for_mentor,
            roles: [],
            tags: [],
            members: [],
        }
        const res = await TeamsService.createTeam(data)
        console.log(res)
        dispatch({
            type: CREATE_TEAM,
            payload: res.data,
        })
    } catch (error) {
        throw error
    }
}

export const getTeams = (userId: string) => async (dispatch: any) => {
    try {
        const res = await TeamsService.getTeams(userId)
        dispatch({
            type: GET_TEAMS,
            payload: res.data,
        })
    } catch (error) {
        throw error
    }
}


export const inviteMembers =(userId: string) => async (dispatch: any) => {
    try {
        const res = await TeamsService.inviteMember(userId)
        dispatch({
            type:INVITE_MEMBERS,
            payload: res.data
        })
    } catch (error) {
        throw error
    }
}
