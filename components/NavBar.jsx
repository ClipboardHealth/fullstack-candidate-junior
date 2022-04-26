import styles from "./NavBar.module.css"
function NavBar() {
  return (
    <div className={styles.main}>
        <h3 className={styles.logo}>HEALTH EXPLORE</h3>
        <nav className={styles.nav}>
            <a className={styles.navitem} href="#profile">PROFILE</a>
            <a className={styles.navitem} href="#jobs">JOBS</a>
            <a className={styles.navitem} href="#professional-network">PROFESSIONAL NETWORK</a>
            <a className={styles.navitem} href="#lounge">LOUNGE</a>
            <a className={styles.navitem} href="#salary">SALARY</a>
        </nav>
        <div className={styles.account}>
            <button>CREATE JOB</button>
            <a>JO</a>
            <a>LOGOUT</a>
        </div>
    </div>
  )
}

export default NavBar