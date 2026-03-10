import './SideBar.css'
import { useState } from 'react'
import { dummydate } from '../Data/dummydate1';
import type { Note,NoteProps } from '../Features/Note'
import { data } from 'react-router-dom';
import MainFeature from '../main_contents/MainFeature';

//サイドバーの描画をする
function SideBar({notes,editNote,setEditNote,createHandler}:NoteProps){
    const [isOpen,setIsOpen] = useState(false);//サイドバーの状態

    return(
        <div className={`SideBar-Style ${isOpen ? 'open' : 'closed'}`}>
            {/* ハンバーガメニュー */}
            <button className="Hamburger-Style" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>

            {/* ノートの一覧　*/}
            {isOpen ? (
                <>
                    <button 
                    className='New-Note-Button'
                    onClick={createHandler}
                    >
                        + ノート新規作成
                    </button>
                    <p className='Contents-Name'>ノート一覧</p>

                    <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                        <button
                            className={`Notes-Style ${
                            editNote !== null && editNote.id === note.id ? 'selected' : ''
                            }`}
                            onClick={() => setEditNote({ ...note })}
                        >
                            <div className="A-Note-Style">
                            <span className="A-Note-Title-Style">{note.title}</span>
                            <span className="A-Note-Date-Style">
                                {new Date(note.updated).toLocaleString('jp-JP', {
                                month: 'numeric',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                })}
                            </span>
                            </div>
                        </button>
                        </li>
                    ))}
                    </ul>
                </>
            ) : null}
        </div>
    )
}

export default SideBar