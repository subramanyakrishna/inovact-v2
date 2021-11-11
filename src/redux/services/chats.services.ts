import axios from 'axios'

const chatEngineBaseUrl = 'https://api.chatengine.io'

class ChatEngineService {
    public async createChat(
        chatName: string,
        user_name: string,
        userSecret: string
    ): Promise<any> {
        const response = await axios.post(
            `${chatEngineBaseUrl}/chats/`,
            {
                title: chatName,
                is_direct_chat: false,
            },
            {
                headers: {
                    'Project-ID': '02640f0a-dec7-475d-a7e5-0ee4c955a5b0',
                    'User-Name': user_name,
                    'User-Secret': userSecret,
                },
            }
        )

        return response.data
    }

    public async getChats(user_name: string, userSecret: string): Promise<any> {
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
        const response = await axios.post(
            `${chatEngineBaseUrl}/users`,
            {
                username: user_name,
                first_name: firstName,
                last_name: lastName,
                secret: secret,
            },
            {
                headers: {
                    'PRIVATE-KEY': '129d4338-649c-4246-99f0-204469a872ad',
                },
            }
        )

        return response.data
    }

    public async addChatUser(
        user_name: string,
        user_secret: string,
        chat_id: string
    ): Promise<any> {
        const response = await axios.post(
            `${chatEngineBaseUrl}/chats/${chat_id}/people/`,
            {
                username: user_name,
            },
            {
                headers: {
                    'Project-ID': '02640f0a-dec7-475d-a7e5-0ee4c955a5b0',
                    'User-Name': user_name,
                    'User-Secret': user_secret,
                },
            }
        )
    }
}

export default new ChatEngineService()
