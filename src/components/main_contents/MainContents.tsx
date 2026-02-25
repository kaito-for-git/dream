import  Header from './header'
import  MainFeture from './MainFeature'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents(){
    return(
        <div className="maincontents-main">
            <div  className="maincontents-header">
                <Header/>
            </div>
            <div className="maincontents-feature">
                <MainFeture/>
            </div>
        </div>
    )
}

export default MainContents