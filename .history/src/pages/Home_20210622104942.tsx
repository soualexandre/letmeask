
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../Components/Button';
import { auth, firebase } from '../services/firebase';
import '../styles/auth.scss';
export function Home() {
    const history = useHistory();

    function handleCreateRoom() {
        const provider = new firebase.auth.GoogleAuthProvider();

        auth.signInWithPopup(provider).then(result => {
            console.log(result);
            history.push('/rooms/new');

        });

    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando perguntas e respostas" />
                <strong>Crie salas de 1&amp;A ao-vivo</strong>
                <p>tire as dúvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <h1>{value}</h1>
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