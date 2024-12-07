import style from "../assets/css/modules/PublicityComponent.module.css"
import { Link } from "react-router-dom";

function PublicityComponent({ publicity }) {

    return (
        <>
            <Link to={'#'} className={`card text-dark ${style._card}`}>
                <div className="row">
                    <div className="col-6">
                        <img src={publicity.img} className="d-block" alt="..." />
                    </div>
                    <div className={`col-6 ${style.col8}`}>
                        <h6 className={` ${style.title} `}>{publicity.title}</h6>
                        <p className={style.content}>{publicity.content.substring(0, 50)} ...</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PublicityComponent