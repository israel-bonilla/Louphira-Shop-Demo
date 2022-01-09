import { useRecoilValue } from "recoil"
import { cartState } from "../atoms/cartAtom"
import CartItem from "./CartItem"

const CartList = () => {
  const cart = useRecoilValue(cartState);

  return (
    <div>
      {cart.map(({ id, title, image, price, qty }) => (
        <CartItem key={id} id={id} title={title} price={price} image={image} qty={qty} />
      ))}
    </div>
  )
}

export default CartList
