import Layout from '../../../components/Layout'
import styles from './styles/gdfindiproject.module.css'

function workloadChart(props) {
  return (
    <Layout>
      <div className={styles.nrdocker}>
        <iframe
          className={styles.nrdocker}
          src="http://localhost:1880/workloadgantt"
          title="Workload Gantt Chart"
        ></iframe>
      </div>
    </Layout>
  )
}

export default workloadChart
