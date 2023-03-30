import React, { FC } from "react";
import styles from "./About.module.scss";

interface AboutProps {}

const About: FC<AboutProps> = () => (
  <div className={styles.About} data-testid="About">
    About Component
  </div>
);

export default About;
