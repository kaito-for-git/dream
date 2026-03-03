import './SideBar.css'
import { useState } from 'react'
import { dummydate } from '../Data/dummydate1';
import type { Note,NoteProps } from '../Features/Note'
import { data } from 'react-router-dom';
import MainFeature from '../main_contents/MainFeature';

//サイドバーの描画をする
function SideBar({notes,onSelect}:NoteProps){
    const [isOpen,setIsOpen] = useState(false);//サイドバーの状態

    return(
        <div className={`SideBar-Style ${isOpen ? 'open' : 'closed'}`}>
            <button className="Hamburger-Style" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
            {notes.map((note) =>(
                <button 
                key={note.id}
                className='Notes-Style' 
                onClick={() => onSelect(note.id)}//main featureに描画するノートのidを渡す
                >
                <div className="A-Note-style">
                    <h4>{note.title}</h4>
                    <small>
                        {new Date(note.updated).toLocaleString('jp-JP',{
                            month: 'numeric',
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit',
                        })}
                    </small>
                </div>
            </button>
            ))}
        </div>
    )
}

export default SideBar