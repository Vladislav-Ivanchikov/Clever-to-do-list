import { HOME_ROUTE, SIGNIN_ROUTE, REG_ROUTE, TASK_ROUTE } from "./utils/const";
import SignIn from "./pages/SignIn/SignIn";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";
import TaskPage from "./pages/TaskPage/TaskPage";

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    Component: <Home />,
  },
  {
    path: TASK_ROUTE,
    Component: <TaskPage />,
  },
];

export const publicRoutes = [
  {
    path: SIGNIN_ROUTE,
    Component: <SignIn />,
  },
  {
    path: REG_ROUTE,
    Component: <Registration />,
  },
];