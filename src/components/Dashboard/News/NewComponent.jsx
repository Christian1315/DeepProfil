import style from "../../../assets/css/modules/NewComponent.module.css"
import me from "../../../assets/images/me.jpg"

const NewComponent = () => {

    return <>
        <div className={`card ${style._card}`}>
            <div className={`card-header d-flex justify-content-between align-items-center ${style.cardHeader}`}>
                <div className="align-items-center">
                    <img src={me} className={`img-fluid shadow rounded-circle ${style.profil}`} width={30} height={30} alt="" srcSet="" />
                    <strong className="mx-2">GOGO Christian</strong>
                    <span className="badge bg-blue text-white">8 Mai 2024</span>
                </div>
                <span className={`text-secondary ${style.action}`}>...</span>
            </div>
            <div className="card-body text-justify">
                {/* TEXT */}
                <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est officia dolores hic saepe vel doloribus veniam! Error ipsa, quasi nostrum ut assumenda porro qui libero optio necessitatibus magni! Atque, eos.</p>
                {/* IMAGES */}
                <div className="row">
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                    <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div>
                    {/* <div className="col-3">
                        <img src={me} className="img img-fluid rounded shadow" alt="" srcSet="" />
                    </div> */}
                </div>

                {/* VIDEOS */}
                <div className="row">
                    <div className="col-3">
                        
                    </div>
                </div>
            </div>

            <div className="card-footer">
                Card footer
            </div>
        </div>
    </>
}

export default NewComponent