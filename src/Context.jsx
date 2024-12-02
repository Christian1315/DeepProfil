import React, { useContext, useState, useEffect } from "react";

const AppContext = React.createContext()

// CUSTOM HOOKS
const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    // ####### AUTHENTIFICATION ######
    const [login, setLogin] = useState(false)
    const [loginText, setLoginText] = useState("Se connecter")
    const connexion = () => {
        setLogin(true)
        setLoginText("Connexion en cours ...")
    }

    // ###### ACTIONS SUR LE SIDEBAR ######
    const [sideBarLinks, setSideBarLinks] = useState([
        {
            id: 1,
            text: "Mes ami(e)s",
            url: "/friends",
            active: false,
            icon: <i className="bi bi-people mx-2"></i>
        },
        {
            id: 2,
            text: "Annonces",
            url: "/news",
            active: false,
            icon: <i className="bi bi-megaphone mx-2"></i>
        },
        {
            id: 3,
            text: "Groupes d'amis",
            url: "/groups",
            active: false,
            icon: <i className="bi bi-collection mx-2"></i>
        },
        {
            id: 4,
            text: "Notifications",
            url: "/notifications",
            active: false,
            icon: <i className="bi bi-bell mx-2"></i>
        },
        {
            id: 5,
            text: "Chats",
            url: "/chats",
            active: false,
            icon: <i className="bi bi-chat-quote mx-2"></i>
        },
        {
            id: 6,
            text: "Mon Compte",
            url: "/my-account",
            active: false,
            icon: <i class="bi bi-gear mx-2"></i>
        }

    ])

    const HandleSideBarNavigateLink = (id) => {
        const newLinks = sideBarLinks.map((item) => (
            item.id == parseInt(id) ?
                { ...item, active: true } :
                { ...item, active: false }
        ))
        // ACTUALISATION DES LIENS
        setSideBarLinks(newLinks)
    }

    // ######## SEARCH MODAL #####
    const [search, setSearch] = useState(false)
    const [searchText, setSearchText] = useState(null)
    const [searchResult, setSearchResult] = useState([
        {
            id: 1,
            text: "GOGO Christian",
        },
        {
            id: 2,
            text: "SEDEGNAN Florent",
        },
        {
            id: 3,
            text: "SETOH Nadège",
        },
        {
            id: 4,
            text: "DEGUI Martine",
        },
        {
            id: 5,
            text: "GOGO Dodji",
        }
    ])

    const HandleSearch = (e) => {
        const text = e.target.value
        text.length != 0 ? setSearch(true) : setSearch(false)

        var new_searchResult = searchResult.filter((item)=>item.text==text)
        // console.log(new_searchResult)
        // setSearchResult(new_searchResult)
    }

    // RENDERING
    return (
        <AppContext.Provider value={{
            login,
            loginText,
            setLogin,
            connexion,

            search,
            setSearch,
            searchText,
            searchResult,
            HandleSearch,

            sideBarLinks,
            setSideBarLinks,
            HandleSideBarNavigateLink,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider, useGlobalContext }