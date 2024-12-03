import { useGlobalContext } from "../../Context"
import style from "../../assets/css/modules/NotificationDeatil.module.css"

const NotificationsDetail = ({ notification }) => {

    return <>
        <div className="row">
            <div className="col-md-12">
                <h6 className="text-left">{notification.title}</h6>
                <p className=""> {item.content} </p>
            </div>
        </div>
    </>
}


export default NotificationsDetail