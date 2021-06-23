
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../Components/Button';
import '../styles/auth.scss';
import {useAuth} from '../hooks/useAuth'
 
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
export function Home() {
    const history = useHistory();
    const {user,signInWithGoogle} = useAuth()


   async function handleCreateRoom() {
        if(!user){
           await signInWithGoogle();
        }
        history.push('/rooms/new');
    }

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
                <button onClick={handleCreateRoom} className="create-room">
                    <img src={googleIconImg} alt="" />
                    Crie uma sala com o google
                </button>
                <div className="separator">Ou entre em uma sala</div>

                <form>
                    <input
                        type="text"
                        placeholder="Digite o código da sala "
                    />
                    <Button type="submit">
                        Entrar na sala
                    </Button>

                </form>
            </div>
        </main>
    </div>
);
}