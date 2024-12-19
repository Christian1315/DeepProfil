import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../../Context"
import style from "../../assets/css/modules/NotificationDetail.module.css"
import BackButton from "../Buttons/BackButton"

const NotificationsDetail = () => {

    const { notificationId } = useParams()
    const { notifications } = useGlobalContext()
    const notification = notifications.find((item) => item.id == parseInt(notificationId))

    return <>
        <div className="row">
            <div className="col-md-12 py-2">
                <h6 className={`text-left ${style.title}`}> {notification.title} </h6>
                <p className=""> {notification.content} </p>
                <p className="text-center mt-5">
                    <BackButton route={'/notifications'} />
                </p>
            </div>
        </div>
    </>
}


export default NotificationsDetail