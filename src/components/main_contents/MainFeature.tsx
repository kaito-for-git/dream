import './MainFeature.css'
import {dummydate} from '../Data/dummydate1'
import type { SelectNoteIdProps } from '../Features/Note'

//メインの機能を描画する
function MainFeature({selectedId}:SelectNoteIdProps){
    const selectedNote = dummydate.find(s=>s.id ===selectedId);

    return(
        <div className='MainFeature-main'>
            {selectedNote ? (
                <>
                    <h3>{selectedNote.title}</h3>
                    <p>{selectedNote.content}</p>
                </>
                ):(
                    <p>サイドバーからノートを選択</p>
                )
            }    
        </div>
    )
}
export default MainFeature