import { Link } from "react-router-dom"
import style from "../../assets/css/modules/MyAccount.module.css"
import profil from "../../assets/images/gogo.png";

const MyAccount = () => {

    return <>
        <p className="text-center">
            <label htmlFor="avatar">
                <img src={profil} width={80} className={`img-fluid rounded-circle shadow ` + style.profilImg} title="Cliquez pour uploader" alt="" srcset="" />
            </label>
        </p>
        <div className="row">
            <div className="col-12">
                <form className="">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Nom</label>
                                <input type="text" autoFocus className="form-control" id="exampleInputEmail1" placeholder="Ex: GOGO" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Prénom</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Ex: Christian" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Groupe de district</label>
                                <select name="group" className="form-control" id="">
                                    <option value="">Groupe 1</option>
                                    <option value="">Groupe 2</option>
                                    <option value="">Groupe 3</option>
                                    <option value="">Groupe 4</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">District</label>
                                <select name="group" className="form-control" id="">
                                    <option value="">District 1</option>
                                    <option value="">District 2</option>
                                    <option value="">District 3</option>
                                    <option value="">District 4</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Email</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ex: gogochristian009@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Phone</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ex: 56854397" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Mot de passe</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Ex: mypassword" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Confirmez votre mot de passe</label>
                                <input type="password" className="form-control" placeholder="Ex: mypassword" id="exampleInputPassword1" />
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