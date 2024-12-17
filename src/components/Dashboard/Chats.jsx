import 'react-chat-elements/dist/main.css'
// MessageBox component
import { MessageBox } from 'react-chat-elements'
import { ChatItem } from 'react-chat-elements'

import me from "../../assets/images/me.jpg"
import gogo from "../../assets/images/gogo.png"

const Chats = () => {

    return <>
        <ChatItem
            avatar={me}
            alt={'Reactjs'}
            title={'Christ'}
            subtitle={'What are you doing?'}
            date={new Date()}
            unread={3}
        />
        <ChatItem
            avatar={gogo}
            alt={'Reactjs'}
            title={'Christ'}
            subtitle={'What are you doing?'}
            date={new Date()}
            unread={3}
        />
        <ChatItem
            avatar={me}
            alt={'Reactjs'}
            title={'Christ'}
            subtitle={'What are you doing?'}
            date={new Date()}
            unread={3}
        />
        <ChatItem
            avatar={gogo}
            alt={'Reactjs'}
            title={'Christ'}
            subtitle={'What are you doing?'}
            date={new Date()}
            unread={3}
        />
        {/* <MessageBox
            reply={{
                photoURL: 'https://facebook.github.io/react/img/logo.svg',
                title: 'elit magna',
                titleColor: '#8717ae',
                message: 'Aliqua amet incididunt id nostrud',
            }}
            onReplyMessageClick={() => console.log('reply clicked!')}
            position={'left'}
            type={'text'}
            text={'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'}
        /> */}
    </>
}

export default Chats