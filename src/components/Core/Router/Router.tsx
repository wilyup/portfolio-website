/* existing imports */
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../Home/Home";
import { routes } from "../../../constants/routes";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import Projects from "../../Projects/Projects";
interface RouterProps {}
interface RouterState {}

export default class Router extends React.Component<RouterProps, RouterState> {
  router = createBrowserRouter([
    {
      path: routes[0].path,
      element: <Home />,
    },
    {
      path: routes[1].path,
      element: <About />,
    },
    {
      path: routes[2].path,
      element: <Contact />,
    },
    {
      path: routes[3].path,
      element: <Projects />,
    },
  ]);

  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={this.router} />
      </React.StrictMode>
    );
  }
}
