import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Success.module.scss';
import { CheckCircleIcon } from '@heroicons/react/solid';

const Success = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div style={{ display: 'flex' }}>
        <CheckCircleIcon className={styles.icon} />
        <span>Success! Order confirmed</span>
      </div>
      <Footer />
    </div>
  )
}

export default Success
