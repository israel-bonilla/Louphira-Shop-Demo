import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartAtom';
import styles from '../styles/CartItem.module.scss';

const CartItem = ({ id, title, image, price, qty }) => {
  const [cart, setCart] = useRecoilState(cartState);

  const removeItem = e => {
    e.preventDefault();

    let itemIndex = cart.indexOf(cart.find(item => item.id === id));
    let cartCopy = [...cart];
    cartCopy.splice(itemIndex, 1);
    setCart(cartCopy);
  }

  const changeQty = change => {
    if(qty === 1 && change === -1) return;
    let itemIndex = cart.indexOf(cart.find(item => item.id === id));
    let updatedItem = {
      id, image, price, title,
      qty: cart[itemIndex].qty + change,
    };
    let cartCopy = [...cart];

    cartCopy.splice(itemIndex, 1, updatedItem);

    setCart(cartCopy);
  }

  return (
    <div className={styles.container}>
      <div>
        {/* <Image src={image} width={400} height={400} layout="responsive" objectFit="contain" alt="" /> */}
        <img src={image} height={400} alt="" />
      </div>
      <div className={styles.info}>
        <h4><span style={{ fontWeight: 600 }}>({qty})</span>{" "}{title}</h4>
        <p>${price}.00 {qty > 1 && `× (${qty}) = $${price * qty}.00`}</p>
      </div>
      <div className={styles.actions}>
        <div className={styles.qty}>
          <p>Qty:</p>
          <div className={styles.qtyActions}>
            <button disabled={qty === 1} onClick={() => changeQty(-1)}>-</button>
            <p>{qty}</p>
            <button onClick={() => changeQty(1)}>+</button>
          </div>
        </div>
        <button onClick={removeItem} >Remove from Cart</button>
      </div>
    </div>
  )
}

export default CartItem
