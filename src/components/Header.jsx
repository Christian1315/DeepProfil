import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
    return <>
        {/* <div className="container-fluid"> */}
            <div class="row shadow-lg" id="header">
                <div class="col-md-12   px-0 mx-0">
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <Link class="navbar-brand" to="/">
                                <img src={logo} class="img-fluid logo" alt="" srcset="" />
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        {/* </div> */}
    </>
}

export default Header