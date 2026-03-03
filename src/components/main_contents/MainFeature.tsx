import './MainFeature.css'
import {dummydate} from '../Data/dummydate1'
import type { selectNoteIdProps } from '../Features/Note'
import { useState } from 'react'

//メインの機能を描画する
function MainFeature({selectedId}:selectNoteIdProps){
    const selectNote = dummydate.find(s=>s.id ===selectedId);
    
    return(
        <div>
            {selectNote ? (
                <>
                    <h3>{selectNote.title}</h3>
                    <p>{selectNote.content}</p>
                </>
                ):(
                    <p>サイドバーからノートを選択</p>
                )
            }    
        </div>
    )
}
export default MainFeature