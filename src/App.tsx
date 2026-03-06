import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainContents from './components/main_contents/MainContents'
import SideBar from './components/side_bar/SideBar'
import { useState } from 'react'
import type{Note ,CopyNote} from './components/Features/Note'
import { dummydate } from './components/Data/dummydate1'

function App() {
  const [notes,setNotes] = useState<Note[]>(dummydate);//ノートの状態
  const [editNote,setEditNote] = useState<CopyNote>(null);//編集ノートのコピー

  return (
      <BrowserRouter>
        <div className="app-Container">
            < SideBar 
              notes={notes}
              editNote={editNote}
              setEditNote={setEditNote}
            />
        
          <div className="app-mainContents">
              < MainContents 
                editNote={editNote}
                setEditNote={setEditNote}
              />
          </div>
        </div>
        {/*
          <Routes>
            <Route path="/" element={<div>Homeの画面（ここにHome.tsxを後で入れる）</div>} />
          </Routes>
      */}
        </BrowserRouter>
  )
}

export default App
