import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss'

type RoomCodeProps = {
    code : string;
}
export function RoomCode() {

    export function RoomCode(props: RoomCodeProps){
        navigator.clipboard.writeText('')
    }
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="copy" />
            </div>
            <span>sala -McsjvZpz3YCU8UWkDgW</span>
        </button>
    );
}