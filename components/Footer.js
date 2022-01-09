import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faPinterest } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.scss';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  return (
    <footer className={styles.container}>
      {/* Socials (ig, fb, pin) */}
      <div className={styles.socials}>
        <FontAwesomeIcon icon={faInstagram} styles={{ fontSize: "14px" }} />
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faPinterest} />
      </div>

      {/* Shipping + Returns */}
      <p className={styles.policy}
        onClick={() => router.push('/shipping-returns')}
      >Shipping + Returns</p>

      {/* Subscribe to our newsletter (Sign up) */}
      <p className={styles.newsletter}>Subscribe to our newsletter</p>

      <form className={styles.form}>
        <input type="text" placeholder="Email Address" />
        <button onClick={e => e.preventDefault()}>Sign up</button>
      </form>
    </footer>
  )
}

export default Footer
