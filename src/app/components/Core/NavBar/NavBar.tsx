import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SideDrawer from "../SideDrawer/SideDrawer";
import { Tooltip } from "@mui/material";

interface NavBarProps {}
interface NavBarState {
  toggle: boolean;
}
export default class NavBar extends React.Component<NavBarProps, NavBarState> {
  constructor(props: any) {
    super(props);
    this.state = { toggle: false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
            <Tooltip title="Menu">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={this.handleToggle}
              >
                <MenuIcon />
              </IconButton>
              </Tooltip>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Home
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <SideDrawer open={this.state.toggle} closeDrawer={this.handleToggle} />
      </div>
    );
  }
}
