import SideBar from "../components/SideBar"
import AdminHeader from "../components/AdminHeader"
import Search from "../components/Dashboard/Modals/Search";
import Profil from "../components/Dashboard/Modals/Profil";

import style from "../assets/css/modules/AdminLayout.module.css"

import img1 from "../assets/images/pub1.jpg";

function AdminLayout({ component, icon, title }) {

    return (
        <>
            <AdminHeader />
            <SideBar />
            <div className="row" id="admin-content">
                <div className="col-md-3 shadow shadow-sm roundered p-3 d-sm-none d-xs-none d-md-block">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`bg-white shadow shadow-sm p-3 ` + style.content}>
                        <h5 className={`text-center border-bottom shadow shadow-sm py-1 ` + style.contentTitle}>{icon} {title}</h5>

                        <div className={style.component}>
                            {component}
                        </div>
                    </div>
                </div>
                <div className="col-md-3 shadow shadow-sm roundered p-3 d-sm-none d-xs-none d-md-block">
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img1} className="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative .</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>


            {/* PROFIL MODAL */}
            <Profil />

            {/* SEARCH MODAL */}
            <Search />
        </>
    )
}

export default AdminLayout