import { Typography } from "@mui/material";
import { motion, useScroll } from "framer-motion";
import React, { FC } from "react";
import styles from "./Home.module.scss";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.diagonalSplitBackground}>
        <Typography
          color="white"
          variant="h1"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Hey, I&apos;m Will
        </Typography>
        <img className={styles.circle} src="/Will_Yuponce.png" alt="Will Yuponce"/>
      </div>
    </div>
  );
};

export default Home;
