import style from "../../assets/css/modules/PublicityComponent.module.css"
import { Link } from "react-router-dom";

function PublicityComponent({ publicity }) {

    return (
        <>
            <div style={{ backgroundImage: publicity.img }} className={`card text-dark ${style._card}`}>
                <div className="row">
                    <div className="col-4">
                        <img src={publicity.img} className="d-block" alt="..." />
                    </div>
                    <div className={`col-8 ${style.col8}`}>
                        <h6 className={` ${style.title} `}>{publicity.title}</h6>
                        <p className={style.content}>{publicity.content.substring(0, 10)} ...</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default PublicityComponent