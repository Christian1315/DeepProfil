import BackButton from "./Buttons/BackButton"
import logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";


function Inscription() {
    const [inscription, setInscription] = useState(false)
    const [inscriptionText, setInscriptionText] = useState("S'inscrire")
    const makeInscription = () => {
        setInscription(true)
        setInscriptionText("Inscription en cours ...")
    }

    return (
        <>
            <div className="row" id="home-content">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <p className="text-center">
                        <BackButton />
                    </p>
                    <form className="home-form rounded shadow-lg sign-up-form">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center mb-3">
                                    <img src={logo} id="login_logo" alt="" srcSet="" />
                                </div>
                                <h3 className=" text-center">Inscrivez-vous ici!</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                                    <input type="text" autoFocus className="form-control" id="exampleInputEmail1" placeholder="Ex: GOGO" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Prénom</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Ex: Christian" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="socialStatus" className="form-label">Status social</label>
                                    <select name="group" className="form-control" id="socialStatus">
                                        <option value="">Marié.e</option>
                                        <option value="">Fiancé.e</option>
                                        <option value="">Cheminant.e</option>
                                        <option value="">Célibataire(Rien)</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="country" className="form-label">Pays</label>
                                    <input type="text" className="form-control" id="country" placeholder="Bénin .." />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ex: gogochristian009@gmail.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ex: 56854397" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="******" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Confirmez votre mot de passe</label>
                                    <input type="password" className="form-control" placeholder="******" id="exampleInputPassword1" />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12"><Link to={"/"} type="submit" className="btn btn-blue w-100" onClick={makeInscription}>{inscriptionText}</Link>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </>
    )
}

export default Inscription