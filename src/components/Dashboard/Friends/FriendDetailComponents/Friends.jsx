import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../../Context";
import Friend from "../Friend";
import CommunFriends from "../../Modals/CommunFriends";

const Friends = () => {
    const { friends, FriendClickHandle } = useGlobalContext()

    return <>
        <div className={`animate__animated animate__headShake`}>
            <div className="row">
                {friends.map((friend) => (
                    <div
                        className="col-md-3 col-sm-4 col-xs-6"
                        key={friend.id}
                        onClick={() => FriendClickHandle(friend)}
                    >
                        <Friend friend={friend} />
                    </div>
                ))}
            </div>
        </div>
        <CommunFriends />
    </>
}

export default Friends