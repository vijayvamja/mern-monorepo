import Home from "src/pages/Home";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    isPrivate: false,
    layout: "public",
  },
];

export default routes;
