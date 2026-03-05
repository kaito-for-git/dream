import  Header from './header'
import  MainFeature from './MainFeature'
import type{ MainContentProps } from '../Features/Note'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents({editNote,setEditNote}:MainContentProps){
    return(
        <div className="maincontents-main">
            <div>
                <Header/>
                <MainFeature
                    editNote={editNote}
                    setEditNote={setEditNote}
                />
            </div>
        </div>
    )
}

export default MainContents