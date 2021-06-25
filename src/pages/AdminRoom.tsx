import logoImg from '../assets/images/logo.svg';
import { Button } from '../Components/Button';
import { RoomCode } from '../Components/RoomCode';
import { useParams, useHistory } from 'react-router-dom'
import deleteImg from '../assets/images/delete.svg'
// import { useAuth } from '../hooks/useAuth'
import { Question } from '../Components/Questions';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';


import '../styles/room.scss';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import { useTheme } from '../hooks/useTheme';


type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const history = useHistory();
    const params = useParams<RoomParams>();
    const { theme, toggleTheme } = useTheme();

    const roomId = params.id;

    const { title, questions } = useRoom(roomId);


    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endedAt: new Date(),
        })
        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
            database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    function handleCheckQuestionAsAnswered(questionId: string) {
        database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });

    }

    function handleHighlightQuestion(questionId: string) {
        database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        });
    }


    return (
        <div id="page-room" className={theme}>
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <button onClick={toggleTheme}>Darkmode</button>
                        <RoomCode code={roomId} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar a sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta</span>}
                </div>
                <br />
                <br />
                <br />

                <div className="question-list">
                    {
                        questions.map(question => {
                            return (
                                <Question
                                    key={question.id}
                                    content={question.content}
                                    author={question.author}
                                    isAnswered={question.isAnswered}
                                    isHighLighted={question.isHighLighted}
                                >
                                    {!question.isAnswered && (
                                        <>
                                            <button
                                                type="button"
                                                onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                            >
                                                <img src={checkImg} alt="marcar pergunta como respondida" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => handleHighlightQuestion(question.id)}
                                            >
                                                <img src={answerImg} alt="dar destaque a pergunta" />
                                            </button>

                                        </>
                                    )}
                                    <button
                                        type="button"
                                        onClick={() => handleDeleteQuestion(question.id)}
                                    >
                                        <img src={deleteImg} alt="remover pergunta" />
                                    </button>

                                </Question>

                            )
                        })
                    }
                </div>

            </main>
        </div>
    );
}