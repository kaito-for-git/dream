import {Link} from 'react-router-dom'
import './header.css'
//Home画面上のヘッダーを作成する
function Header() {
    return (
      <header className="header">
        <h1 className="title">Dream</h1>
        <nav>
          <Link to="/"className="tab">Home</Link>
        </nav>
      </header>
    )
  }
  
export default Header