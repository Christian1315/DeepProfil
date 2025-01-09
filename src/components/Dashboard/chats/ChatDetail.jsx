import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../../../Context"
// import style from "../../assets/css/modules/NotificationDetail.module.css"
import BackButton from "../../Buttons/BackButton"
import { MessageBox } from "react-chat-elements"

const ChatDetail = () => {

    const { currentChat, setCurrentChat } = useGlobalContext()

    return <>
        {
            currentChat && (
                <div className="row">
                    <div className="col-md-12 py-2">
                        <h6 className={`text-left ${style.title}`}> {currentChat.user.name} </h6>
                        <p className=""> {currentChat.message} </p>
                        <p className="text-center mt-5">
                            <BackButton route={'/chats'} />
                        </p>
                    </div>

                    {/*  */}
                    <MessageBox
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
                    />
                </div>
            )
        }
    </>
}


export default ChatDetail