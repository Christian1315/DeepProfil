import { Link } from "react-router-dom";

const InfoPersos = () => {

    return <>
        <div className={`animate__animated animate__headShake`}>
            <div className="row">
                <div className="col-sm-6">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <span className="badge bg-blue text-white w-100 py-1"><b><i className="bi bi-person-exclamation text-white"></i> Informations socialles</b> </span> </li>
                        <li className="list-group-item"><i className="bi bi-phone-flip"></i> <b>Téléphone:</b> <a href="tel:+2290156854397" rel="noopener noreferrer">+2290156854397</a> </li>
                        <li className="list-group-item"><i className="bi bi-textarea-resize"></i> <b>Denomination:</b> COSE</li>
                        <li className="list-group-item"><i className="bi bi-heart"></i> <b>Marié.e: </b><i className="bi bi-x-circle text-danger"></i></li>
                        <li className="list-group-item"><i className="bi bi-person-heart"></i> <b>Fiancé.e: </b><i className="bi bi-check-circle text-blue"></i></li>
                        <li className="list-group-item"><i className="bi bi-people"></i> <b>Cheminant.e: </b><i className="bi bi-check-circle text-blue"></i></li>
                        <li className="list-group-item"><i className="bi bi-person"></i> <b>Célibataire(Rien): </b><i className="bi bi-check-circle text-blue"></i></li>
                        <li className="list-group-item"><i className="bi bi-pin-map"></i> <b>Pays:</b> Bénin</li>
                        <li className="list-group-item"><i className="bi bi-geo-alt"></i> <b>Quartier:</b> Togoudo</li>
                    </ul>
                </div>
                <div className="col-sm-6">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <span className="badge bg-blue text-white w-100 py-1"><b><i className="bi bi-stars text-white"></i> Compétences</b> </span> </li>
                        <li className="list-group-item"><b>Competence 1:</b></li>
                        <li className="list-group-item"><b>Competence 2:</b></li>
                        <li className="list-group-item"><b>Competence 3:</b></li>
                        <li className="list-group-item"><b>Competence 4:</b></li>
                        <li className="list-group-item"><b>Competence 5:</b></li>
                        <li className="list-group-item"><b>Competence 6:</b></li>
                        <li className="list-group-item"><b>Competence 7:</b></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}

export default InfoPersos