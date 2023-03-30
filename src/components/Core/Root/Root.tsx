import * as React from "react";
import NavBar from "../NavBar/NavBar";

interface RootProps {}
interface RootState {}
export default class Root extends React.Component<RootProps, RootState> {
  render() {
    return (
      <div>
        <NavBar />
        <h1>Router Provider goes here</h1>
      </div>
    );
  }
}
