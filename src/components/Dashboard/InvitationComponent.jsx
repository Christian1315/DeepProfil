import style from "../../assets/css/modules/InvitationComponent.module.css"
import profil from "../../assets/images/gogo.png";

function InvitationComponent({ invitation }) {
    return (
        <>
            <div className={`shadow shadow-sm rounded p-1 my-1 ${style._card}`}>
                <div className={`d-flex  justify-content-between align-items-center `}>
                    <div className="d-flex justify-content-between align-items-center text-dark">
                        <img src={profil} className="rounded-circle img-fluid" width={30} alt="..." />
                        <h6 className={`d-flex justify-content-between align-items-start ${style.name} `}> <span className="">{invitation.user.name} </span>  </h6>
                    </div>
                    <span className="bg-blue badge rounded-pill">{invitation.since}</span>
                </div>
                <div className="d-flex justify-content-center">
                    <i className="bi bi-check-circle text-success mx-2" title="Valider l'invitation"></i>  
                    <i className="bi bi-check-circle text-danger" title="Rejeter l'invitation"></i>
                </div>
            </div>
        </>
    )
}

export default InvitationComponent