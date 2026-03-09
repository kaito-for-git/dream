import './MainContents.css'
import  Header from './header'
import  MainFeature from './MainFeature'
import type{ MainContentProps } from '../Features/Note'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents({editNote,setEditNote,saveHandler}:MainContentProps){
    return(
        <div className="maincontents-main">
            <Header/>
            <MainFeature
                editNote={editNote}
                setEditNote={setEditNote}
                saveHandler={saveHandler}
            />
        </div>
    )
}

export default MainContents