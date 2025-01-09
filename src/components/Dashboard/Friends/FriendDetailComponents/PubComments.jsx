import { useState } from "react"
import CommentBox from "./CommentBox"
import style from "../../../../assets/css/modules/PubComments.module.css"
import me from "../../../../assets/images/me.jpg"
import { useGlobalContext } from "../../../../Context"

const PubComments = ({ pub }) => {
    const { publications, setPublications, setCurrentPub } = useGlobalContext()

    const [showSearch, setShowSearch] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('')

    // 
    const [comments, setComments] = useState([
        {
            id: 1,
            content: 'Salut Christ!',
            date: new Date(),
            commentor: {
                id: 1,
                name: "GOGO Christian",
            },
            answers: [
                {
                    id: 1,
                    content: "Oui Je vais super bien! Et de ton côté?",
                    date: new Date(),
                    img: { me }
                },
                {
                    id: 2,
                    content: "On s'est vu ça fait un bye!",
                    date: new Date(),
                    img: { me }
                },
                {
                    id: 3,
                    content: "Le petit te salut en passant :)!",
                    date: new Date(),
                    img: { me }
                },
                {
                    id: 4,
                    content: "Je te passe son coucou",
                    date: new Date(),
                    img: { me }
                }
            ],
        },
        {
            id: 2,
            content: 'Très bonne info!',
            date: new Date(),
            commentor: {
                id: 2,
                name: "SEDEGNAN Florent",
            },
            answers: [
                {
                    id: 1,
                    content: "Oui merci Guezo",
                    date: new Date(),
                    img: { me }
                },
                {
                    id: 2,
                    content: "Comment va la famille?",
                    date: new Date(),
                    img: { me }
                }
            ],
        }
    ])

    const HandleComment = (e) => {
        setComment(e.target.value)
    }

    const MakeComment = () => {
        setShowSearch(!showSearch)
    }

    const SubmitComment = () => {
        const commentField = document.getElementById('commentField')

        if (commentField.value.trim() != '') {
            let lastComment = comments.reverse()[0]
            let data = {
                id: lastComment.id++,
                content: comment,
                date: new Date(),
                commentor: {
                    id: 1,
                    name: "GOGO Christian",
                },
                answers: []
            }
            let newComments = [data, ...comments]

            setComments(newComments)
            setShowComments(true)

            commentField.value = ''
        }
    }

    const RefreshCurrentPub = (pub) => {
        setCurrentPub(pub)
    }

    const HandleLikeClick = () => {
        setCurrentPub(null)
        let newLike = {
            id: pub.likes.length+1,
            liker: {
                name: `Liker new ${pub.likes.length+1}`
            }
        }

        let updatedPubs = publications.map((item) => (
            item.id == pub.id ? { ...item, likes: [...item.likes, newLike] } : item
        ))

        setPublications(updatedPubs)
        setCurrentPub(updatedPubs.find((item) => item.id == pub.id))
    }

    return <>
        <div className="card-footer">
            <div className={style.reactPub}>
                <div className="">
                    <i className={`bi bi-hand-thumbs-up text-white btn btn-sm bg-blue rounded-circle ${style.reactLikeBtn}`} onClick={HandleLikeClick}></i>
                </div>

                {
                    showSearch &&
                    <div className="input-group mx-5">
                        <input id="commentField" type="text" placeholder="Laisser un commentaire, puis tapez entrer .." onChange={(e) => HandleComment(e)} className={`form-control w-50 mb-2 ${style.searchInput}`} />
                        <span className=""><i className="bi bi-send shadow p-1 rounded" onClick={SubmitComment}></i></span>
                    </div>
                }

                <div className="">
                    <span className={`badge bg-white rounded-circle ${style.badgeCount}`}>{comments.length < 10 ? `0${comments.length}` : comments.length}</span>
                    <i className={`bi bi-chat-dots tewt-white btn btn-sm bg-blue rounded-circle ${style.reactLikeBtn}`} onClick={() => setShowComments(!showComments)}></i>
                </div>
            </div>
            <div className={style.reactAction}>
                <button className={`btn btn-sm bg-white shadow shadow-sm `} id={style.likePubBtn} data-bs-toggle="modal" data-bs-target="#PublicationLikes" onClick={() => RefreshCurrentPub(pub)}><i className="bi bi-list"></i> J'aime <span className='text-blue'> ({pub.likes.length < 10 ? `0${pub.likes.length}` : pub.likes.length}) </span></button>
                <button className={`btn btn-sm bg-white shadow shadow-sm `} onClick={MakeComment}><i className="bi bi-chat-dots"></i> {showSearch ? 'Fermer le commentaire' : 'Commenter'}</button>
                <button className={`btn btn-sm bg-white shadow shadow-sm`} data-bs-toggle="modal" data-bs-target="#PublicationShare"><i className="bi bi-share"></i> Partager</button>
            </div>

            {
                showComments &&
                <div className={`commentBlok border py-2 ${style.commentBlok}`}>
                    {
                        comments.map((comment, index) => (
                            <div
                                key={index}
                                className={style.commentRow}
                            >
                                <CommentBox
                                    setComment={setComments}
                                    comment={comment}
                                    comments={comments}
                                    setComments={setComments}
                                    style={style}
                                />
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    </>
}

export default PubComments