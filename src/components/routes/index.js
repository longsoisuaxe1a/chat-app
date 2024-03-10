import { FormLayout } from "../Layouts";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ResetPassword from "../pages/ResetPassword";
const publicRoutes = [
  {
    path: '/home',
    component: Home,
    layout: FormLayout
  },
  {
    path: '/login',
    component: Login,
    layout: FormLayout
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword,
    layout: FormLayout
  },{
    path: '/register',
    component: Register,
    layout: FormLayout
  },
 {
    path: "/resetpassword",
    component: ResetPassword,
    layout: FormLayout
  }
];
const privateRoutes = [];
export {publicRoutes, privateRoutes };
