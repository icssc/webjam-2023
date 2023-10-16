import styles from '../styles/NavBar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#">
            <img src="/logo.svg" alt="ICSSC Logo"/>
          </a>
        </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}
