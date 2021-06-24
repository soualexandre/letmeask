import logoImg from '../assets/images/logo.svg';
import { Button } from '../Components/Button';
import { RoomCode } from '../Components/RoomCode';
import { useParams } from 'react-router-dom'
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase';
import { Question } from '../Components/Questions'

import '../styles/room.scss';
import { useRoom } from '../hooks/useRoom';


type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const params = useParams<RoomParams>();
    const { user } = useAuth();
    const [newQuestion, setNewQuestion] = useState('');
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);




    async function handleSendQuestion(event: FormEvent) {

        event.preventDefault();
        if (newQuestion.trim() === '') {
            return;
        }
        if (!user) {
            throw Error('You mus be logged in')
        }
        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighLighted: false,
            isAnswered: false,
        }

        await database.ref(`rooms/${roomId}/questions`).push(question);
        setNewQuestion('');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutlined>Encerrar a sala</Button>
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
                                />
                            )
                        })
                    }
                </div>

            </main>
        </div>
    );
}