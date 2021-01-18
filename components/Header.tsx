import styles from '../components/styles/header.module.css'

const Header = () => (
  <div className={styles.headerStyle}>
    <div className={styles.headerLeftStyle}>AI Platform for Production Scheduling</div>
    <div className={styles.headerRightStyle}>
      <div className={styles.headerSubStyle}>User: Guest</div>
      <div className={styles.headerSubStyle}>
        <a href="/language">Language</a>
      </div>
      <div className={styles.headerSubStyle}>LEXER RESEARCH</div>
    </div>
  </div>
)

export default Header
