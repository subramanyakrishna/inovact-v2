import {
    CREATE_CHAT_USER,
    CREATE_TEAM_CHAT,
    ADD_CHAT_USER,
    GET_TEAM_CHATS,
} from './../actionTypes/chats'
import ChatEngineService from 'redux/services/chats.services'

export const createTeamChat =
    (teamName: string, userName: string, email: string) =>
    async (dispatch: any) => {
        console.log('teamchat', teamName, userName, email)
        const data = {
            chatName: teamName,
            user_name: userName,
            userSecret: email,
        }
        const res = await ChatEngineService.createChat(
            data.chatName,
            data.user_name,
            data.userSecret
        )
        console.log('chatengine', res)
        dispatch({
            type: CREATE_TEAM_CHAT,
            payload: res,
        })
    }

export const getTeamChats =
    (userName: string, userSecret: string) => async (dispatch: any) => {
        console.log(userName, userSecret)
        const res = await ChatEngineService.getChats(userName, userSecret)
        console.log(res)
        dispatch({
            type: GET_TEAM_CHATS,
            payload: res,
        })
    }

export const createChatUser =
    (
        userName: string,
        userSecret: string,
        firstName: string,
        lastName: string
    ) =>
    async (dispatch: any) => {
        const data = {
            user_name: 'afif_ahmed',
            secret: userSecret,
            first_name: firstName,
            last_name: lastName,
        }
        console.log('createchatuser', data)
        const res = await ChatEngineService.createUser(
            data.user_name,
            data.first_name,
            data.last_name,
            data.secret
        )
        dispatch({
            type: CREATE_CHAT_USER,
            payload: res,
        })
    }
