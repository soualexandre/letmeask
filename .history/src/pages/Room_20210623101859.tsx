import logoImg from '../assets/images/logo.svg';
import { Button } from '../Components/Button';
import {RoomCode} from '../Components/RoomCode';
import {useParams} from 'react-router-dom'
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase';


import '../styles/room.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();
    const {user} = useAuth();
    const [newQuestion, setNewQuestion] = useState('');

    const roomId = params.id;
    async function handleSendQuestion(){
        if(newQuestion.trim() === ''){
            return;
        }
        if(!user){
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
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={roomId}/>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala React Q&A</h1>
                    <span>4 perguntas</span>
                </div>
               <br/>
               <br/>
               <br/>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                        placeholder="O que você quer pergunatar?"
                        onChange={event=>setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />
                    <div className="form-footer">
                        <span>Para Enviar uma pergunta <button>faça seu login</button></span>
                        <Button type="submit">
                            Enviar pergunta
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}