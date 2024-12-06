import { Link } from "react-router-dom"
import { useGlobalContext } from "../../Context"
import style from "../../assets/css/modules/Notification.module.css"
import Pagination from "../Pagination"

const Notifications = () => {

    const { notifications, HandleNotificationClick } = useGlobalContext()
    const itemsBlock = (items) => (
        <ol className="list-group list-group-numbered">
            {
                items.map((item) => (
                    <Link to={`/notification-detail/${item.id}`} className="text-dark list-group-item d-flex justify-content-between align-items-start"
                        id={style.notificationLink}
                        key={item.id}
                        onClick={() => HandleNotificationClick(item.id)}
                    >
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.title}</div>
                            {item.content.substring(0, 50)} ...
                        </div>
                        <span className={`badge rounded-pill ${item.statut == 'new' ? 'bg-blue' : 'text-bg-secondary'}`}>{item.statut == 'new' ? 'nouvelle' : 'ancienne'}</span>
                    </Link>
                ))
            }
        </ol>
    )

    return <>
        <div className="text-center">
            <Pagination
                items={notifications}
                itemsOnPage={5}
                itemsBlock={itemsBlock} />
        </div>
    </>
}

export default Notifications