import { homedir } from "os";
import * as React from "react";
import NavBar from "../NavBar/NavBar";
import Router from "../Router/Router";

interface RootProps {}
interface RootState {
  name: string;
}
export default class Root extends React.Component<RootProps, RootState> {
  render() {
    return (
      <div>
        <NavBar />
        <Router />
      </div>
    );
  }
}
