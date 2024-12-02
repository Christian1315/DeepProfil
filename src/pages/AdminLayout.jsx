import SideBar from "../components/SideBar"
import AdminHeader from "../components/AdminHeader"
import Search from "../components/Dashboard/Modals/Search";
import Profil from "../components/Dashboard/Modals/Profil";

import style from "../assets/css/modules/AdminLayout.module.css"

function AdminLayout({ component, icon, title }) {

    return (
        <>
            <AdminHeader />
            <SideBar />
            <div className="row" id="admin-content">
                <div className="col-md-3 shadow shadow-sm roundered p-3">
                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorem tempore quo, distinctio mollitia enim iusto sequi exercitationem minus modi accusamus excepturi fugit sit recusandae quia, incidunt neque voluptates consectetur.</p>
                </div>
                <div className="col-md-6">
                    <div className={`bg-white shadow shadow-sm p-3 ` + style.content}>
                        <h5 className={`text-center border-bottom shadow shadow-sm py-1 ` + style.contentTitle}>{icon} {title}</h5>

                        <div className={style.component}>
                            {component}
                        </div>
                    </div>
                </div>
                <div className="col-md-3 shadow shadow-sm roundered p-3">
                    <p className="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum dolorem tempore quo, distinctio mollitia enim iusto sequi exercitationem minus modi accusamus excepturi fugit sit recusandae quia, incidunt neque voluptates consectetur.</p>
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