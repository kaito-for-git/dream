import './MainFeature.css'
import {dummydate} from '../Data/dummydate1'
import type { Note } from '../Features/Note'
import { useState } from 'react'

type Props ={
    selectedId:string | null;
}

//メインの機能を描画する
function MainFeature({selectedId}:Props){
    //const [note,setNote]  = useState<Note[]>();
    const selectNote = dummydate.find(s => s.id === selectedId);
    
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