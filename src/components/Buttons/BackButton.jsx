import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function BackButton({route}) {
    return <>
        <Link to={route} className="btn btn-sm btn-light">
            <BsArrowLeftCircle /> &nbsp; <span className="text-dark">Retour</span>
        </Link>
    </>
}

export default BackButton