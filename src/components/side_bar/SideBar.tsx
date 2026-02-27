import './SideBar.css'
import { useState } from 'react'
import { dummydate } from '../Data/dummydate1';
import type { Note } from '../Features/Note'
import { data } from 'react-router-dom';

//サイドバーの描画をする
function SideBar(){
    const [isOpen,setIsOpen] = useState(false);//サイドバーの状態
    const [note,setNotes] = useState<Note[]>(dummydate);//ノートの状態保存

    return(
        <div className={`SideBar-Style ${isOpen ? 'open' : 'closed'}`}>
            
            <button className="Hamburger-Style" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            {isOpen &&
                dummydate.map((note) =>(
                    <button 
                        key={note.id}
                        className='Notes-Style' 
                    >
                        <div className="A-Note-style">
                            <h4>{note.title}</h4>
                            <small>
                                {new Date(note.updated).toLocaleString('jp-JP',{
                                    month: 'numeric',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                            })}</small>
                        </div>
                    </button>
                ))
            }
        </div>
    )
}

export default SideBar