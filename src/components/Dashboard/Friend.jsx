import style from "../../assets/css/modules/Friend.module.css"
import { Link } from "react-router-dom";

const Friend = ({friend}) => {

    return <>
        <div className={`card shadow shadow-sm m-2 ${style._card}`}>
            <img src={friend.img} className={`card-img-top ${style.profilImg}`} alt="..." />
            <div className="card-body">
                <h5 className={style.name}>{friend.name.substring(0, 10)} ..</h5>
                <p className="text-left" style={{cursor:'pointer'}} data-bs-toggle="modal" data-bs-target="#commundFriends">
                    <img src={friend.img} width={20} height={20} className={` shadow shadow-sm bordered rounded-circle ${style.profilCommun}`} alt="" srcSet="" /> <span className={`text-secondary ${style.friendsNbr}`}> <strong className="text-blue"> {friend.communFriends} </strong>ami(e)s communs</span>
                </p>
                <Link to={`/friend-detail/${friend.id}`} className='btn btn-sm shadow shadow-sm w-100' >Explorer</Link>
            </div>
        </div>
    </>
}

export default Friend