import * as React from "react";
import NavBar from "../NavBar/NavBar";

interface HomeProps {}
interface HomeState {}
export default class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return <NavBar />;
  }
}
