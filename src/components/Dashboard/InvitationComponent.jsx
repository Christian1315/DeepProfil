import style from "../../assets/css/modules/InvitationComponent.module.css"
import profil from "../../assets/images/gogo.png";
import { useGlobalContext } from "../../Context";

function InvitationComponent({ invitation }) {
    const { InvitationClickHandle } = useGlobalContext()

    return (
        <>
            <div 
            className={`shadow shadow-sm rounded p-1 my-1 ${style._card}`} 
            data-bs-toggle="modal" 
            data-bs-target="#manageInvitationModal"
            onClick={()=>InvitationClickHandle(invitation)}>
                <div className={`d-flex  justify-content-between align-items-center `}>
                    <div className="d-flex justify-content-between align-items-center text-dark">
                        <img src={profil} className="rounded-circle img-fluid" width={30} alt="..." />
                        <h6 className={`d-flex justify-content-between align-items-start ${style.name} `}> <span className="">{invitation.user.name} </span>  </h6>
                    </div>
                    <span className="bg-blue badge rounded-pill">{invitation.since}</span>
                </div>
            </div>
        </>
    )
}

export default InvitationComponent