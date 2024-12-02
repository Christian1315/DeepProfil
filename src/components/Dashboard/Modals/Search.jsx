import { Link } from "react-router-dom"
import { useGlobalContext } from "../../../Context.jsx";

const Search = () => {
    const Context = useGlobalContext()
    const {search,searchText,searchResult,HandleSearch} = Context

    return <>
        <div className="modal fade" id="searchModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <input type="search" name="" onChange={HandleSearch} placeholder="Recherche ..." className="form-control w-100 " />
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    {
                        search?
                                <div className="modal-body">
                                    <ul className="list-group">
                                        {
                                            searchResult.map((item)=>(
                                                <li className="list-group-item list-group-item-action text-center" key={item.id}><Link to={"/"} className="text-dark">{item.text}</Link> </li>
                                            ))
                                        }
                                    </ul>
                                </div>:
                                null
                    }
                </div>
            </div>
        </div>
    </>
}

export default Search