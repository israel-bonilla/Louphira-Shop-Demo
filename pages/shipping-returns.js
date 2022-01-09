import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from "../styles/ShippingReturns.module.scss"

const ShippingReturns = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.heading}>Shipping + Returns</h1>

        <h2 className={styles.subheading}>Shipping</h2>
        <p className={styles.info}>
        Free domestic shipping to the continental US.

        International shipping is available, please contact us for a quote.  For all orders shipping outside the US the recipient is responsible for any taxes or duties incurred.  All international orders are considered final sale once shipped and are ineligible for refund or exchange.

        Louphira is not responsible for lost or stolen packages, once the package shows as delivered we are unable to obtain additional information from the carrier.  

        Orders will generally be shipped within seven (7) business days.  Please note due to COVID-19 it may take longer to ship your order as we may encounter unexpected delays.  An e-mail will be sent with tracking information once shipped.
        </p>

        <h2 className={styles.subheading}>Returns</h2>
        <p className={styles.info}>
        We want our customers to be satisfied with their purchase, as such returns are accepted from domestic website sales within seven (7) days of receipt of item.  

        The customer is liable for all fees to properly pack and ship product back to Louphira.  Once item is received by Louphira in the same condition as it was shipped a refund will be issued less an item specific re-stocking fee (see item description for details).  

        Customer must contact Louphira within the seven (7) day return window, returns will not be accepted after the seven day window ends.  International sales are not eligible for return/refund.
        </p>
      </main>
      
      <Footer />
    </div>
  )
}

export default ShippingReturns
