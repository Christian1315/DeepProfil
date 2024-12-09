import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useGlobalContext } from "../Context.jsx";

const Login = () => {
    const Context = useGlobalContext()
    const {login,loginText,connexion} = Context

    return <>
        <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <form className=" rounded shadow-lg sign-up-form">
                    <div className="mb-3 text-center">
                        <img src={logo} id="login_logo" alt="" srcSet="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email or phone</label>
                        <input type="email" autoFocus className="form-control" id="exampleInputEmail1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <Link to={"reinitialize-password-demand"} className="btn">Mot de passe oublié?</Link>
                    </div>
                    <Link to={'admin'} type="submit" className="btn btn-blue w-100" onClick={connexion}> {loginText}</Link>
                    <br />
                    <br />
                    <div className="text-center">
                        <span className="d-block">
                            Vous n'avez pas enccore un compte ? &nbsp;
                        </span>
                        <Link to={"/inscription"} className="btn btn-sm text-blue">Inscrivez-vous ici!</Link>
                    </div>
                </form>
            </div>
            <div className="col-md-1"></div>
        </div>
    </>
}

export default Login