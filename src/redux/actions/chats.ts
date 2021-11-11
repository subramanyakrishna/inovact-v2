import {
    CREATE_CHAT_USER,
    CREATE_TEAM_CHAT,
    ADD_CHAT_USER,
    GET_TEAM_CHATS,
} from './../actionTypes/chats'
import ChatEngineService from 'redux/services/chats.services'
import { async } from 'rxjs'

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

        dispatch({
            type: CREATE_TEAM_CHAT,
            payload: res,
        })
        return res
    }

export const getTeamChats =
    (userName: string, userSecret: string) => async (dispatch: any) => {
        const res = await ChatEngineService.getChats(userName, userSecret)

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
            data.first_name,
            data.last_name,
            data.secret
        )
        dispatch({
            type: CREATE_CHAT_USER,
            payload: res,
        })
    }

export const addChatUser = async (
    user_name: string,
    user_secret: string,
    chat_id: string
) => {
    const res = await ChatEngineService.addChatUser(
        user_name,
        user_secret,
        chat_id
    )
    console.log(res)
}
