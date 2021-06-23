import logoImg from '../assets/images/logo.svg';
import { Button } from '../Components/Button';
import {RoomCode} from '../Components/RoomCode';
import {useParams} from 'react-router-dom'
import { useState } from 'react';

import '../styles/room.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();

    const [newQuestion, setNewQuestion] = useState('');

    const rooID = params.id;
    async function handleSendQuestion(){

    }
    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="Letmeask" />
                    <RoomCode code={rooID}/>
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
                <form>
                    <textarea
                        placeholder="O que você quer pergunatar?"
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