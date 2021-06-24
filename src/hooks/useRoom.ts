import { useEffect, useState } from "react";
import { database } from "../services/firebase";

type firebaseQuestions = Record<string, {
    content: string,
    author: {
        name: string,
        avatar: string,
    },
    isHighLighted: boolean,
    isAnswered: boolean,
}>

type QuestionsType = {
    id: string;
    content: string,
    author: {
        name: string,
        avatar: string,
    },
    isHighLighted: boolean,
    isAnswered: boolean,
}
export function useRoom(roomId: string){
    const [questions, setQuestions] = useState<QuestionsType[]>([]);
    const [title, settTitle] = useState('');
    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: firebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighLighted: value.isHighLighted,
                    isAnswered: value.isAnswered,
                }

            });
            settTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })

    }, [roomId]);
    return {questions,  title }
}