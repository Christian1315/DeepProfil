import style from "../assets/css/modules/InvitationComponent.module.css"
import profil from "../assets/images/gogo.png";

import { Link } from "react-router-dom";

function InvitationComponent({ invitation }) {
    return (
        <>
            <Link to={'#'} className={`d-flex d-block text-dark ${style._card}`}>
                <img src={profil} className="rounded-circle img-fluid" width={30} alt="..." />
                <h6 className={`text-left ${style.name} `}> <span className="">{invitation.user.name} </span>    <span className="text-secondary">{invitation.since}</span> </h6>
            </Link>
        </>
    )
}

export default InvitationComponent