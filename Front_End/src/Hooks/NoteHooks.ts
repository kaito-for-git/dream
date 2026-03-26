import { useState,useEffect } from "react"
import type{ Note,CopyNote } from '../Features/Note'
import { saveEvent,createNewNote} from '../Features/NoteUtils'

export const useNote = () => {
    const [notes,setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem("notes"); //ローカル版
        return saved ? JSON.parse(saved) :[];
      });//ノートの状態

      const [editNote,setEditNote] = useState<CopyNote>(null);//編集ノートのコピー
      
      //セーブボタンのイベントハンドラ
      const saveHandler = () =>{
        if (!editNote) return;
        setNotes(prev => saveEvent(prev,editNote));
      };
    
      //notesが変更された時に実行する
      useEffect(() => {
        localStorage.setItem("notes",JSON.stringify(notes));//保存
        //ソート
      },[notes]);
    
      //ノート新規作成ボタンが押された時のイベントハンドラ
      const createHandler = () => {
        const newNote = createNewNote()
        setNotes([newNote,...notes]);//新しいノートを追加する
        setEditNote(newNote);
      };
    
      //削除モードで選択されたノートを削除する
      const deleteHandler = (selectedIds:string[]) => {
        if(selectedIds.length === 0)return;
        const newNote = notes.filter(note => !selectedIds.includes(note.id));
        setNotes(newNote);
      };

    return {
      notes,
      editNote,
      setEditNote,
      saveHandler,
      createHandler,
      deleteHandler
    };
}