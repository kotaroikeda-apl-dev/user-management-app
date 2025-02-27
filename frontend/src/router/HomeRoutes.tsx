import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagemennt } from "../components/pages/UserManagemennt";
import { Page404 } from "../components/pages/Page404";
export const HomeRoutes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/setting",
    exact: false,
    element: <Setting />,
  },
  {
    path: "/user_management",
    exact: false,
    element: <UserManagemennt />,
  },
  {
    path: "*",
    exact: false,
    element: <Page404 />,
  },
]