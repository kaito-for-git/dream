import './MainFeature.css'
import type { MainContentProps } from '../Features/Note'

//メインの機能を描画する
function MainFeature({editNote,setEditNote}:MainContentProps){

    return(
        <div className='MainFeature-main'>
            {editNote ? ( //ノートが選択された場合(true)
                <>
                <div className='Title-and-Save-Box'>
                    <input
                        value={editNote.title}
                        onChange={(e)=>
                            setEditNote({
                                ...editNote!,title:e.target.value
                            })
                        }
                    >
                    </input>

                    <button className='Save-Button'>
                        保存
                    </button>
                </div>
                <div className='TexeArea-Box'>
                    <textarea 
                        value={editNote.content}
                        onChange={(e)=>
                            setEditNote({
                                ...editNote!,content:e.target.value
                            })
                        }
                    >
                    </textarea>
                </div>
                </>
                ):(//ノートが選択されていない場合(false)
                    <p>サイドバーからノートを選択</p>
                )
            }    
        </div>
    )
}
export default MainFeature