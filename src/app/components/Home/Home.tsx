import React, { FC } from "react";
import styles from "./Home.module.scss";
import MyInfo from "./MyInfo/MyInfo"

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.background}>
        <div className={styles.infoCard}>
        <MyInfo/>
        </div>
      </div>
    </div>
  );
};

export default Home;
