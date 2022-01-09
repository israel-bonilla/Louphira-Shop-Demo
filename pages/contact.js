import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.scss'

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />

      <h2 className={styles.heading} >Contact us</h2>

      <form className={styles.form}>
        <p>Name *</p>
        <input type="text" />
        <p>Email *</p>
        <input type="text" />
        <p>Subject *</p>
        <input type="text" />
        <p>Message *</p>
        <textarea />
        <button onClick={e => e.preventDefault()}>Submit</button>
      </form>

      <Footer />
    </div>
  )
}

export default Contact
