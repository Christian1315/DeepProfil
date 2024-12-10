import { useGlobalContext } from "../../Context"
import Friend from "./Friend"
import CommunFriends from "./Modals/CommunFriends"

const Friends = () => {
    const { friends } = useGlobalContext()
    return <>
        <div className="row">
            {friends.map((friend) => (
                <div key={friend.id} className="col-md-3 col-sm-4 col-xs-6">
                    <Friend  friend={friend} />
                </div>
            ))}
        </div>
        <CommunFriends/>
    </>
}

export default Friends