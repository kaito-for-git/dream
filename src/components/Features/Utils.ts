import type { Note } from "./Note";
//セーブボタンを押した時のイベントハンドラ
export function saveEvent(notes:Note[],editNote:Note){
    const updateNotes = notes.map(note =>{
        if(note.id === editNote.id){
            return{
                ...editNote,updated :Date.now()
            }
        }
        return note
    })
    return updateNotes
}

//新しいノートを作成する
export function createNewNote(){
    const newNote:Note = {
        id : crypto.randomUUID(),
        title : "",
        content : "",
        created : Date.now(),
        updated : Date.now()
    }
    
    return newNote
}