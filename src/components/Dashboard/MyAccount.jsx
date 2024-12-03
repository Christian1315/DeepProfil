import { Link } from "react-router-dom"
import style from "../../assets/css/modules/MyAccount.module.css"
import profil from "../../assets/images/gogo.png";

const MyAccount = () => {

    return <>
        <p className="text-center">
            <label htmlFor="avatar">
                <img src={profil} width={80} className={`img-fluid rounded-circle shadow ` + style.profilImg} title="Cliquez pour uploader" alt="" srcSet="" />
            </label>
        </p>
        <div className="row">
            <div className="col-12">
                <form className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label">Nom</label>
                                <input type="text" autoFocus className="form-control" id="exampleInputEmail" placeholder="Ex: GOGO" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Ex: Christian" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">Groupe de district</label>
                                <select name="group" className="form-control" id="">
                                    <option value="">Groupe 1</option>
                                    <option value="">Groupe 2</option>
                                    <option value="">Groupe 3</option>
                                    <option value="">Groupe 4</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail3" className="form-label">District</label>
                                <select name="group" className="form-control" id="exampleInputEmail3">
                                    <option value="">District 1</option>
                                    <option value="">District 2</option>
                                    <option value="">District 3</option>
                                    <option value="">District 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail4" placeholder="Ex: gogochristian009@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail5" className="form-label">Phone</label>
                                <input type="email" className="form-control" id="exampleInputEmail5" placeholder="Ex: 56854397" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword6" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword6" placeholder="Ex: mypassword" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword7" className="form-label">Confirmez votre mot de passe</label>
                                <input type="password" className="form-control" placeholder="Ex: mypassword" id="exampleInputPassword7" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="file" name="" hidden className="form-control" id="avatar" />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-12"><Link to={"/"} className={`btn btn-sm bg_secondary text-blue text-uppercase text-bold w-100 ` + style.editButton} >Editer</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default MyAccount