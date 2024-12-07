import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context.jsx";
import PublicityComponent from "./PublicityComponent.jsx";
import InvitationComponent from "./InvitationComponent.jsx";

function SideBar() {
    const { publicities, invitations, sideBarLinks, HandleSideBarNavigateLink } = useGlobalContext()

    return (
        <>
            {/* LATERALE GAUCHE */}
            <div className="offcanvas offcanvas-start " data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: "300px" }} >
                <div className="offcanvas-header shadow shadow-sm text-center">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"> <img src={logo} width={"50px"} alt="" srcSet="" /> </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <br />
                <div className="offcanvas-body p-0" >
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
                </div>
            </div>

            {/* LATERALE DROITE */}
            <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ width: "300px" }} >
                <div className="offcanvas-header shadow shadow-sm text-center">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel"> <img src={logo} width={"50px"} alt="" srcSet="" /> </h5>
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