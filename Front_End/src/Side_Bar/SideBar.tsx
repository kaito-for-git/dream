import './SideBar.css'
import type { SideBarProps } from '../Features/Note'
import { useSideBar } from '../Hooks/SideBarHooks'

//サイドバーの描画をする
function SideBar({notes,editNote,setEditNote,createHandler,deleteHandler}:SideBarProps){
    const {        
        isOpen,
        setIsOpen,
        isDeleteMode,
        onDeleteButtonClick,
        getNoteButtonStyle,
        onSelectNote,
        getMDHM} = useSideBar(editNote,setEditNote,deleteHandler);

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
                        onClick={() => onDeleteButtonClick()}>
                            ❌中止
                        </button>
                        :null
                        }

                        <p className='Contents-Name'>📖ノート一覧</p>
                        
                        <button 
                        className= {`Delete-Button ${isDeleteMode ? 'on':''}`}
                        onClick={() => onDeleteButtonClick()}
                        >
                            🗑️削除
                        </button>
                    </div>

                    {/* ノートの一覧 */}
                    <ul>
                    {notes.map((note) => (
                        <li key={note.id}>
                        <button
                            className={getNoteButtonStyle(note.id)}
                            onClick={() => onSelectNote(note)}
                            >
                        <div className="A-Note-Style">
                            <span className="A-Note-Title-Style">{note.title}</span>
                            <span className="A-Note-Date-Style">
                                {getMDHM(note.updated)}
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