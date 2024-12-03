import { useGlobalContext } from "../../Context"
import style from "../../assets/css/modules/Notification.module.css"

const Notifications = () => {

    const { notifications, HandleNotificationClick } = useGlobalContext()

    return <>
        <p className="text-center">
            <ol className="list-group list-group-numbered">
                {
                    notifications.map((item) => (
                        <li className="list-group-item d-flex justify-content-between align-items-start"
                            id={style.notificationLink}
                            key={item.id}
                            onClick={()=>HandleNotificationClick(item.id)}
                            >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{item.title}</div>
                                {item.content}
                            </div>
                            <span className={`badge rounded-pill ${item.statut == 'new' ? 'text-bg-primary' : 'text-bg-secondary'}`}>{item.statut=='new'?'nouvelle':'ancienne'}</span>
                        </li>
                    ))
                }
            </ol>
        </p>
    </>
}

export default Notifications