import { Link } from "react-router-dom";
import style from "../../../assets/css/modules/PublicationLikes.module.css"
import { useGlobalContext } from "../../../Context"

const PublicationLikes = () => {
    const { currentFriend, currentPub,setCurrentFriend } = useGlobalContext()

    return <>
        <div className="modal animate__animated animate__bounceIn" id="PublicationLikes" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            currentPub && (
                                currentPub.likes.map((like, index) => (
                                    (
                                        <Link onClick={() => (setCurrentFriend(friend) && window.reload())} to={`/friend-detail`} key={index} className="p-1 align-items-center text-dark bg-light border rounded px-1 align-items-center list-group-item d-flex justify-content-between align-items-start my-2">
                                            <div className="ms-2 me-auto">
                                                <img src={currentFriend.img} width={20} height={20} className="shadow shadow-sm bordered rounded-circle" alt="" srcSet="" />  {like && like.liker.name}
                                            </div>
                                            <span className={`badge rounded-pill bg-blue`}> Explorer</span>
                                        </Link>
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