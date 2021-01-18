import Layout from '../../components/Layout'
import styles from './styles/index.module.css'

const Index = () => (
  <Layout>
    <div className={styles.welcome}>Welcome to AI Platform</div>
    <div className={styles.dataPanel}>
      <div className={styles.topDataPanel}>
        <div className={styles.topDataPanelLeft}>Current User: 42</div>
        <div className={styles.topDataPanelRight}>
          <div className={styles.topDataPanelRightSub}>Year: 2021</div>
          <div className={styles.topDataPanelRightSub}>Data: 11</div>
        </div>
      </div>
      <div className={styles.bottomDataPanel}>
        <div className={styles.bottomDataPanelSub}>
          <img src="/chart1.png" alt="chart1" width="250px" />
        </div>
        <div className={styles.bottomDataPanelSub}>
          <img src="/chart2.png" alt="chart2" width="250px" />
        </div>
        <div className={styles.bottomDataPanelSub}>
          <img src="/chart3.png" alt="chart3" width="250px" />
        </div>
      </div>
    </div>
  </Layout>
)

export default Index
