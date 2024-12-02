import { Link } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton"
import { useState } from "react";

function DemandReinitializePassword() {
    const [demand, setDemand] = useState(false)
    const [demandText,setDemandText] = useState("Envoyer")
    const makeDemand = () => {
        setDemand(true)
        setDemandText("Demande en cours ...")                          
    }

    return <>
        <div className="row" id="home-content">
            <div className="col-md-3" />
            <div className="col-md-6">
                <div className="">
                    <p className="text-center">
                        <BackButton />
                    </p>
                    <form className="home-form rounded shadow-lg sign-up-form">
                        <h3 className="home-title text-center">Demande de réinitialisation</h3>
                        <p className="">
                            Entrez le mail utilisé lors de la création du compte, pour éffectuer
                            une demande de réinitialisation de votre compte
                        </p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input
                                    autoFocus
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Votre adresse mail ...."
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12">
                                <Link to={"/reinitialize-password"} className="btn btn-blue w-100" onClick={makeDemand}>{demandText}</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-3" />
        </div>
    </>
}

export default DemandReinitializePassword