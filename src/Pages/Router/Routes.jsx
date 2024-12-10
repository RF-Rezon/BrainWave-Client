import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import ErrorPage from "../../Utils/Error/404_Page";
import Register from "../Auth/Register/Register";
import RegisterOtp from "../Auth/RegisterOtp/RegisterOtp";
import StudentLogin from "../Auth/StudentLogin/StudentLogin";
import ForgotPassEmailCheck from "../Auth/ForgotPass/ForgotPassEmailCheck/ForgotPassEmailCheck";
import ForgotPassVerifyOtp from "../Auth/ForgotPass/ForgotPassVerifyOtp/ForgotPassVerifyOtp";
import ForgotPassNewPassword from "../Auth/ForgotPass/ForgotPassNewPassword/ForgotPassNewPassword";
import FacultyMemeber from "../FacultyMemeber/FacultyMemeber";

import Home from "../Home/Home";
import Academic from "../Other/Academic";
import Events from "../Other/Events";
import Blogs from "../Other/Blogs";
import Contact from "../Other/Contact";
import ProfilePage from "../ProfilePage/ProfilePage";
import ContactUs from "../ContactUs/ContactUs";
import StudentFeedbacks from "../Other/StudentFeedbacks";



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
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/login",
        element: <StudentLogin />,
      },
      {
        path: "/auth/register/otp",
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