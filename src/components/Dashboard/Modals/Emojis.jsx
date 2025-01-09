import style from "../../../assets/css/modules/Emojis.module.css"
import EmojiPicker from 'emoji-picker-react';
import { useGlobalContext } from "../../../Context";

const Emojis = () => {
    const { showEmojis, setShowEmojis,AddEmojis } = useGlobalContext()
   
    return <>
        <div className={`row animate__animated animate__bounceIn ${style.emojisModal}`}>
            <i className={`bg-white bi bi-trash p-1 rounded ${style.deleteIcon} `} onClick={() => setShowEmojis(!showEmojis)}></i>
            <EmojiPicker
                open={true}
                theme={'dark'}
                emojiStyle={'facebook'}
                lazyLoadEmojis={true}
                onEmojiClick={(e) => AddEmojis(e.emoji)}
            />
        </div>
    </>
}

export default Emojis