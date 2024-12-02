import { Link } from "react-router-dom";
import BackButton from "../../components/Buttons/BackButton"
import { useState } from "react";

function ReinitializePassword() {
    const [reinitialisation, setReinitialisation] = useState(false)
    const [validationText, setValidationText] = useState("Valider")
    const Validation = () => {
        setReinitialisation(true)
        setValidationText("Validation en cours ...")
    }

    return <>
        <div className="row" id="home-content">
            <div className="col-md-3" />
            <div className="col-md-6">
                <p className="text-center">
                    <BackButton />
                </p>
                <div className="">
                    <form className="home-form rounded shadow-lg sign-up-form">
                        <h3 className="home-title text-center">Valider la réinitialisation</h3>
                        <p className="">
                            Entrez le <b>Code</b> qui vous a été envoyé par mail ainsi que votre
                            nouveau mot de passe, puis finaliser la réinitialisation{" "}
                        </p>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        name="pass_code"
                                        className="form-control"
                                        placeholder="Code reçu par mail ...."
                                        autoFocus
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="new_password"
                                        className="form-control"
                                        placeholder="Nouveau mot de passe ...."
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="password"
                                        name="new_password_confirm"
                                        className="form-control"
                                        placeholder="Confirmer votre nouveau mot de passe ...."
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-12">
                                <Link to={"/"} className="btn btn-blue w-100" onClick={Validation}>{validationText}</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-md-3" />
        </div>
    </>
}

export default ReinitializePassword