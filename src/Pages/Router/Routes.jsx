import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import ErrorPage from "../../Utils/Error/404_Page";
import ForgotPassEmailCheck from "../Auth/ForgotPass/ForgotPassEmailCheck/ForgotPassEmailCheck";
import ForgotPassNewPassword from "../Auth/ForgotPass/ForgotPassNewPassword/ForgotPassNewPassword";
import ForgotPassVerifyOtp from "../Auth/ForgotPass/ForgotPassVerifyOtp/ForgotPassVerifyOtp";
import Register from "../Auth/Register/Register";
import RegisterOtp from "../Auth/RegisterOtp/RegisterOtp";
import StudentLogin from "../Auth/StudentLogin/StudentLogin";
import FacultyMemeber from "../FacultyMemeber/FacultyMemeber";

import CheckUser from "../Auth/CheckUser/CheckUser";
import FacultyLogin from "../Auth/FacultyLogin/FacultyLogin";
import Department from "../Departments/Department";
import Home from "../Home/Home";
import Academic from "../Other/Academic";
import Blogs from "../Other/Blogs";
import Contact from "../Other/Contact";
import Events from "../Other/Events";
import StudentFeedbacks from "../Other/StudentFeedbacks";
import ProfilePage from "../ProfilePage/ProfilePage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/academic",
        element: <Academic/>
      },
      {
        path: "/events",
        element: <Events/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/studentFeedbacks",
        element: <StudentFeedbacks/>
      },
      {
        path: "/department",
        element: <Department/>
      },
      {
        path: "/auth/student-register",
        element: <Register />,
      },
      {
        path: "/auth/check",
        element: <CheckUser />,
      },
      {
        path: "/auth/student-login",
        element: <StudentLogin />,
      },
      {
        path: "/auth/faculty-login",
        element: <FacultyLogin />,
      },
      {
        path: "/auth/register/otp",
        element: <RegisterOtp />,
      },
      {
        path: "/auth/",
        element: <RegisterOtp />,
      },
      {
        path: "/auth/reset/emailCheck",
        element: <ForgotPassEmailCheck />,
      },
      {
        path:"/auth/reset/verify-otp",
        element:<ForgotPassVerifyOtp/>
      },
      {
        path:"/auth/reset/newPassword",
        element:<ForgotPassNewPassword/>
      },
      {
        path:"/faculty-member",
        element:<FacultyMemeber/>
      },
      {
        path:"/profile", element:<ProfilePage/>
      }

     
    ],
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

export default router;