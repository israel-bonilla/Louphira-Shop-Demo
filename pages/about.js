import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeCard from '../components/HomeCard';
import styles from '../styles/About.module.scss'

const About = () => {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.info}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde porro consequatur nihil repellat, voluptates laboriosam, tempora eligendi dolor adipisci, sed vero nostrum veniam. Beatae non ullam cupiditate quis, autem rerum minima iusto impedit quas dolorum maxime nesciunt aspernatur totam cum odio inventore soluta dolore!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias possimus ut hic odit aliquam quo itaque repellendus, similique, nulla vel at labore incidunt expedita vero fugiat eveniet blanditiis quibusdam mollitia, magnam esse eius consequatur. Nulla et asperiores necessitatibus sapiente ratione sunt dignissimos, quibusdam laudantium, laborum, neque error omnis? Dignissimos inventore, sit debitis adipisci, cumque odio omnis veritatis dolorum similique consectetur iure voluptatem! Incidunt, doloremque expedita.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, nisi eius? Blanditiis, dolores sit distinctio quae quidem laborum nemo libero id maiores quos dolorum placeat tempora! Nostrum ad nulla delectus!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veritatis delectus soluta, ut doloribus maiores modi mollitia atque sint. Animi architecto officia, maxime voluptatum quas quaerat ut ipsa officiis nesciunt.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo adipisci porro dicta nisi maiores eveniet id animi, iure tenetur officiis aliquam fugiat! Quasi, id voluptatum officia architecto pariatur nam.</p>
        </div>
        <div>
          {[3, 4, 5].map(card => (
            <HomeCard key={card} title="" link="" image={`http://links.israelb.xyz/louphira-store/home-img/${card}.webp`} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About
