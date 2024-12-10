import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import img1 from "./assets/images/pub1.jpg";
import profil from "./assets/images/gogo.png";
import me from "./assets/images/me.jpg";

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
            text: "Publications",
            url: "/news",
            active: false,
            icon: <i className="bi bi-megaphone mx-2"></i>
        },
        {
            id: 3,
            text: "Groupes",
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
            icon: <i className="bi bi-gear mx-2"></i>
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
    const [searchResultInitial, setSearchResultInitial] = useState([
        {
            id: 1,
            typeId: 1,
            text: "GOGO Christian",
            type: 'utilisateur'
        },
        {
            id: 2,
            typeId: 2,
            text: "SEDEGNAN Florent",
            type: 'utilisateur'
        },
        {
            id: 3,
            typeId: 3,
            text: "SETOH Nadège",
            type: 'utilisateur'
        },
        {
            id: 4,
            typeId: 4,
            text: "DEGUI Martine",
            type: 'publication'
        },
        {
            id: 5,
            typeId: 5,
            text: "GOGO Dodji",
            type: 'publication'
        }
    ])
    const [searchResult, setSearchResult] = useState(searchResultInitial)
    const HandleSearch = (e) => {
        const text = e.target.value
        text.length != 0 ? setSearch(true) : setSearch(false)
        const result = searchResult.filter((item) => Object.values(item).join('').toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        text.length != 0 ? setSearchResult(result) : setSearchResult(searchResultInitial)
    }

    // ####### PROFIL MODAL ######
    const [zoom, setZoom] = useState(false)
    const [zoomTitle, setZoomTitle] = useState(null)
    const zoomProfilImg = () => {
        zoom ? (setZoom(false), setZoomTitle("Cliquez pour agrandir")) : (
            setZoom(true),
            setZoomTitle("Cliquez pour reduire")
        )
    }

    // ####### PROFIL MODAL ######
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            statut: 'old',
            title: 'Notification 1',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 2,
            statut: 'old',
            title: 'Notification 2',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 3,
            statut: 'new',
            title: 'Notification 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 4,
            statut: 'new',
            title: 'Notification 4',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 5,
            statut: 'new',
            title: 'Notification 5',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 6,
            statut: 'new',
            title: 'Notification 6',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        },
        {
            id: 7,
            statut: 'new',
            title: 'Notification 7',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, deleniti quibusdam? Laudantium at distinctio, rem, dolorum reprehenderit animi ipsa voluptas veniam nihil, recusandae incidunt velit repellat eum! Libero, rem quo!'
        }
    ])
    notifications.sort((a, b) => a.statut.localeCompare(b.statut))
    const HandleNotificationClick = (id) => {
        var newNotifications = notifications.map((item) => (
            id == parseInt(item.id) ?
                { ...item, statut: 'old' } :
                item
        ))

        setNotifications(newNotifications)
    }

    // ###### PUBLICITES
    const [publicities, setPublicities] = useState([
        {
            id: 1,
            title: 'Publicité 1',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum veniam voluptate numquam, consequatur et cumque facere sunt iste doloribus impedit? Reprehenderit error commodi corrupti est cumque accusantium perspiciatis delectus.',
            img: img1
        },
        {
            id: 2,
            title: 'Publicité 2',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum veniam voluptate numquam, consequatur et cumque facere sunt iste doloribus impedit? Reprehenderit error commodi corrupti est cumque accusantium perspiciatis delectus.',
            img: img1
        },
        {
            id: 3,
            title: 'Publicité 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum veniam voluptate numquam, consequatur et cumque facere sunt iste doloribus impedit? Reprehenderit error commodi corrupti est cumque accusantium perspiciatis delectus.',
            img: img1
        }
    ])

    // ###### INVITATIONS
    const [invitations, setInvitations] = useState([
        {
            id: 1,
            since: '2j',
            user: {
                id: 1,
                img: img1,
                name: 'User 1'
            }
        },
        {
            id: 2,
            since: '3j',
            user: {
                id: 2,
                img: img1,
                name: 'User 2'
            }
        },
        {
            id: 4,
            since: '4j',
            user: {
                id: 4,
                img: img1,
                name: 'User 4'
            }
        }
    ])
    const [currentInvitation,setCurrentInvitation]=useState({user:{name:'gogo'}})
    const InvitationClickHandle = (invitation) => {
        setCurrentInvitation(invitation)
    }

    // ###### FRIENDS (AMIS)
    const [friends, setFriends] = useState([
        {
            id: 1,
            img: me,
            name: 'GOGO Christian',
            communFriends:3,
            communFriendsFirstImg:profil,
        },
        {
            id: 2,
            img: img1,
            name: 'SEDEGNAN Florent',
            communFriends:2,
            communFriendsFirstImg:profil,
        },
        {
            id: 3,
            img: me,
            name: 'SETOH Nadège',
            communFriends:1,
            communFriendsFirstImg:profil,
        },
        {
            id: 4,
            img: img1,
            name: 'SEDEGNAN Florent',
            communFriends:2,
            communFriendsFirstImg:profil,
        },
        {
            id: 5,
            img: img1,
            name: 'SEDEGNAN Florent',
            communFriends:2,
            communFriendsFirstImg:profil,
        },
        {
            id: 6,
            img: img1,
            name: 'SEDEGNAN Florent',
            communFriends:2,
            communFriendsFirstImg:profil,
        },
        {
            id: 7,
            img: me,
            name: 'SETOH Nadège',
            communFriends:1,
            communFriendsFirstImg:profil,
        },
        {
            id: 8,
            img: me,
            name: 'SETOH Nadège',
            communFriends:1,
            communFriendsFirstImg:profil,
        }
    ])
    const [currentFriend,setCurrentFriend]=useState({})
    const FriendClickHandle = (friend) => {
        setCurrentFriend(friend)
    }

    // RENDERING
    return (
        <AppContext.Provider value={{
            notifications,
            HandleNotificationClick,

            publicities,

            invitations,
            currentInvitation,
            setCurrentInvitation,
            InvitationClickHandle,

            friends,
            currentFriend,
            setCurrentFriend,
            FriendClickHandle,

            login,
            loginText,
            setLogin,
            connexion,

            search,
            setSearch,
            searchText,
            searchResult,
            HandleSearch,

            zoom,
            zoomTitle,
            zoomProfilImg,

            sideBarLinks,
            setSideBarLinks,
            HandleSideBarNavigateLink,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider, useGlobalContext }