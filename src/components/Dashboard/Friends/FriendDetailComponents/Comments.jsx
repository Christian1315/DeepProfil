import { useState } from "react"
import CommentBox from "./CommentBox"
import style from "../../../../assets/css/modules/Comments.module.css"
import me from "../../../../assets/images/me.jpg"

const Comments = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('')
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
            ]
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
            ]
        }
    ])

    const HandleComment = (e)=>{
        setComment(e.target.value)
    }

    const MakeComment = () => {
        setShowSearch(!showSearch)
    }
    const SubmitComment = () => {
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
        let newComments = [data,...comments]

        setComments(newComments)
        setShowComments(true)
        setComment('')
    }

    return <>
        <div className={`card ${style._card}`}>
            <div className={`card-header d-flex justify-content-between align-items-center ${style.cardHeader}`}>
                <div className="align-items-center">
                    <img src={me} className={`img-fluid shadow rounded-circle ${style.profil}`} width={30} height={30} alt="" srcSet="" />
                    <strong className="mx-2">GOGO Christian</strong>
                    <span className="badge bg-blue text-white">8 Mai 2024</span>
                </div>
                <span className={`text-secondary ${style.action}`}>...</span>
            </div>
            <div className="card-body text-justify">
                {/* TEXT */}
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est officia dolores hic saepe vel doloribus veniam! Error ipsa, quasi nostrum ut assumenda porro qui libero optio necessitatibus magni! Atque, eos.</p>
                {/* IMAGES */}
                <div className="row">
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                </div>

                {/* VIDEOS */}
                <div className="row">
                    <div className="col-3">
                    </div>
                </div>
            </div>

            <div className="card-footer">
                <div className={style.reactPub}>
                    <button className={`btn btn-sm bg-blue rounded-circle ${style.reactLikeBtn}`}><i className="bi bi-hand-thumbs-up"></i></button>
                    {
                        showSearch &&
                        <div className="input-group mx-5">
                            <input type="text" placeholder="Laisser un commentaire, puis tapez entrer .." onChange={(e)=>HandleComment(e)} className={`form-control w-50 mb-2 ${style.searchInput}`} />
                            <span className=""><i className="bi bi-send shadow p-1 rounded" onClick={SubmitComment}></i></span>
                        </div>
                    }

                    <button className={`btn btn-sm bg-blue rounded-circle ${style.reactLikeBtn}`} onClick={() => setShowComments(!showComments)}><i className="bi bi-chat-dots"></i></button>
                </div>

                <div className={style.reactAction}>
                    <button className={`btn btn-sm bg-white shadow shadow-sm `}><i className="bi bi-hand-thumbs-up"></i> J'aime</button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm `} onClick={MakeComment}><i className="bi bi-chat-dots"></i>  {showSearch ? 'Fermer le commentaire' : 'Commenter'} </button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm`}><i className="bi bi-send"></i> Envoyer</button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm`}><i className="bi bi-share"></i> Partager</button>
                </div>

                {
                    showComments &&
                    <div className={`commentBlok ${style.commentBlok}`}>
                        {
                            comments.map((comment,index) => (
                                <div 
                                className={style.commentRow}
                                key={index}>
                                    <CommentBox
                                        setComment = {setComments}
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
        </div>
    </>
}

export default Comments