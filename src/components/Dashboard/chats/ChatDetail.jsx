import { useGlobalContext } from "../../../Context"
import style from "../../../assets/css/modules/ChatDetail.module.css"
import BackButton from "../../Buttons/BackButton"
import { Button, Input, MessageList } from "react-chat-elements"
import React, { createRef } from "react"
import { Link } from "react-router-dom"

const ChatDetail = () => {
    const { chatValue, setChatValue, currentChat, setCurrentChat, AddChat } = useGlobalContext()
    const messageListReferance = createRef();

    return <>
        {
            currentChat && (
                <div className="row">
                    <div className="col-md-12 py-2">
                        <div className={`border-bottom pb-1 ` + style.header}>
                            <span className="">
                                <img src={currentChat.avatar} alt="" className={`rounded-circle img-fluid mx-1 ` + style.avatar} />
                                <strong className="">{currentChat.user.name} </strong>
                            </span>
                            <Link to={'/chats'} className="mx-5 shadow text-left rounded p-1" >
                                <i className="bi bi-arrow-left-circle"></i>
                            </Link>
                        </div>
                        {/* CONTENT */}

                        <div className={`p-2 ` + style.content}>
                            <MessageList
                                referance={messageListReferance}
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                onOpen={() => alert("On Open ...")}
                                dataSource={currentChat.messages} />

                            {/* */}
                            <Input
                                referance={messageListReferance}
                                placeholder='Laissez un message ...'
                                className={`bg-light border ` + style.inputText}
                                multiline={true}
                                onChange={(e) => setChatValue(e.target.value)}
                                autofocus={true}
                                // onCopy={() => alert("on copy")}
                                rightButtons={<Button
                                    color='white'
                                    backgroundColor='black'
                                    text='Envoyer'
                                    icon={<i class="bi bi-send"></i>}
                                    onClick={() => AddChat(chatValue)}
                                />}
                            />
                        </div>
                    </div>
                </div >
            )
        }
    </>
}


export default ChatDetail