import style from "../assets/css/modules/ContactComponent.module.css"
import profil from "../assets/images/gogo.png";

function ContactComponent({ contact }) {

    return (
        <>
            <div className={`shadow shadow-sm rounded p-1 my-1 ${style._card}`}>
                <div to={'#'} className={`d-flex  justify-content-between align-items-center `}>
                    <div className="d-flex justify-content-between align-items-center text-dark">
                        <img src={profil} className="rounded-circle img-fluid" width={30} height={30} alt="..." />
                        <h6 className={`d-flex justify-content-between align-items-start ${style.name} `}> <span className="">{contact.name} </span>  </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactComponent