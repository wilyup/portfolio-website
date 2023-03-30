import React, { FC } from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.scss";

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <NavBar />
  </div>
);

export default Home;
