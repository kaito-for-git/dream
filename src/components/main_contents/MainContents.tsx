import  Header from './header'
import  MainFeature from './MainFeature'
import type{ SelectNoteIdProps } from '../Features/Note'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents({selectedId}:SelectNoteIdProps){
    return(
        <div className="maincontents-main">
            <div>
                <Header/>
                <MainFeature
                    selectedId={selectedId}
                />
            </div>
        </div>
    )
}

export default MainContents