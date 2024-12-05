import style from "../assets/css/modules/PublicityComponent.module.css"
import { Link } from "react-router-dom";

function PublicityComponent({publicity}) {

    return (
        <>
            <Link to={'#'} className={`d-flex d-block text-dark ${style._card}`}>
                <img src={publicity.img} className="d-block" alt="..." />
                <h6 className={`text-left ${style.title} `}>{publicity.title}</h6>
            </Link>
        </>
    )
}

export default PublicityComponent