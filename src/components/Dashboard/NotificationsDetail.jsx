import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../../Context"
import style from "../../assets/css/modules/NotificationDetail.module.css"

const NotificationsDetail = () => {

    const { notificationId } = useParams()
    const { notifications } = useGlobalContext()
    const notification = notifications.find((item) => item.id == parseInt(notificationId))

    return <>
        <div className="row">
            <div className="col-md-12 py-2">
                <h6 className={`text-left ${style.title}`}> {notification.title} </h6>
                <p className=""> {notification.content} </p>

                <Link className="text-right" to={'/notifications'}><i className="bi bi-arrow-left-circle"></i> Retour</Link>
            </div>
        </div>
    </>
}


export default NotificationsDetail