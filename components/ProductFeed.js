import Product from "./Product"
import styles from '../styles/ProductFeed.module.scss'

const ProductFeed = ({ products }) => {
  return (
    <div className={styles.container}>
      {products?.map(({ id, image, price, title }) => (
        <Product key={id} id={id} image={image} price={price} title={title}/>
      ))}
    </div>
  )
}

export default ProductFeed
