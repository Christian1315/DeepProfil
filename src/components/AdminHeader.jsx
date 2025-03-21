import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import profil from "../assets/images/gogo.png";
import { useGlobalContext } from "../Context";

const AdminHeader = () => {
    const { notifications } = useGlobalContext()
    const newNotifications = notifications.filter((item) => item.statut == 'new')

    return <>
        <div className="row shadow-sm" id="header">
            <div className="col-md-12   px-0 mx-0">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid" style={{ justifyContent: "space-between" }}>
                        <a
                            className="btn d-block d-md-none"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"
                        >
                            <span
                                className={`navbar-toggler-icon d-block d-md-none shadow shadow-sm rounded-circle`}
                                style={{ width: 30, height: 30, fontSize: 10 }}
                            />
                        </a>
                        <Link to={'/admin'} >
                            <img src={logo} width={"50px"} className="d-none d-md-block" alt="" srcSet="" />
                        </Link>
                        <input type="button" name="" value="Recherche ..." className="form-control w-50 searchBar" data-bs-toggle="modal" data-bs-target="#searchModal" />
                        <div id="_navbarSupportedContent" style={{ justifyContent: "space-between" }}>
                            <Link to={"/notifications"} className="btn btn-sm rounded-circle p-1 px-1 mx-2 shadow shadow-sm text-blue"><i className="bi bi-bell"></i> <small className="text-danger bg-light" style={{ position: "absolute", marginLeft: -8, marginTop: 5 }}>0{newNotifications.length}</small> </Link>

                            <a href="#" className="" data-bs-toggle="modal" data-bs-target="#profilModal">
                                <img
                                    src={profil}
                                    width={30}
                                    className="rounded-circle shadow shadow-sm img-fluid dropdown-toggle"
                                    type="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                />
                            </a>

                            {/*  */}
                            <a
                                className={`btn`}
                                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                            >
                                <span
                                    className={`navbar-toggler-icon d-block d-md-none shadow shadow-sm rounded-circle`}
                                    style={{ width: 30, height: 30, fontSize: 10 }}
                                />
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </>
}

export default AdminHeader