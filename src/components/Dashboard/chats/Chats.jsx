import 'react-chat-elements/dist/main.css'
// MessageBox component
import { ChatItem } from 'react-chat-elements'

import { useGlobalContext } from '../../../Context'
import { useNavigate } from 'react-router-dom'

const Chats = () => {

    const { chats, setCurrentChat } = useGlobalContext()
    const navigate = useNavigate();

    const HandleChatClick = (chat) => {
        setCurrentChat(chat)
        navigate('/chats-detail');
    }

    return <>
        {
            chats.map((chat, index) => (
                <ChatItem
                    key={index}
                    avatar={chat.avatar}
                    alt={chat.user.name}
                    title={chat.user.name}
                    // On recupere le dernier message
                    subtitle={chat.messages[chat.messages.length-1].text}
                    date={new Date()}
                    unread={3}
                    // showVideoCall={true}
                    // showMute={true}
                    // muted={true}
                    onClick={() => HandleChatClick(chat)}
                />
            ))
        }
    </>
}

export default Chats