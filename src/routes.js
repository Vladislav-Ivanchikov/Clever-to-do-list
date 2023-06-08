import {HOME_ROUTE, SIGNIN_ROUTE, REG_ROUTE, TASK_ROUTE} from "./utils/const";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import Registration from "./pages/registration/Registration";
import TaskPage from "./pages/taskPage/TaskPage";

export const privateRoutes = [
    {
        path: HOME_ROUTE,
        Component:<Home/>
    },
    {
        path: TASK_ROUTE,
        Component:<TaskPage/>
    }
]

export const publicRoutes = [
    {
        path: SIGNIN_ROUTE,
        Component: <SignIn/>
    },
    {
        path: REG_ROUTE,
        Component: <Registration/>
    }
]