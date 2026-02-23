import {Link} from 'react-router-dom'
//Home画面上のヘッダーを作成する
function Header() {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Dream</h1>
        <nav>
          <Link to="/"style={styles.title}>Home</Link>
        </nav>
      </header>
    )
  }

  const styles = {
    header: {
      position:"fixed",
      display: "flex",
      top:0,
      left:0,
      width:"100%",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: "0 16px",
      color:"white",
    },
    title: {
      margin: 0,
    },
    linkStyle:{
      left:16,
    }
  }
  
export default Header