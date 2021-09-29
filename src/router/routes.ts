import Home from "../pages/Home/home";
import Users from "../pages/Users/Users";
import UserInfo from "../pages/UserInfo/UserInfo";

export const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/users',
        component: Users,
        exact: true
    },
    {
        path: '/users/:id',
        component: UserInfo,
        exact: true
    }
]