//Home画面上のヘッダーを作成する
function Header() {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Dream</h1>
        <nav>
          <a href="#" style={{marginLeft:"16px",alignItems:"center"}}>Home</a>
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
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 64px"
    },
    title: {
      margin: 0,
    },
  }
  
export default Header