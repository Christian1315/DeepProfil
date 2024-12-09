import profil from "../../assets/images/gogo.png";
import me from "../../assets/images/me.jpg";

const Friends = () => {

    return <>
        <div class="row">
            <div className="col-md-3">
                <div class="card">
                    <img src={me} className="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 className="text-left">Card title</h5>
                            <p className="text-left">
                                <img src={profil} width={20} className="shadow shadow-sm bordered rounded-circle" alt="" srcSet="" /> <span className="text-secondary"> 32 ami(e)s en communs</span>
                            </p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>
        </div>
    </>
}

export default Friends