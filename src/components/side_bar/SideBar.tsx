import './SideBar.css'
import { useState } from 'react'

//サイドバーの描画をする
function SideBar(){
    const [isOpen,setIsOpen] = useState(false);

    return(
        <div className={`SideBar-Style ${isOpen ? 'open' : 'closed'}`}>
            <button className="Hamburger-Style" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        </div>
    )
}

export default SideBar