import { ChatItem, MessageBox } from "react-chat-elements";
import { useState } from "react";
import me from "../../../../assets/images/me.jpg"
import { useGlobalContext } from "../../../../Context";

const CommentBox = ({ comment, comments, style, setComments }) => {
    
    const { showEmojis, setShowEmojis, setLoader, setLoaderText, replyText, setReplyText } = useGlobalContext()
    const replyField = document.getElementById('replyField')

    const [reply, setReply] = useState(false)

    const HandleReplyClick = () => {
        setReply(!reply)
    }

    const HandleReplyTextChange = (e) => {
        setReplyText(e.target.value)
    }

    const HandleReplySubmit = () => {

        setLoader(true)
        setLoaderText('En Cours ...')
        replyText &&
            setTimeout(() => {
                let newAnswer = {
                    id: comment.id,
                    content: replyText,
                    date: new Date(),
                    img: { me }
                }

                let commentAnswers = [newAnswer, ...comment.answers]
                let newComments = comments.map((item) => (
                    item.id == comment.id ? { ...item, answers: commentAnswers } : item
                ))

                setComments(newComments)

                setLoaderText('Commentaire éffeectué')
            }, 200);

        setLoader(false)
        setReplyText(null)

        replyField.value = ''
    }

    return <>
        <div className={`px-2 ${style.commentBox}`}>
            <ChatItem
                avatar={me}
                alt={comment.commentor.name}
                title={comment.commentor.name}
                subtitle={comment.content}
                date={comment.content.date}
                onClick={HandleReplyClick}
                className={style.commentInput}
            />
            <button
                className={`btn btn-sm bg-light border shadow ${style.replyBtn}`}
                onClick={HandleReplyClick}
            >
                {
                    reply ? <i className="bi bi-eye-slash mx-2"></i> :
                        <i className="bi bi-eye mx-2"></i>
                }
                Réponses
                {
                    comment.answers ? <span className='text-blue'> ({comment.answers.length}) </span> : '0'
                }
            </button>

            {
                /* REPLY BAR */
                reply &&
                <div className="row">
                    <div className="col-sm-12">
                        <input type="text" id="replyField" placeholder={`Répondre : ${comment.content}`} onChange={(e) => HandleReplyTextChange(e)} className={`form-control w-100  ${style.replyInput}`} />
                        {replyText && <span className={style.submitReplyBtn}><i className="bi bi-send shadow p-1 rounded" onClick={HandleReplySubmit}></i></span>}
                        <span className={style.submitReplyBtn} onClick={() => setShowEmojis(!showEmojis)}><i className="bi bi-emoji-astonished shadow p-1 rounded"></i></span>
                    </div>
                </div>
            }
            <br />

            {/* LES REPONSES AUX COMMENTAIRES */}
            <div className={`border-top ${style.commentsReplayedBox}`}>
                {
                    (reply && comment.answers.lenght != 0) &&
                    comment.answers.map((answer, index) => (
                        <div key={index}>
                            <MessageBox
                                reply={{
                                    photoURL: me,
                                    title: comment.commentor.name,
                                    titleColor: '#8717ae',
                                    message: comment.content,
                                }}
                                position={'right'}
                                type={'text'}
                                text={answer.content}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    </>
}

export default CommentBox