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
        console.log(res)
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
            user_name: userName,
            secret: userSecret,
            first_name: firstName,
            last_name: lastName,
        }
        const res = await ChatEngineService.createUser(
            data.user_name,
            data.secret,
            data.first_name,
            data.last_name
        )
        dispatch({
            type: CREATE_CHAT_USER,
            payload: res,
        })
    }
