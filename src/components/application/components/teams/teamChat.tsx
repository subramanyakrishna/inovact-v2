import React from 'react'
// @ts-ignore
import { ChatEngine, ChatList } from 'react-chat-engine'

const TeamChat = () => {
    return (
        <div style={{ marginTop: '5rem' }}>
            <ChatEngine
                // height="100vh"
                renderChatList={(chatAppState: any) => (
                    <ChatList {...chatAppState} />
                )}
                userName="afif"
                userSecret="afifahmed456123@gmail.com"
                projectID="02640f0a-dec7-475d-a7e5-0ee4c955a5b0"
            />
        </div>
    )
}

export default TeamChat
