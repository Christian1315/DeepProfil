import { ChatItem, MessageBox } from "react-chat-elements"
import style from "../../../assets/css/modules/NewComponent.module.css"
import me from "../../../assets/images/me.jpg"
import { useState } from "react"

const NewComponent = () => {

    const [showSearch, setShowSearch] = useState(false)
    const [showComments, setShowComments] = useState(false)
    const [comment, setComment] = useState('')

    const HandleCommentClick = () => {
        setShowSearch(!showSearch)
    }
    const HandleCommentValide = (e) => {
        setComment(e.target.value)
        setShowComments(true)
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
                        <div class="input-group mx-5">
                            <input type="text" placeholder="Laisser un commentaire, puis tapez entrer .." onChange={(e)=>setComment(e.target.value)} className={`form-control w-50 mb-2 ${style.searchInput}`} />
                            <span className=""><i className="bi bi-send shadow p-1 rounded" onClick={(e) => HandleCommentValide(e)}></i></span>
                        </div>
                    }

                    <button className={`btn btn-sm bg-blue rounded-circle ${style.reactLikeBtn}`} onClick={()=>setShowComments(!showComments)}><i className="bi bi-chat-dots"></i></button>
                </div>

                <div className={style.reactAction}>
                    <button className={`btn btn-sm bg-white shadow shadow-sm `}><i className="bi bi-hand-thumbs-up"></i> J'aime</button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm `} onClick={HandleCommentClick}><i className="bi bi-chat-dots"></i>  {showSearch ? 'Fermer le commentaire' : 'Commenter'} </button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm`}><i className="bi bi-send"></i> Envoyer</button>
                    <button className={`btn btn-sm bg-white shadow shadow-sm`}><i className="bi bi-share"></i> Partager</button>
                </div>

                {
                    showComments &&
                    <div className={`commentBlok ${style.commentBlok}`}>
                        <ChatItem
                            avatar={me}
                            alt={'Reactjs'}
                            title={'Christ'}
                            subtitle={'What are you doing?'}
                            date={new Date()}
                        // unread={3}
                        />
                        <MessageBox
                            reply={{
                                photoURL: { me },
                                title: 'elit magna',
                                titleColor: '#8717ae',
                                message: 'Aliqua amet incididunt id nostrud',
                            }}
                            onReplyMessageClick={() => console.log('reply clicked!')}
                            position={'right'}
                            type={'text'}
                            text={'Tempor duis do voluptate enim duis velit veniam aute ullamco dolore duis irure.'}
                        />
                    </div>
                }
            </div>
        </div>
    </>
}

export default NewComponent