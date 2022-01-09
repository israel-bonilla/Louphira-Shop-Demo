import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"
import styles from "../styles/Rugs.module.scss"

const Rugs = ({ products }) => {
  return (
    <div className={styles.container}>
      <Header />
      <ProductFeed products={products} />
      <Footer />
    </div>
  )
}

export default Rugs

export async function getServerSideProps(context) {
  const products = await fetch(`${process.env.HOST}/api/products/rugs`)
    .then(res => res.json());

  return {
    props: {
      products,
    }
  }
}