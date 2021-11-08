import {
    CREATE_TEAM,
    GET_TEAMS,
    INVITE_MEMBERS,
    UPDATE_TEAM_AVATAR,
} from './../actionTypes/teams'
import TeamsService from '../services/teams.services'
import { createChatUser, createTeamChat } from './chats'
import chatsServices from 'redux/services/chats.services'

export const createTeam =
    (team: any, userData: any) => async (dispatch: any) => {
        try {
            console.log(userData)
            //? this data is temporary and will be replaced by the real data according to the backend
            // const res = await TeamsService.createTeam(team)
            // const data = await dispatch({
            //     type: CREATE_TEAM,
            //     payload: res.data,
            // })

            // const data = await chatsServices.createChat(
            //     team.name,
            //     userData.username,
            //     userData.id
            // )

            // const data = await dispatch(
            //     createChatUser(
            //         userData.user_name,
            //         userData.email_id,
            //         userData.firstName,
            //         userData.lastName
            //     )
            // )
            // console.log(data)
            const data = await dispatch(
                createTeamChat(team.name, 'afif_ahmed', userData.email_id)
            )
            console.log(data)
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

export const updateTeamAvatar =
    (teamUpdateImg: any) => async (dispatch: any) => {
        try {
            console.log('putreq in teams', teamUpdateImg)
            const res = await TeamsService.updateTeamAvatar(teamUpdateImg)
            console.log('updated the image', res.data)
            //   dispatch({
            //       type: UPDATE_TEAM_AVATAR,
            //       payload: res.data
            //   })
        } catch (error) {
            throw error
        }
    }

export const inviteMembers = (bodyData: any) => async (dispatch: any) => {
    try {
        const res = await TeamsService.inviteMember(bodyData)
        console.log(res.data.insert_team_invitations.returning[0])
        dispatch({
            type: INVITE_MEMBERS,
            payload: res.data.insert_team_invitations.returning[0],
        })
    } catch (error) {
        throw error
    }
}
