import { useGlobalContext } from "../../../Context"
import style from "../../../assets/css/modules/ChatDetail.module.css"
import { Button, Input, MessageList } from "react-chat-elements"
import React, { createRef, useState } from "react"
import { Link } from "react-router-dom"
import "react-chat-elements/dist/main.css";

const ChatDetail = () => {
    const chatInput = document.querySelector(".chatInput > textarea.rce-input-textarea")

    const {
        chatValue,
        setChatValue,
        currentChat,
        AddChat,
        setShowEmojis,
        HandleDocumentUpload,
        setShowChatFiles,
        showChatFiles,
    } = useGlobalContext()

    const messageListReferance = createRef();
    const [fileType, setFileType] = useState('file')

    const files = [
        {
            name: "Document",
            type: "file",
            icon: <i className="bi bi-file-earmark-text"></i>
        },
        {
            name: "Photos",
            type: "file",
            icon: <i className="bi bi-images"></i>
        },
        {
            name: "Vidéos",
            type: "file",
            icon: <i className="bi bi-film"></i>
        },
        {
            name: "Caméra",
            type: "file",
            icon: <i className="bi bi-camera"></i>
        },
    ]

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
                                downButton={true}
                                referance={messageListReferance}
                                className='message-list'
                                lockable={true}
                                toBottomHeight={'100%'}
                                dataSource={currentChat.messages} />

                            {
                                chatInput && (chatInput.value.trim() != '' && <div className="spinner-grow spinner-grow-sm bg-white" role="status"></div>)
                            }

                            {
                                /* LES ELEMENTS DU DROPDOWN */
                                showChatFiles && (
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn-close bg-white" onClick={() => setShowChatFiles(!showChatFiles)} aria-label="Close"></button>
                                        <ul className="list-group w-50 shadow-lg my-3">
                                            {
                                                files.map((item, index) => (
                                                    <li key={index} className="list-group-item" style={{ cursor: 'pointer' }} onClick={() => setFileType(item.type)}>
                                                        <label htmlFor="files" style={{ cursor: 'pointer' }}>
                                                            {item.icon} {item.name}
                                                        </label>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                )
                            }

                            {/* */}
                            <Input
                                referance={messageListReferance}
                                placeholder='Laissez un message ...'
                                className={`bg-light border chatInput ` + style.inputText}
                                multiline={true}
                                onChange={(e) => setChatValue(e.target.value)}
                                autofocus={true}

                                // RIGHT BUTTONS
                                leftButtons={
                                    <div style={{ display: "flex", gap: "5px" }}>
                                        <Link to={'#'}
                                            onClick={() => setShowChatFiles(!showChatFiles)}
                                            className="text-dark shadow p-1 rounded"
                                            data-bs-toggle="modal" data-bs-target="#addFiles"
                                        ><i className="bi bi-plus-circle"></i></Link>
                                        <Link to={'#'}
                                            onClick={() => setShowEmojis(true)}
                                            className="text-dark shadow p-1 rounded"
                                            data-bs-toggle="modal" data-bs-target="#emojiModal"
                                        ><i className="bi bi-emoji-tear"></i></Link>
                                    </div>
                                }

                                // RIGHT BUTTONS
                                rightButtons={
                                    <div style={{ display: "flex", gap: "5px" }}>
                                        <Link to={'#'}
                                            onClick={() => AddChat()}
                                            className="bg-dark text-white mx-1 shadow p-1 rounded"
                                        >Envoyer <i className="bi bi-send-arrow-up"></i></Link>

                                        <Link to={'#'}
                                            // onClick={() => setShowEmojis(true)}
                                            className="text-dark shadow p-1 rounded"
                                        ><i className="bi bi-mic-fill"></i></Link>

                                    </div>
                                }
                            />
                        </div>
                    </div>

                    {/* INPUTS */}
                    <input type={fileType}
                        // hidden
                        id="files"
                        // webkitdirectory="true" // Allows selecting a directory
                        onChange={(e) => HandleDocumentUpload(e)}
                    />
                </div >
            )
        }
    </>
}

export default ChatDetail