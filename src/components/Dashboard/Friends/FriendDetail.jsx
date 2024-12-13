import { Link, useParams } from "react-router-dom"
import style from "../../../assets/css/modules/FriendDetail.module.css"
import { useGlobalContext } from "../../../Context"
import Publications from "./FriendDetailComponents/Publications"
import Friends from "./FriendDetailComponents/Friends"
import InfoPersos from "./FriendDetailComponents/InfoPersos"

function FriendDetail() {
    const { friends, friendDetailNavigations,currentFriendDetailNavigation, HandleFriendDetailNavigationClick } = useGlobalContext()
    let { friendId } = useParams()
    const friend = friends.find((item) => item.id == friendId)

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <img src={friend.banner} className={`w-100 img-fluid rounded shadow shadow-sm ${style.banner}`} alt="" srcSet="" />
                    <img src={friend.img} className={`img-fluid rounded-circle shadow shadow-lg ${style.profil}`} alt="" srcSet="" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 px-5">
                    <div className={`d-flex justify-content-between align-items`} ><strong className={style.friendName} >{friend.name}</strong> <Link to={'/chats'} className="btn btn-sm bg_secondary text-dark"><i className="bi bi-chat-dots"></i> Message</Link></div>

                    {/* NAVIGATIONS BARRES  */}
                    <div className={style.navidationBar}>
                        {
                            friendDetailNavigations.map((item) => (
                                <Link
                                    className={`shadow shadow-sm p-1 ${item.active ? style.active + ' animate__animated animate__pulse' : 'bg-light'}`}
                                    key={item.id}
                                    onClick={() => HandleFriendDetailNavigationClick(item.id)}
                                >{item.icon} {item.text}</Link>
                            ))
                        }
                    </div>
                    {/* COMPONENTS */}
                    <div className={` ${style.navigationContent}`}>
                        { 
                            currentFriendDetailNavigation?
                            (
                                currentFriendDetailNavigation.tag=='info'?<InfoPersos/>:
                                (
                                    currentFriendDetailNavigation.tag=='pub'?<Publications/>:
                                    (
                                        currentFriendDetailNavigation.tag=='friend'?<Friends/>:<Friends/>
                                    )
                                )
                            ):
                            <InfoPersos/>
                        }
                    </div>
                    <p className="text-center mt-5">
                        <Link to={'/friends'}><i className="bi bi-arrow-left-circle"></i> Retour</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default FriendDetail