// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      < Header />
      <Routes>
        <Route path="/" element={<div>Homeの画面（ここにHome.tsxを後で入れる）</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
