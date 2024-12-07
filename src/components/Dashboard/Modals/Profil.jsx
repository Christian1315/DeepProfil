import { Link } from "react-router-dom"
import profil from "../../../assets/images/gogo.png";
import { useState } from "react";
import { useGlobalContext } from "../../../Context";

import style from "../../../assets/css/modules/Profil.module.css"

const Profil = () => {

    const Context = useGlobalContext()
    const {zoom,zoomTitle,zoomProfilImg} = Context

    return <>
        <div className="modal animate__animated animate__bounceIn" id="profilModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            <img
                                src={profil}
                                width={30}
                                className={`shadow shadow-sm img-fluid dropdown-toggle ${zoom?style.profilImgZoom:'rounded-circle mx-2'}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                type="button"
                                title={zoomTitle}

                                onClick={zoomProfilImg}
                            />
                            Profil
                        </h1>

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <Link to={"/"} className="btn w-100 btn-sm btn-light" onClick={location.reload} ><i className="bi bi-power mx-2"></i> Deconnexion</Link>
                        <Link to={"/my-account"} className="btn w-100 btn-sm btn-light mt-1"><i className="bi bi-gear mx-2"></i> Gérer mon compte</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Profil