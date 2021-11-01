import axios from 'axios'

const chatEngineBaseUrl = 'https://api.chatengine.io'

class ChatEngineService {
    public async createChat(
        chatName: string,
        user_name: string,
        userSecret: string
    ): Promise<any> {
        console.log(chatName, user_name, userSecret)
        const response = await axios.post(
            `${chatEngineBaseUrl}/chats`,
            {
                title: chatName,
                is_direct_chat: false,
            },
            {
                headers: {
                    'Project-ID': process.env.REACT_APP_CHATENGINE_PROJECT_ID,
                    'User-Name': user_name,
                    'User-Secret': userSecret,
                },
            }
        )
        console.log(response.data)
        return response.data
    }

    public async getChats(user_name: string, userSecret: string): Promise<any> {
        console.log(
            user_name,
            userSecret,
            process.env.REACT_APP_CHATENGINE_PROJECT_ID
        )
        const response = await axios.get(`${chatEngineBaseUrl}/chats`, {
            headers: {
                'Project-ID': '02640f0a-dec7-475d-a7e5-0ee4c955a5b0',
                'User-Name': user_name,
                'User-Secret': userSecret,
            },
        })

        return response.data
    }

    public async createUser(
        user_name: string,
        firstName: string,
        lastName: string,
        secret: string
    ): Promise<any> {
        const response = await axios.post(`${chatEngineBaseUrl}/users`, {
            username: user_name,
            first_name: firstName,
            last_name: lastName,
            secret: secret,
        })

        return response.data
    }
}

export default new ChatEngineService()
