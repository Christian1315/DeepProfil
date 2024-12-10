import { Link } from "react-router-dom"
import { useGlobalContext } from "../../../Context"

const CommunFriends = () => {
    const { currentFriend} = useGlobalContext()

    return <>
        <div className="modal animate__animated animate__bounceIn" id="commundFriends" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            Ami(e)s communs à <span className="text-blue"> {currentFriend.name}</span> 
                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <Link to={''} className="text-dark list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Ami 1</div>
                        </div>
                        <span className={`badge rounded-pill text-bg-secondary`}>Explorer</span>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CommunFriends