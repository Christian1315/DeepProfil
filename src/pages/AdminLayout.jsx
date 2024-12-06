import SideBar from "../components/SideBar"
import AdminHeader from "../components/AdminHeader"
import Search from "../components/Dashboard/Modals/Search";
import Profil from "../components/Dashboard/Modals/Profil";

import style from "../assets/css/modules/AdminLayout.module.css"

import img1 from "../assets/images/pub1.jpg";
import logo from "../assets/images/logo.png";

import PublicityComponent from "../components/PublicityComponent";

import { useGlobalContext } from "../Context";
import InvitationComponent from "../components/InvitationComponent";
import { Link } from "react-router-dom";

function AdminLayout({ component, icon, title }) {

    const { publicities, invitations, sideBarLinks, HandleSideBarNavigateLink } = useGlobalContext()
    return (
        <>
            <AdminHeader />
            <SideBar />
            <div className="row" id="admin-content">
                <div className="col-md-2 shadow shadow-sm roundered p-3 d-none d-md-block">
                    <div className="list-group bg-white p-2 shadow shadow-sm w-100" id="">
                        <p className="text-center"><img src={logo} width={50} alt="" srcSet="" /></p>
                        
                        {
                            sideBarLinks.map((item) => (
                                <Link
                                    to={item.url}
                                    key={item.id}
                                    className={item.active ? "list-group-item list-group-item-action animate__animated animate__pulse active" : "list-group-item list-group-item-action"}
                                    onClick={() => HandleSideBarNavigateLink(item.id)}
                                >
                                    {item.icon}  {item.text}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className="col-md-8">
                    <div className={`bg-white shadow shadow-sm p-3 ` + style.content}>
                        <h5 className={`text-center border-bottom shadow shadow-sm py-1 ` + style.contentTitle}>{icon} {title}</h5>

                        <div className={style.component}>
                            {component}
                        </div>
                    </div>
                </div>
                <div className="col-md-2 shadow shadow-sm roundered d-none d-md-block py-2">
                    {/* les publicites */}
                    <h6 className="text-left text-uppercase"><i className="bi bi-megaphone"></i> Publicités</h6>
                    {
                        publicities.map((publiciy) => <PublicityComponent key={publiciy.id} publicity={publiciy} />)
                    }
                    {/* les invitations */}
                    <hr />
                    <h6 className="text-left text-upercase"><i className="bi bi-calendar-event"></i> Invitations</h6>
                    {
                        invitations.map((invitation) => <InvitationComponent key={invitation.id} invitation={invitation} />)
                    }
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