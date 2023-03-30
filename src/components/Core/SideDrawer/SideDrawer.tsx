import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import { Button, Icon, ListItemIcon } from "@mui/material";
import { routes } from "../../../constants/routes";

type Anchor = "top" | "left" | "bottom" | "right";

interface SideDrawerProps {
  open: boolean;
  closeDrawer: any;
}
interface SideDrawerState {
  top: boolean;
  left: boolean;
  bottom: boolean;
  right: boolean;
  anchor: Anchor;
}

export default class SideDrawer extends React.Component<
  SideDrawerProps,
  SideDrawerState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
      anchor: "left",
    };
  }

  toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      this.setState({ ...this.state, [anchor]: open });
    };

  list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <List>
        {routes.map((route) => (
          <ListItem key={route.display} disablePadding>
            <ListItemButton href={route.path}>
              <ListItemIcon>
                <Icon color="primary">{route.icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={route.display} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  render() {
    return (
      <Drawer
        anchor={this.state.anchor}
        open={this.props.open}
        onClose={this.props.closeDrawer}
      >
        <div style={{ display: "flex" }}>
          <Icon
            onClick={this.props.closeDrawer}
            style={{ marginRight: "auto", padding: "5px" }}
          >
            close
          </Icon>
        </div>
        {this.list(this.state.anchor)}
      </Drawer>
    );
  }
}
