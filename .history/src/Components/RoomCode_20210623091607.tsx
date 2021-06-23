import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss'

type RoomCodeProps = {
    code : string;
}
export function RoomCode() {

    export function RoomCode(props: RoomCodeProps){
        function copyRoomCodeToClipboard(){
            navigator.clipboard.writeText(props.code);
        }
    }
    return (
        <button className="room-code" onClick={cop}>
            <div>
                <img src={copyImg} alt="copy" />
            </div>
            <span>sala -McsjvZpz3YCU8UWkDgW</span>
        </button>
    );
}