import illustrationImg from '../assets/images/illustration.svg'
import logo from '../assets/images/logo.svg';
import { Button } from '../Components/Button'

import '../styles/auth.scss';
export function NewRoom() {
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
                        Que entar em uma sala existente <a href="#">Clique aaqui</a>
                    </p>
                </div>
            </main>
        </div>
    );
}