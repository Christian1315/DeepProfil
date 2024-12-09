import { Link } from "react-router-dom";
import style from "../../assets/css/modules/ContactComponent.module.css"
import profil from "../../assets/images/gogo.png";

function FriendComponent({ friend }) {

    return (
        <>
            <Link to={`/friend-detail/${friend.id}`} className={`d-block shadow shadow-sm rounded p-1 my-1 ${style._card}`}>
                <div  className={`d-flex  justify-content-between align-items-center `}>
                    <div className="d-flex justify-content-between align-items-center text-dark">
                        <img src={profil} className="rounded-circle img-fluid" width={30} height={30} alt="..." />
                        <h6 className={`d-flex justify-content-between align-items-start ${style.name} `}> <span className="">{friend.name} </span>  </h6>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default FriendComponent