import style from "../../../assets/css/modules/Emojis.module.css"
import EmojiPicker from 'emoji-picker-react';
import { useGlobalContext } from "../../../Context";

const Emojis = () => {
    const { showEmojis, setShowEmojis, AddEmojis } = useGlobalContext()

    return <>
        <div className="modal animate__animated animate__bounceIn modal-sm" id="emojiModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header" style={{ marginBottom: "-10px", backgroundColor: "#000" }}>
                        <h5 className="modal-title"></h5>
                        <button type="button" className="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <EmojiPicker
                        open={true}
                        theme={'dark'}
                        emojiStyle={'facebook'}
                        lazyLoadEmojis={true}
                        onEmojiClick={(e) => AddEmojis(e.emoji)}
                        className="w-100"
                    />
                </div>
            </div>
        </div>
    </>
}

export default Emojis