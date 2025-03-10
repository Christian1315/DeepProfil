import React, { useContext, useState, useEffect, useRef } from "react";

import img1 from "./assets/images/pub1.jpg";
import profil from "./assets/images/gogo.png";
import me from "./assets/images/me.jpg";

const AppContext = React.createContext()

// CUSTOM HOOKS
const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({ children }) => {
    const replyField = document.getElementById('replyField')
    const chatInput = document.querySelector(".chatInput > textarea.rce-input-textarea")
    // const modalBackdropShow = document.getElementsByName("modal-backdrop")
    // LOADER 
    const [loader, setLoader] = useState(false)
    const [loaderTitle, setLoaderTitle] = useState('')
    const [loaderText, setLoaderText] = useState('')

    const [replyText, setReplyText] = useState(null)

    // EMOJIS 
    const [showEmojis, setShowEmojis] = useState(false)
    const [emojiValue, setEmojiValue] = useState('😚')
    const AddEmojis = (emoji) => {
        setEmojiValue(emoji)
        if (replyField) {
            replyField.value = replyField.value + emoji
            setReplyText(replyField.value)
        }

        if (chatInput) {
            chatInput.value = chatInput.value + emoji
        }
    }

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
            active: window.location.pathname == '/friends' ? true : false,
            icon: <i className="bi bi-people mx-2"></i>
        },
        {
            id: 2,
            text: "Publications",
            url: "/news",
            active: window.location.pathname == '/news' ? true : false,
            icon: <i className="bi bi-megaphone mx-2"></i>
        },
        {
            id: 3,
            text: "Groupes",
            url: "/groups",
            active: window.location.pathname == '/groups' ? true : false,
            icon: <i className="bi bi-collection mx-2"></i>
        },
        {
            id: 4,
            text: "Notifications",
            url: "/notifications",
            active: window.location.pathname == '/notifications' ? true : false,
            icon: <i className="bi bi-bell mx-2"></i>
        },
        {
            id: 5,
            text: "Chats",
            url: "/chats",
            active: window.location.pathname == '/chats' ? true : false,
            icon: <i className="bi bi-chat-quote mx-2"></i>
        },
        {
            id: 6,
            text: "Mon Compte",
            url: "/my-account",
            active: window.location.pathname == '/my-account' ? true : false,
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
    const searchResultInitial = [
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
    ]
    const [searchResult, setSearchResult] = useState([])
    const HandleSearch = (e) => {
        const text = e.target.value
        text.trim() !== "" ? setSearch(true) : setSearch(false)
        const result = searchResultInitial.filter((item) => Object.values(item).join('').toLocaleLowerCase().includes(text.toLocaleLowerCase()))
        setSearchResult(result)
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

    // ####### NOTIFICATIONS ######
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

    // ###### PUBLICITES ######
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
            img: me
        },
        {
            id: 3,
            title: 'Publicité 3',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolorum veniam voluptate numquam, consequatur et cumque facere sunt iste doloribus impedit? Reprehenderit error commodi corrupti est cumque accusantium perspiciatis delectus.',
            img: img1
        }
    ])

    // ###### INVITATIONS #######
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
    const [currentInvitation, setCurrentInvitation] = useState({ user: { name: 'gogo' } })
    const InvitationClickHandle = (invitation) => {
        setCurrentInvitation(invitation)
    }

    // ###### FRIENDS (AMIS) ######
    const [friends, setFriends] = useState([
        {
            id: 1,
            img: me,
            banner: profil,
            name: 'GOGO Christian',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 2,
            img: img1,
            banner: profil,
            name: 'SEDEGNAN Florent',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 3,
            img: me,
            name: 'SETOH Nadège',
            banner: profil,
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 4,
            img: img1,
            banner: profil,
            name: 'Ruth GANSA',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 5,
            img: img1,
            banner: profil,
            name: 'DOHOU Merveille',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 6,
            img: img1,
            banner: profil,
            name: 'DEGUI Martine',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 7,
            img: me,
            name: 'HOUYE Bénoite',
            banner: profil,
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        },
        {
            id: 8,
            img: me,
            banner: img1,
            name: 'IRENE DOGLO',
            communFriends: [
                {
                    id: 1,
                    img: me,
                    banner: profil,
                    name: "Ami 1 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                },
                {
                    id: 2,
                    img: me,
                    banner: profil,
                    name: "Ami 2 commun",
                    communFriends: [
                        {
                            id: 1,
                            img: me,
                            banner: profil,
                            name: "Ami 2 commun"
                        },
                        {
                            id: 2,
                            img: me,
                            banner: profil,
                            name: "Ami 3 commun"
                        },
                        {
                            id: 3,
                            img: me,
                            banner: profil,
                            name: "Ami 4 commun"
                        }
                    ]
                }
            ],
        }
    ])
    const [currentFriend, setCurrentFriend] = useState({
        id: 8,
        img: me,
        name: 'SETOH Nadège',
        communFriends: [
            {
                id: 1,
                img: me,
                banner: profil,
                name: "Ami 1 commun",
                communFriends: [
                    {
                        id: 1,
                        img: me,
                        banner: profil,
                        name: "Ami 2 commun"
                    },
                    {
                        id: 2,
                        img: me,
                        banner: profil,
                        name: "Ami 3 commun"
                    },
                    {
                        id: 3,
                        img: me,
                        banner: profil,
                        name: "Ami 4 commun"
                    }
                ]
            },
            {
                id: 2,
                img: me,
                banner: profil,
                name: "Ami 2 commun",
                communFriends: [
                    {
                        id: 1,
                        img: me,
                        banner: profil,
                        name: "Ami 2 commun"
                    },
                    {
                        id: 2,
                        img: me,
                        banner: profil,
                        name: "Ami 3 commun"
                    },
                    {
                        id: 3,
                        img: me,
                        banner: profil,
                        name: "Ami 4 commun"
                    }
                ]
            }
        ],
    })
    const FriendClickHandle = (friend) => {
        setCurrentFriend(friend)
    }
    const [friendDetailNavigations, setFriendDetailNavigations] = useState([
        {
            id: 1,
            text: "Infos personnelles",
            icon: <i className="bi bi-list"></i>,
            tag: 'info',
            active: true
        },
        {
            id: 2,
            text: "Publications",
            icon: <i className="bi bi-stickies "></i>,
            tag: 'pub',
            active: false
        },
        {
            id: 3,
            text: "Ami(e)s",
            icon: <i className="bi bi-people "></i>,
            tag: 'friend',
            active: false
        }
    ])
    const [currentFriendDetailNavigation, setCurrentFriendDetailNavigation] = useState(null)
    const HandleFriendDetailNavigationClick = (navigationId) => {
        let newNavigations = friendDetailNavigations.map((item) => item.id == parseInt(navigationId) ? { ...item, active: true } : { ...item, active: false })
        setFriendDetailNavigations(newNavigations)
        // L'ACTUELLE NAVIGATION
        let _currentFriendDetailNavigation = friendDetailNavigations.find((item) => item.id == parseInt(navigationId))
        setCurrentFriendDetailNavigation(_currentFriendDetailNavigation)
    }

    // LES CHATS
    const [chatValue, setChatValue] = useState('')
    const [currentChat, setCurrentChat] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [chats, setChats] = useState([
        {
            id: 1,
            avatar: me,
            user: {
                id: 1,
                name: 'Christ',
            },
            messages: [
                {
                    position: 'left',
                    type: 'text',
                    text: 'What are you doing?',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Tu fous quoi là bas Bro?',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'photo',
                    data: {
                        uri: me
                    },
                    date: new Date(),
                }
            ],
            date: new Date(),
            unreadMsg: [
                {
                    id: 1,
                    message: 'Unread message 1'
                },
                {
                    id: 2,
                    message: 'Unread message 2'
                },
                {
                    id: 4,
                    message: 'Unread message 3'
                }
            ]
        },
        {
            id: 2,
            avatar: img1,
            user: {
                id: 1,
                name: 'SETOH Victoire',
            },
            messages: [
                {
                    position: 'left',
                    type: 'text',
                    text: 'What are you doing?',
                    date: new Date(),
                },
                {
                    position: 'right',
                    type: 'text',
                    text: 'Tu fous quoi là bas Bro?',
                    date: new Date(),
                }
            ],
            date: new Date(),
            unreadMsg: [
                {
                    id: 1,
                    message: 'Unread message 1'
                },
                {
                    id: 2,
                    message: 'Unread message 2'
                },
                {
                    id: 4,
                    message: 'Unread message 3'
                }
            ]
        }
    ])
    const AddChat = (text = null, fileType = null) => {
        if (text) {
            let lastCurrentChat = currentChat.messages[currentChat.messages.length - 1]
            let newChat = {
                position: lastCurrentChat.position === 'right' ? 'left' : 'right',
                type: fileType ? fileType : 'text',
                text: text ? text : chatInput.value,
                date: new Date(),
                data: {
                    uri: URL.createObjectURL(selectedFile), // Temporary URL
                    status: {
                        click: true,
                        loading: false,
                    },
                },
            }
            let newCurrentChat = { ...currentChat, messages: [...currentChat.messages, { ...newChat }] }
            setCurrentChat(newCurrentChat)

            // Actuallisation des Chats
            let newChats = chats.map((item) => (
                item.id == currentChat.id ? { ...newCurrentChat } : { ...item }
            ))
            setChats(newChats)

            // Clear input
            chatInput.value = ''
        }
    }

    const [showChatFiles, setShowChatFiles] = useState(false)
    const HandleDocumentUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setShowChatFiles(false)
            setSelectedFile(file)
            AddChat("Télecharger", e.target.type)
        }
        // console.log(file);
    }

    // PUBLICATIONS
    const [publications, setPublications] = useState([
        {
            id: 1,
            content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
            date: '8 Mai 2024',
            author: {
                id: 1,
                name: 'GOGO Christian'
            },
            likes: [
                {
                    id: 1,
                    liker: {
                        name: 'Liker 1',
                        img: me,
                    }
                },
                {
                    id: 2,
                    liker: {
                        name: 'Liker 2',
                        img: me,
                    }
                }
            ]
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis beatae ratione, numquam libero quo ipsum unde officiis, laudantium fugit expedita accusantium obcaecati nostrum deserunt delectus sint, iusto consectetur explicabo?',
            date: '8 Mai 2024',
            author: {
                id: 1,
                name: 'SEDEGNAN Florent'
            },
            likes: [
                {
                    id: 1,
                    liker: {
                        name: 'Liker 1',
                        img: me,
                    }
                },
                {
                    id: 2,
                    liker: {
                        name: 'Liker 2',
                        img: me,
                    }
                }
            ]
        }
    ])

    const [currentPub, setCurrentPub] = useState(null)

    // RENDERING
    return (
        <AppContext.Provider value={{
            showEmojis,
            setShowEmojis,

            emojiValue,
            setEmojiValue,
            AddEmojis,

            replyText,
            setReplyText,

            chats,
            setChats,
            currentChat,
            setCurrentChat,
            AddChat,
            chatValue,
            setChatValue,
            chatInput,
            HandleDocumentUpload,
            showChatFiles,
            setShowChatFiles,

            loader,
            setLoader,
            loaderTitle,
            setLoaderTitle,
            loaderText,
            setLoaderText,

            notifications,
            HandleNotificationClick,

            publicities,

            invitations,
            currentInvitation,
            setCurrentInvitation,
            InvitationClickHandle,

            publications,
            setPublications,
            currentPub,
            setCurrentPub,

            friends,
            currentFriend,
            setCurrentFriend,
            FriendClickHandle,
            friendDetailNavigations,
            currentFriendDetailNavigation,
            HandleFriendDetailNavigationClick,

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