import Image from "next/image"
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { cartState } from "../atoms/cartAtom";
import styles from '../styles/Header.module.scss';
import Alert from "./Alert";

const Header = () => {
  const router = useRouter();
  const cart = useRecoilValue(cartState);

  return (
    <header className={styles.container}>
      <Alert />

      <div className={styles.logo}>
        <Image
          src="http://links.israelb.xyz/louphira-store/louphira_logo_transparent.png" 
          width={250}
          height={55}
          onClick={() => router.push('/')}
        />
      </div>

      <nav className={styles.navigation}>
        <ul>
          <li onClick={() => router.push('/')}>Home</li>
          <li className={styles.folder}>
            <div onClick={() => router.push('rugs')}>Shop</div>
            <div className={styles.folderItems}>
              <div className={styles.folderItem} onClick={() => router.push('rugs')}>Vintage Rugs</div>
              <div className={styles.folderItem} onClick={() => router.push('decorativeobjects')}>Decorative Objects</div>
            </div>
          </li>
          <li onClick={() => router.push('about')}>About</li>
          <li onClick={() => router.push('contact')}>Contact</li>
          <li
            onClick={() => router.push('cart')}
          >Cart {cart.length > 0 && `(${cart.reduce((total, item) => total + (item.qty), 0)})`}</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
