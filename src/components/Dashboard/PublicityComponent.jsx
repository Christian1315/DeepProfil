import style from "../../assets/css/modules/PublicityComponent.module.css"
import { Link } from "react-router-dom";

function PublicityComponent({ publicity }) {

    return (
        <>
            <div style={{ backgroundImage: publicity.img }} className={`card shadow shadow-lg text-dark ${style._card}`}>
                <img src={publicity.img} className="d-block" alt="..." />
                <div className={`card-body`}>
                    <h6 className={` ${style.title} `}>{publicity.title}</h6>
                    <p className={style.content}>{publicity.content.substring(0, 50)} ...</p>
                </div>
            </div>
        </>
    )
}

export default PublicityComponent