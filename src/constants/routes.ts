import React from "react";

interface Route {
  path: string;
  display: string;
  icon: string;
}
export const routes: Route[] = [
  {
    path: "/",
    display: "Home",
    icon: "home",
  },
  {
    path: "/about",
    display: "About",
    icon: "info",
  },
  {
    path: "/contact",
    display: "Contact",
    icon: "contact_page",
  },
  {
    path: "/projects",
    display: "Projects",
    icon: "work",
  },
];
