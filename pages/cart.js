import { loadStripe } from "@stripe/stripe-js"
import axios from "axios"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { cartState } from "../atoms/cartAtom"
import CartList from "../components/CartList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import styles from '../styles/Cart.module.scss'

const stripePromise = loadStripe(process.env.stripe_public_key);

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const router = useRouter();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    // Call backend to create a checkout session
    const checkoutSession = await axios.post('/api/checkout_sessions', { cart });

    // Redirect user to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if(result.error) alert(result.error.message);
  }

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.checkoutContainer}>
        <div className={styles.cart}>
          <h1 className={styles.heading}>
            {
              cart.length === 0
                ? "Your Shopping Cart is empty."
                : "Shopping Cart"
            }
          </h1>

          {cart.length === 0 && <p className={styles.message}>You have nothing in your shopping cart. <span onClick={() => router.push('/rugs')}>Continue Shopping.</span></p>}

          {cart.length > 0 && (
            <CartList />
          )}
        </div>

        {cart.length > 0 && (
          <div className={styles.checkoutRight}>
            <p className={styles.subtotal}>Subtotal ({cart.reduce((total, item) => total + (item.qty), 0)} items): <span className={styles.subtotalPrice}>${cart.reduce((total, item) => total + (item.price * item.qty), 0)}.00</span>
            </p>
            <button
              onClick={createCheckoutSession}
            >Proceed to checkout</button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  )
}

export default Cart
