import copyImg from '../assets/images/copy.svg';
import '../styles/RoomCode.scss'
export function RoomCode() {
    return (
        <button>
            <div>
                <img src={copyImg} alt="copy" />
            </div>
            <span>sala dsdfg54552fd64</span>
        </button>
    );
}