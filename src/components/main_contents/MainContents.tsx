import  Header from './header'
import  MainFeature from './MainFeature'
import type{ selectNoteIdProps } from '../Features/Note'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents({selectedId}:selectNoteIdProps){
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