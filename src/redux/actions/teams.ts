import { CREATE_TEAM, GET_TEAMS } from './../actionTypes/teams'
import TeamsService from '../services/teams.services'
import { ICreateTeam } from 'redux/interfaces/teams.interface'

export const createTeam = (team: ICreateTeam) => async (dispatch: any) => {
    try {
        //? this data is temporary and will be replaced by the real data according to the backend
        const data = {
            name: team.name,
            avatar: "",
            team_tags: [],
            team_members: [],
        }
        const res = await TeamsService.createTeam(data)
        console.log(res)
        dispatch({
            type: CREATE_TEAM,
            payload: res.data,
        })
    } catch (error) {
        console.log(error);
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
