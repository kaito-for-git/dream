import './SideBar.css'
import { useState } from 'react'



function SideBar(){
    const [isOpen,setIsOpen] = useState(true);

    return(
        <div className={`SideBar-Style ${isOpen ? 'open' : 'closed'}`}>
            <button className="Hamburger-Style" onClick={() => setIsOpen(!isOpen)}>
                ☰
            </button>
        </div>
    )
}

export default SideBar