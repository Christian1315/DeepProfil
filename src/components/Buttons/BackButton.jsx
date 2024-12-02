import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackButton() {
    return <>
        <Link to={"/"} className="btn btn-sm btn-light">
            <BsArrowLeftCircle /> &nbsp; <span className="text-dark">Retour</span>
        </Link>
    </>
}

export default BackButton