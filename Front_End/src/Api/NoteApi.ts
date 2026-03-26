import client from './client.ts'
import type{ Note, putNote } from '../Features/Note'; // 型定義があればインポート
import { data } from 'react-router-dom';

export const noteApi = {
    //Note新規作成
    createNote:async(newNote:Note):Promise <Note> =>{
        const response =  await client.post('/notes',newNote);
        return response.data
    },

    //NoteAPI取得
    getNote:async(): Promise <Note[]> => {
        const response = await client.get('/notes');
        return response.data
    },

    //NoteAPI送信(保存)
    setNote:async(id:string,data:putNote): Promise <Note> => {
        const response = await  client.put(`/notes/${id}`,data)
        return response.data
    },

    //Note削除
    deleteNote:async(id:string): Promise <void> => {
        await client.delete(`/notes/${id}`)
    }
}