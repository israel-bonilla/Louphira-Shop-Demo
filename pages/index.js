import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeCard from '../components/HomeCard'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Louphira Antiques - Curated Vintage and Antique Home Goods</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.cardContainer}>
        <HomeCard title="Shop Vintage Rugs" image="http://links.israelb.xyz/louphira-store/rugs.png" link="rugs" />
        <HomeCard title="Shop Decorative Objects" image="http://links.israelb.xyz/louphira-store/decor.png" link="decorativeobjects" />
        {[4, 3, 5, 6, 2, 1].map(card => (
          <HomeCard key={card} title="" link="" image={`http://links.israelb.xyz/louphira-store/home-img/${card}.png`} />
        ))}
      </main>

      <Footer />
    </div>
  )
}
