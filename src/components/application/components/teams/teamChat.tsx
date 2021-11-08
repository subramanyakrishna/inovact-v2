import React, { useEffect, useState } from 'react'
// @ts-ignore
import { ChatEngine, ChatList, ChatFeed } from 'react-chat-engine'
import { useHistory } from 'react-router'
import axios from 'axios'
import { UserI } from 'interfaces'

const TeamChat = (props: any) => {
    const [userInfo, setUserInfo] = useState<UserI>()
    const history = useHistory()
    useEffect(() => {
        if (localStorage.getItem('user')) {
            axios
                .get(
                    'https://cg2nx999xa.execute-api.ap-south-1.amazonaws.com/dev/user',
                    {
                        headers: {
                            Authorization: localStorage.getItem('user'),
                        },
                    }
                )
                .then(async (resp: any) => {
                    if (resp.status === 200) {
                        const userInfo = resp.data.data.user[0]
                        setUserInfo(userInfo)
                    }
                })
                .catch((err) => {
                    // alert(err.message)
                    // history.push('/login')
                })
        } else {
            history.push('/login')
        }
    }, [])

    return (
        <div style={{ marginTop: '5rem' }}>
            {userInfo && (
                <ChatEngine
                    // height="100vh"
                    renderChatList={(chatAppState: any) => (
                        <ChatList {...chatAppState} />
                    )}
                    // renderChatFeed={(chatAppState: any) => (
                    //     <ChatFeed {...chatAppState} />
                    // )}
                    userName={userInfo!.user_name}
                    userSecret={userInfo!.email_id}
                    projectID="02640f0a-dec7-475d-a7e5-0ee4c955a5b0"
                />
            )}
        </div>
    )
}

export default TeamChat
