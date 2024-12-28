import style from "../../../assets/css/modules/PublicationLikes.module.css"
import { useGlobalContext } from "../../../Context"
import EmojiPicker from 'emoji-picker-react';

const PublicationLikes = () => {
    const { currentFriend, currentPub } = useGlobalContext()

    return <>
        <div className="modal animate__animated animate__bounceIn" id="PublicationLikes" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <EmojiPicker/>
                        {
                            currentPub && (
                                currentPub.likes.map((like, index) => (
                                    (
                                        like &&
                                        <div className={`d-flex justify-content-between ${style.likeRow}`}
                                            key={index}
                                        >
                                            <p className=""><img src={currentFriend.img} width={20} height={20} className="shadow shadow-sm bordered rounded-circle" alt="" srcSet="" />  {like && like.liker.name}</p> <button className="btn btn-sm text-white bg-blue badge "> Explorer</button>
                                        </div>
                                    )
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PublicationLikes