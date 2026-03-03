import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainContents from './components/main_contents/MainContents'
import SideBar from './components/side_bar/SideBar'
import { useState } from 'react'
import type{Note ,SelectedIdProps} from './components/Features/Note'
import { dummydate } from './components/Data/dummydate1'

function App() {
  const [selectedId,setSelectedId] = useState<SelectedIdProps>(null);
  const [notes,setNotes] = useState<Note[]>(dummydate);//ノートの状態

  return (
      <BrowserRouter>
        <div className="app-Container">
            < SideBar 
              notes={notes}
              onSelect={setSelectedId}
            />
        
          <div className="app-mainContents">
              < MainContents 
                selectedId={selectedId}
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
