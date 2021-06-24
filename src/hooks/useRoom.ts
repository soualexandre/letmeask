import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type firebaseQuestions = Record<string, {
    content: string,
    author: {
        name: string,
        avatar: string,
    },
    isHighLighted: boolean,
    isAnswered: boolean,
    likes: Record<string, {
        authorId: string;
    }>
}>

type QuestionsType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    },
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
    likeCount: number;
    likeId: string | undefined;

}
export function useRoom(roomId: string) {
    const [questions, setQuestions] = useState<QuestionsType[]>([]);
    const [title, settTitle] = useState('');
    const { user } = useAuth();
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
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key,like ]) => like.authorId === user?.id)?.[0],
                }

            });
            settTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })
        return () =>{
            roomRef.off('value');
        }
    }, [roomId, user?.id]);
    return { questions, title }
}