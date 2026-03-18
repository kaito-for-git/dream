import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainContents from './Main_contents/MainContents'
import SideBar from './Side_Bar/SideBar'
import { useNote } from './Hooks/NoteHooks'

function App() {
  
  const {
    notes,
    editNote,
    setEditNote,
    saveHandler,
    createHandler,
    deleteHandler
  } = useNote(); 
  
  return (
      <BrowserRouter>
        <div className="app-Container">
            < SideBar 
              notes={notes}
              editNote={editNote}
              setEditNote={setEditNote}
              createHandler={createHandler}
              deleteHandler={deleteHandler}
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
