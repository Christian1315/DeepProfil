import { Link } from "react-router-dom"
import style from "../../../assets/css/modules/Search.module.css"
import { useGlobalContext } from "../../../Context.jsx";

const Search = () => {
    const Context = useGlobalContext()
    const { search, searchText, searchResult, HandleSearch } = Context

    return <>
        <div className="modal fade" id="searchModal" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header shadow shadow-sm">
                        <input type="search" name="" onChange={HandleSearch} placeholder="Recherche ..." className="form-control w-100 " />
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            search &&
                            <ul className="list-group">
                                {
                                    searchResult.map((item) => (
                                        <Link key={item.id} to={"/"} className="text-dark list-group-item list-group-item-action d-flex justify-content-between align-items-start">{item.text} <span className={`badge rounded-pill text-bg-secondary ${style.badge} `}>{item.type.toLocaleLowerCase()}</span></Link>
                                    ))
                                }
                            </ul>
                        }
                        {searchResult.length == 0 && <p className="text-center">Aucun résultat trouvé..</p>}
                    </div>

                </div>
            </div>
        </div>
    </>
}

export default Search