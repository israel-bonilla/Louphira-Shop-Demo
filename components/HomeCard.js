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
      <Image className={styles.image} src={image} width={856} height={650} alt=""/>
      <h1 className={styles.title}>{title}</h1>
    </div>
  )
}

export default HomeCard
