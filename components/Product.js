import Image from "next/image"
import { useRecoilState } from "recoil"
import styles from "../styles/Product.module.scss"
import { cartState } from '../atoms/cartAtom'
import { alertsState } from "../atoms/alertAtom"

const Product = ({ id, image, price, title }) => {
  const [cart, setCart] = useRecoilState(cartState);
  const [alert, setAlert] = useRecoilState(alertsState);

  const addToCart = e => {
    e.preventDefault();

    if(cart.map(item => item.id).includes(id)) {
      let itemIndex = cart.indexOf(cart.find(item => item.id === id));
      let updatedItem = {
        ...cart[itemIndex],
        qty: cart[itemIndex].qty + 1,
      };
      let cartCopy = [...cart];

      cartCopy.splice(itemIndex, 1, updatedItem);

      setCart(cartCopy);
      if (!alert) setAlert(true);
    } else {
      setCart([...cart, {
        id, image, price, title, qty: 1,
      }]);
      if (!alert) setAlert(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        {/* <Image src={image} width={400} height={400} layout="responsive" objectFit="contain" alt="" /> */}
        <img src={image} alt="" width="400" height="400" />
      </div>
      <div className={styles.text}>
        <h5>{title}</h5>
        <p>${price}.00</p>
        <div className={styles.actions}>
          <span>View details</span>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Product
