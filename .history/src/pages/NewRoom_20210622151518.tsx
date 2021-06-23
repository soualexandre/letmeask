import {Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import { Button } from '../Components/Button'
import {useAuth} from '../hooks/useAuth'
import '../styles/auth.scss';



export function NewRoom() {
    const { user} = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de 1&amp;A ao-vivo</strong>
                <p>tire as dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="Letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
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