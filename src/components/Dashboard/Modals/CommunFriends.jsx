import { Link } from "react-router-dom"
import { useGlobalContext } from "../../../Context"

const CommunFriends = () => {
    const { currentFriend } = useGlobalContext()

    return <>
        <div className="modal animate__animated animate__bounceIn" id="commundFriends" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <h6 className="modal-title fs-5" id="staticBackdropLabel">
                            <img src={currentFriend.img} width={20} height={20} className="shadow shadow-sm bordered rounded-circle" alt="" srcSet="" />  Ami(e)s communs à <small className="text-white bg-blue badge "> {currentFriend.name}</small>
                        </h6>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            currentFriend.communFriends.map((friend) => (
                                <Link to={`/friend-detail/${currentFriend.id}`} key={friend.id} onClick={location.reload} className="text-dark bg-light border rounded px-1 align-items-center list-group-item d-flex justify-content-between align-items-start my-2">
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{friend.name}</div>
                                    </div>
                                    <span className={`badge rounded-pill text-bg-secondary`}>Explorer</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CommunFriends