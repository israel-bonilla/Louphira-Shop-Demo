import Footer from "../components/Footer"
import Header from "../components/Header"
import ProductFeed from "../components/ProductFeed"
import styles from '../styles/DecorativeObjects.module.scss'

const DecorativeObjects = ({ products }) => {
  return (
    <div className={styles.container}>
      <Header />
      <ProductFeed products={products} />
      <Footer />
    </div>
  )
}

export default DecorativeObjects

export async function getServerSideProps(context) {
  // const products = await fetch(`${process.env.HOST}/api/products/decorobjects`)
  const products = await fetch("http://links.israelb.xyz/louphira-store/api/decorobjs.json")
    .then(res => res.json());

  return {
    props: {
      products,
    }
  }
}