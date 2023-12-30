import React, { FC } from "react";
import styles from "./MyInfo.module.scss";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

interface MyInfoProps {}

const MyInfo: FC<MyInfoProps> = () => (
  <div className={styles.MyInfo} data-testid="MyInfo">
    <Card variant="outlined" className={styles.infoCard}>
      <CardContent className={styles.infoCardContent}>
        <Avatar
          sx={{ width: 200, height: 200 }}
          src="/will_yuponce.jpeg"
          alt="Will Yuponce"
        />

<Typography color="white" variant="h2" component="div">
          Will Yuponce
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export default MyInfo;
