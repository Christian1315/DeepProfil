import style from "../../../../assets/css/modules/PubComments.module.css"
import PubComments from "./PubComments"
import me from "../../../../assets/images/me.jpg"
import { useGlobalContext } from "../../../../Context"
import { useState } from "react"

const Publications = () => {
    const { publications,currentPub,setCurrentPub } = useGlobalContext()
    const [ showPubContent, setShowPubContent] = useState(false)

    const HandleShowPubContent = (publication) => {
        setShowPubContent(!showPubContent)
        // LA PUB ACTUELLE
        setCurrentPub(publication)
        // console.log(currentPub)
        console.log(currentPub)
    }

    return <>
        <div className={`animate__animated animate__headShake`}>
            {
                publications.map((publication) => (
                    <div key={publication.id} className={`card ${style._card}`}>
                        <div className={`card-header d-flex justify-content-between align-items-center ${style.cardHeader}`}>
                            <div className="align-items-center">
                                <img src={me} className={`img-fluid shadow rounded-circle ${style.profil}`} width={30} height={30} alt="" srcSet="" />
                                <strong className="mx-2">{publication.author.name}</strong>
                                <span className="badge bg-blue text-white">{publication.date}</span>
                            </div>
                            <span className={`text-secondary ${style.action}`} onClick={()=> HandleShowPubContent(publication)}>{!showPubContent?<i className="bi bi-eye"></i>:<i className="bi bi-eye-slash"></i>}</span>
                        </div>

                        {
                            showPubContent &&
                            (
                                <>
                                    <div className="card-body text-justify">
                                        {/* TEXT */}
                                        <p className="">{publication.content}</p>
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
                                        </div>

                                        {/* VIDEOS */}
                                        <div className="row">
                                            <div className="col-3">
                                            </div>
                                        </div>
                                    </div>

                                    <PubComments pub={publication} />
                                </>
                            )
                        }
                    </div>
                ))
            }
        </div>
    </>
}

export default Publications