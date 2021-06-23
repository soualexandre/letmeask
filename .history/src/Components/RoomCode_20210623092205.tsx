import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss'

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props:RoomCodeProps) {
     function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code);
    }
    return (
        <button className="room-code" onclick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImg} alt="copy" />
            </div>
            <span>sala #{props.code}</span>
        </button>
    );
}