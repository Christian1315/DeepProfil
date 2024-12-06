import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context.jsx";

function SideBar() {
    const {sideBarLinks,HandleSideBarNavigateLink} = useGlobalContext()

    return (
        <>
            <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: "300px" }} >
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
        </>
    )
}

export default SideBar