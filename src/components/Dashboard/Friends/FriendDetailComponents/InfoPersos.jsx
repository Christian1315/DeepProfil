import { Link } from "react-router-dom";

const InfoPersos = () => {

    return <>
        <div className={`animate__animated animate__bounceIn`}>
            <div className="row">
                <div className="col-sm-4">
                    <address>
                        <address>
                            Phone: <br />
                            Email:
                        </address>
                    </address>
                </div>
                <div className="col-sm-4">
                    <address>
                        Téléphone: <br />
                        E-mail:
                    </address>
                </div>
            </div>
        </div>
    </>
}

export default InfoPersos