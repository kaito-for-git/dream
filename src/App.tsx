import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainContents from './components/main_contents/MainContents'
import SideBar from './components/side_bar/SideBar'
import { useEffect, useState } from 'react'
import type{Note,CopyNote} from './components/Features/Note'
import { dummydate } from './components/Data/dummydate1'
import { saveEvent,createNewNote} from './components/Features/Utils'

function App() {
  const [notes,setNotes] = useState<Note[]>(()=>{
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : dummydate
  });//ノートの状態
  const [editNote,setEditNote] = useState<CopyNote>(null);//編集ノートのコピー
  
  //セーブボタンのイベントハンドラ
  const saveHandler = () =>{
      if (!editNote) return;
      setNotes(prev => saveEvent(prev,editNote));
    } 

  //notesが変更された時に実行する（自動保存)
  useEffect(() => {
    localStorage.setItem("notes",JSON.stringify(notes));
  },[notes])

  //ノート新規作成ボタンが押された時のイベントハンドラ
  const createHandler = () => {
    const newNote = createNewNote()
    setNotes([newNote,...notes]);//新しいノートを追加する
    setEditNote(newNote);
  }

  return (
      <BrowserRouter>
        <div className="app-Container">
            < SideBar 
              notes={notes}
              editNote={editNote}
              setEditNote={setEditNote}
              createHandler={createHandler}
            />
        
          <div className="app-mainContents">
              < MainContents 
                editNote={editNote}
                setEditNote={setEditNote}
                saveHandler={saveHandler}
              />
          </div>
        </div>
        {
        /*
          <Routes>
            <Route path="/" element={<div>Homeの画面（ここにHome.tsxを後で入れる）</div>} />
          </Routes>
        */
        }
        </BrowserRouter>
  )
}

export default App
