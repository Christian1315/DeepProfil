import SideBar from "../components/SideBar"
import AdminHeader from "../components/AdminHeader"
import Search from "../components/Dashboard/Modals/Search";
import Profil from "../components/Dashboard/Modals/Profil";

import style from "../assets/css/modules/AdminLayout.module.css"

import logo from "../assets/images/logo.png";

import PublicityComponent from "../components/Dashboard/PublicityComponent";

import { useGlobalContext } from "../Context";
import InvitationComponent from "../components/Dashboard/InvitationComponent";
import { Link } from "react-router-dom";
import FriendComponent from "../components/Dashboard/FriendComponent";
import Pagination from "../components/Pagination";
import ManageInvitation from "../components/Dashboard/Modals/ManageInvitation";

function AdminLayout({ component, icon, title }) {

    const { friends, publicities, invitations, sideBarLinks, HandleSideBarNavigateLink } = useGlobalContext()

    const itemsBlockFriends = (items) => (
        items.map((item) => <FriendComponent key={item.id} friend={item} />)
    )

    const itemsBlockInvitations = (items) => (
        items.map((item) => <InvitationComponent
            key={item.id}
            invitation={item}

        />)
    )

    const itemsBlockPublications = (items) => (
        publicities.map((publiciy) => <PublicityComponent key={publiciy.id} publicity={publiciy} />)
    )

    return (
        <>
            <AdminHeader />
            <SideBar />
            <div className="row" id="admin-content" style={{ marginBottom: 0 }}>
                <div className="col-md-2 bg_secondary shadow shadow-sm roundered p-3 d-none d-md-block">
                    {/* LE MENU */}
                    <div className="list-group bg-white p-2 card shadow shadow-sm w-100" id="">
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

                    {/* LES AMIS */}
                    <hr />
                    <h6 className="text-left text-upercase"><i className="bi bi-calendar-event"></i> VOS CONTACTS</h6>

                    {
                        <Pagination
                            items={friends}
                            itemsOnPage={3}
                            itemsBlock={itemsBlockFriends}
                        />
                    }
                </div>
                <div className="col-md-8">
                    <div className={`bg-white shadow shadow-sm p-3 ` + style.content}>
                        <h5 className={`text-center border-bottom shadow shadow-sm py-1 ` + style.contentTitle}>{icon} {title}</h5>
                        <div className={style.component} style={{ height: window.innerHeight - 0.2 * window.innerHeight }}>
                            {component}
                        </div>
                    </div>
                </div>
                <div className="col bg_secondary-md-2 shadow shadow-sm roundered d-none d-md-block py-2">
                    {/* les publicites */}
                    <h6 className="text-left text-uppercase"><i className="bi bi-megaphone"></i> Publicités</h6>
                    {
                        <Pagination
                            items={publicities}
                            itemsOnPage={3}
                            itemsBlock={itemsBlockPublications}
                        />
                    }
                    {/* les invitations */}
                    <hr />
                    <h6 className="text-left text-upercase"><i className="bi bi-calendar-event"></i> Invitations</h6>

                    {
                        <Pagination
                            items={invitations}
                            itemsOnPage={3}
                            itemsBlock={itemsBlockInvitations}
                        />
                    }
                </div>
            </div>

            {/* PROFIL MODAL */}
            <Profil />

            {/* SEARCH MODAL */}
            <Search />

            {/* MANAGE INVATION */}
            <ManageInvitation />
        </>
    )
}

export default AdminLayout