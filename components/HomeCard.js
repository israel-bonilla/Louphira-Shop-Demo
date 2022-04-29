import Image from "next/image"
import { useRouter } from "next/router";
import styles from "../styles/HomeCard.module.scss";

const HomeCard = ({ title, image, link }) => {
  const router = useRouter();

  return (
    <div
      className={styles.container}
      onClick={() => router.push(link)}
    >
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          src={image}
          alt=""
        />
        {/* <Image
          className={styles.image}
          src={image}
          width={856}
          height={650}
          alt=""
          layout="responsive"
        /> */}
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default HomeCard
