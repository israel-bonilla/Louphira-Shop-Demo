import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Success.module.scss';

const Canceled = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ display: 'flex' }}>
        <span>Order checkout has been canceled.</span>
      </div>
      <Footer />
    </div>
  )
}

export default Canceled
