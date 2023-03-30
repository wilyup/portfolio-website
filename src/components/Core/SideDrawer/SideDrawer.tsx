import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { ListItemIcon } from "@mui/material";

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
        {
          <ListItem key={"Home"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        }
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
        {this.list(this.state.anchor)}
      </Drawer>
    );
  }
}
