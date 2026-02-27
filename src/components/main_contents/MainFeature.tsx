import './MainFeature.css'
import {dummydate} from '../Data/dummydate1'
import type { Note } from '../Features/Note'
import { useState } from 'react'

//メインの機能を描画する
function MainFeature(){
    const [note,setNote]  = useState<Note[]>([]);
    
    return(
        <div className="MainFeature-main">
            {/*ダミーデータ表示 */}
            {dummydate.map((note:Note) =>(
                <div key={note.id}>
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>   
                </div>
            ))}
        </div>
    )
}
export default MainFeature