import { Menu } from "../../types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 4,
    title: "Showcase",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Members",
        path: "/members",
        newTab: false,
      },
      {
        id: 42,
        title: "Projects",
        path: "/projects",
        newTab: false,
      },
    ],
  },
];
export default menuData;
