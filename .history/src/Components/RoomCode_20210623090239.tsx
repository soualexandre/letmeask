import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss'
export function RoomCode() {
    return (
        <button className="room-code">
            <div>
                <img src={copyImg} alt="copy" />
            </div>
            <span>sala -McsjvZpz3YCU8UWkDgW</span>
        </button>
    );
}