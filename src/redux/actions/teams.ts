import {
    CREATE_TEAM,
    GET_TEAMS,
    INVITE_MEMBERS,
    UPDATE_TEAM_AVATAR,
} from './../actionTypes/teams'
import TeamsService from '../services/teams.services'
import { createChatUser, createTeamChat } from './chats'
import chatsServices from 'redux/services/chats.services'
import axios from 'axios'

const baseUrl = 'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev'

export const createTeam =
    (team: any, userData: any) => async (dispatch: any) => {
        try {
            //? this data is temporary and will be replaced by the real data according to the backend
            await TeamsService.createTeam(team).then(async (teamData) => {
                dispatch(getTeams('user'))

                // const result = await dispatch(
                //     createChatUser(
                //         userData.user_name,
                //         userData.email_id,
                //         userData.firstName,
                //         userData.lastName
                //     )
                // )
                const data = await dispatch(
                    createTeamChat(
                        team.name,
                        userData.user_name,
                        userData.email_id
                    )
                )
                console.log('teamchats', data)
                await axios.put(
                    `${baseUrl}/team`,
                    {
                        team_id: teamData.data.team.id,
                        chat_id: data.id,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: localStorage.getItem('user'),
                        },
                    }
                )
            })
            // a new user will be created if he has no team as an admin
        } catch (error) {}
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

export const updateTeamAvatar =
    (teamUpdateImg: any) => async (dispatch: any) => {
        try {
        } catch (error) {
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
