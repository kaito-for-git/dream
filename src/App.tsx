// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MainContents from './components/main_contents/MainContents'
import SideBar from './components/side_bar/SideBar'

function App() {
  return (
    <BrowserRouter>
    <div className="app-Container">
        < SideBar />
      <div className="app-mainContents">
        < MainContents />
      </div>
    </div>
    {/*
      <Routes>
        <Route path="/" element={<div>Homeの画面（ここにHome.tsxを後で入れる）</div>} />
      </Routes>
  */}
    </BrowserRouter>
  )
}

export default App
