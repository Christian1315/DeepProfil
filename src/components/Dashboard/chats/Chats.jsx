import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox } from 'react-chat-elements'
import { ChatItem } from 'react-chat-elements'

import me from "../../../assets/images/me.jpg"
import gogo from "../../../assets/images/gogo.png"
import { useGlobalContext } from '../../../Context'
import ChatDetail from './ChatDetail'
import { Link, Navigate } from 'react-router-dom'

const Chats = () => {

    const { chats, currentChat, setCurrentChat } = useGlobalContext()

    const HandleChatClick = (chat) => {
        // alert(chat.id)
        setCurrentChat(chat)
        return <Navigate to="/chats-detail" replace />
    }
    return <>
        {
            chats.map((chat, index) => (
                <ChatItem
                    key={index}
                    avatar={me}
                    alt={'Reactjs'}
                    title={'Christ'}
                    subtitle={'What are you doing?'}
                    date={new Date()}
                    unread={3}
                    onClick={() => HandleChatClick(chat)}
                />
            ))
        }
    </>
}

export default Chats