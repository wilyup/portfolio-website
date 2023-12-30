import React, { FC } from "react";
import styles from "./MyInfo.module.scss";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";

interface MyInfoProps {}

const MyInfo: FC<MyInfoProps> = () => (
  <div className={styles.MyInfo} data-testid="MyInfo">
    <div className={styles.textBlock}>
      <Typography color="white" variant="h2" component="div">
        Hi 👋🏼,
        <br />
        I&#39;m Will Yuponce
        <br />
        Software Engineer
      </Typography>
      <div className={styles.iconGroup}>
        <Typography
          className={styles.contactRow}
          color="white"
          variant="subtitle1"
          component="div"
        >
          <PhoneIcon className={styles.contactRow} sx={{ width: 20, height: 20 }} />
          916-769-4868
        </Typography>
        <Typography
          className={styles.contactRow}
          color="white"
          variant="subtitle1"
          component="div"
        >
          <EmailIcon className={styles.contactRow} sx={{ width: 20, height: 20 }} />{" "}
          Will.Yuponce@gmail.com
        </Typography>
        <Typography
          className={styles.contactRow}
          color="white"
          variant="subtitle1"
          component="div"
        >
          <HomeIcon className={styles.contactRow} sx={{ width: 20, height: 20 }} />
          Arlington, VA
        </Typography>
      </div>
    </div>
    <Avatar
      className={styles.avatar}
      sx={{ width: 350, height: 350 }}
      src="./will_yuponce.png"
      alt="Will Yuponce"
    />
  </div>
);

export default MyInfo;
