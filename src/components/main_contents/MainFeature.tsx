import './MainFeature.css'
import {dummydate} from '../Data/dummydate1'
import type { MainContentProps } from '../Features/Note'

//メインの機能を描画する
function MainFeature({editNote,setEditNote}:MainContentProps){

    return(
        <div className='MainFeature-main'>
            {editNote ? ( //ノートが選択された場合(true)
                <>
                    <input
                        value={editNote.title}
                        onChange={(e)=>
                            setEditNote({
                                ...editNote!,title:e.target.value
                            })
                        }
                    >
                    </input>
                    <input
                        value={editNote.content}
                        onChange={(e)=>
                            setEditNote({
                                ...editNote!,content:e.target.value
                            })
                        }
                    >
                    </input>
                </>
                ):(//ノートが選択されていない場合(false)
                    <p>サイドバーからノートを選択</p>
                )
            }    
        </div>
    )
}
export default MainFeature