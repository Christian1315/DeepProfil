import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context.jsx";
import PublicityComponent from "./Dashboard/PublicityComponent.jsx";
import InvitationComponent from "./Dashboard/InvitationComponent.jsx";
import FriendComponent from "./Dashboard/FriendComponent.jsx";
import Pagination from "./Pagination.jsx";

function SideBar() {
    const { friends, publicities, invitations, sideBarLinks, HandleSideBarNavigateLink } = useGlobalContext()
    
    const itemsBlock = (items) => (
        items.map((item) => <FriendComponent key={item.id} friend={item} />)
    )

    return (
        <>
            {/* LATERALE GAUCHE */}
            <div className="offcanvas offcanvas-start " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: "300px" }} >
                <div className="offcanvas-header shadow shadow-sm text-center">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> <Link to={'/admin'}><img src={logo} width={"50px"} alt="" className="img-fluid" srcSet="" /> </Link>  </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <br />
                <div className="offcanvas-body p-2" >
                    <div className="shadow shadow-sm">
                        <div className="list-group" id="sideBarNav">
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
                                itemsOnPage={2}
                                itemsBlock={itemsBlock}
                            />
                        }
                    </div>
                </div>
            </div>

            {/* LATERALE DROITE */}
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "300px" }} >
                <div className="offcanvas-header shadow shadow-sm text-center">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"> <Link to={'/admin'}><img src={logo} width={"50px"} alt="" className="img-fluid" srcSet="" /> </Link> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <br />
                <div className="offcanvas-body p-2" >
                    <div className="col-md-12 shadow shadow-sm roundered p-2">
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
            </div>
        </>
    )
}

export default SideBar