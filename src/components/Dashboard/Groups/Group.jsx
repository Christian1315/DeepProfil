import { Link } from "react-router-dom";
import style from "../../../assets/css/modules/Friend.module.css"
import me from "../../../assets/images/me.jpg";
import img1 from "../../../assets/images/pub1.jpg";

const Group = () => {

    return <>
        <div className={`card shadow text-center bg-light shadow-sm m-2 ${style._card}`} style={{ cursor: 'pointer' }}>
            <div className="text-center">
                <img src={me} className={`rounded-circle`} width={50} height={50} alt="..." />
            </div>
            <div className="card-body">
                <h5 className={style.name}>Groupe 1</h5>
                <p className="text-left" data-bs-toggle="modal" data-bs-target="#commundFriends">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quam veniam corrupti 
                </p>
                <Link className='btn btn-sm shadow shadow-sm w-100' >Visiter</Link>
            </div>
        </div>
    </>
}

export default Group