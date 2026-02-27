import  Header from './header'
import  MainFeature from './MainFeature'
//メイン画面であるheaderと各機能を描画するためのもの

function MainContents(){
    return(
        <div className="maincontents-main">
            <div>
                <Header/>
                <MainFeature/>
            </div>
        </div>
    )
}

export default MainContents