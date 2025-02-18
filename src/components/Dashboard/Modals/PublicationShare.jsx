import { Link } from "react-router-dom";
import style from "../../../assets/css/modules/PublicationShare.module.css"
import { useGlobalContext } from "../../../Context"
import { useState } from "react";

const PublicationShare = () => {
    const { friends } = useGlobalContext()

    let _news = friends.map((friend) => ({ ...friend, selected: false }))

    const [friendsToSelects, setFriendsToSelect] = useState(_news)

    const SelectFriend = (id) => {
        let newFriendsToSelects = friendsToSelects.map((friend) => (
            friend.id == parseInt(id) ? { ...friend, selected: true } : friend
        ))

        setFriendsToSelect(newFriendsToSelects)
    }

    const RetrieveFriend = (id) => {
        let newFriendsToSelects = friendsToSelects.map((friend) => (
            friend.id == parseInt(id) ? { ...friend, selected: false } : friend
        ))
        setFriendsToSelect(newFriendsToSelects)
    }

    return <>
        <div className="modal animate__animated animate__bounceIn" id="PublicationShare" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            friendsToSelects.map((friend, index) => (
                                (
                                    <Link
                                        key={index}
                                        className={`p-1 text-dark ${friend.selected ? style.selectedToShare : 'bg-light'}  border rounded align-items-center list-group-item d-flex justify-content-between align-items-start my-2`}
                                        onClick={() => (friend.selected ? RetrieveFriend(friend.id) : SelectFriend(friend.id))}
                                    >
                                        <div className="ms-2 me-auto">
                                            <img src={friend.img} width={20} height={20} className="shadow shadow-sm bordered rounded-circle" alt="" srcSet="" /> <strong className={friend.selected ? `text-white` : ''}>{friend.name} </strong>
                                        </div>
                                        {
                                            friend.selected ?
                                                <span className={`badge rounded-pill bg-blue`}><i className="bi bi-dash-circle"></i> Retirer </span> :
                                                <span className={`badge rounded-pill bg-blue`}><i className="bi bi-plus-circle"></i> Selectionner </span>
                                        }
                                    </Link>
                                )
                            ))
                        }
                        {
                            friendsToSelects.filter((friend) => friend.selected == true).length > 0 &&
                            <button className="btn btn-sm btn-secondary text-uppercase w-100">({friendsToSelects.filter((friend) => friend.selected == true).length}) Partager</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default PublicationShare