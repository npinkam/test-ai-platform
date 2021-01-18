import Header from '../components/Header'
import SidebarLeft from './SidebarLeft'
import styles from '../components/styles/layout.module.css'

const Layout = (props) => (
  <div className={styles.layoutStyle}>
    <Header />
    <SidebarLeft />
    <div className={styles.contentStyle}>{props.children}</div>
  </div>
)

export default Layout
