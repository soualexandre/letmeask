import { Link, useHistory } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import { Button } from '../Components/Button'
import {database} from '../services/firebase'
import { useAuth } from '../hooks/useAuth'
import '../styles/auth.scss';
import { useTheme } from '../hooks/useTheme';



export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const {theme} = useTheme();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })
        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth" className={theme}>
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de 1&amp;A ao-vivo</strong>
                <p>tire as dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask" />
                    <img className="user-avatar" src={user?.avatar} alt={user?.name}/>
                    <h3>{user?.name}</h3>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>

                    </form>
                    <p>
                        Que entar em uma sala existente <Link to="/">Clique aaqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}