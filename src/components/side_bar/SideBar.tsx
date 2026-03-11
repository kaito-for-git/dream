import './SideBar.css'
import { useEffect, useState } from 'react'
import { dummydate } from '../Data/dummydate1';
import type { Note,NoteProps } from '../Features/Note'
import { data } from 'react-router-dom';
import MainFeature from '../main_contents/MainFeature';
import {deleteHandler} from './SideBarHandler'

//サイドバーの描画をする
function SideBar({notes,editNote,setEditNote,createHandler}:NoteProps){
    const [isOpen,setIsOpen] = useState(false);                         //サイドバーの状態
    const [isDeleteMode,setIsDeleteMode] = useState<boolean>(false);    //削除モードの状態
    const [selectedIds,setSelectedIds] = useState<string[]>([]);//選択されたノートを持つ関数

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
                        ＋ ノート新規作成
                    </button>

                    <div className='Contents-and-Delete'>
                        {/*デリートモード時にキャンセルボタンを表示する */}
                        {isDeleteMode ?
                        <button 
                        className='Cancel-Button'
                        onClick={() =>{ setIsDeleteMode(false), setSelectedIds([])}}>
                            ❌中止
                        </button>
                        :''
                        }

                        <p className='Contents-Name'>📖ノート一覧</p>
                        
                        <button 
                        className= {`Delete-Button ${isDeleteMode ? 'on':''}`}
                        onClick={() => (!isDeleteMode)
                            ?setIsDeleteMode(true)
                            :deleteHandler(selectedIds,notes)
                        }
                        >
                            🗑️削除
                        </button>
                    </div>

                    <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                        <button
                            className={`Notes-Style
                            ${isDeleteMode ? 'Delete-Mode' :'' }
                            ${isDeleteMode
                                ?(selectedIds.includes(note.id)? 'selected':'')
                                :(editNote !== null && editNote.id === note.id ? 'selected' : '')}
                            `}
                            onClick={() => isDeleteMode //削除モード
                                ?selectedIds.find(n => n === note.id)
                                    ?setSelectedIds(selectedIds.filter(ids => ids !== note.id))//選択を解除したいとき
                                    :setSelectedIds(prev => [...prev,note.id])//ケツからpush
                                :setEditNote({ ...note })}
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