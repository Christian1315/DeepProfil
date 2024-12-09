import { Link, useParams } from "react-router-dom"
import { useGlobalContext } from "../../Context"

function FriendDetail() {
    const { friends } = useGlobalContext()
    let { friendId } = useParams()
    const friend = friends.find((item) => item.id == friendId)

    return (
        <>
            <h1>{friend.name}</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem quae aut nisi veniam unde id, ratione velit, beatae impedit corrupti, necessitatibus nesciunt provident. Inventore deleniti fugiat beatae ipsa quisquam.</p>
            <Link className="text-right" to={'/friends'}><i className="bi bi-arrow-left-circle"></i> Retour</Link>
        </>
    )
}

export default FriendDetail