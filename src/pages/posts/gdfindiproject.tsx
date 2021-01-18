import Layout from '../../../components/Layout'
import styles from './styles/gdfindiproject.module.css'

function GDfindiproject(props) {
  return (
    <Layout>
      <div className={styles.nrdocker}>
        <iframe
          className={styles.nrdocker}
          //src="http://localhost:1880/lexerproject"
          src="http://5c0c61c7a70f.ngrok.io/lexerproject"
          title="GD.findi project execution"
        ></iframe>
      </div>
    </Layout>
  )
}

export default GDfindiproject
