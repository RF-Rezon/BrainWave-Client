import { Outlet } from "react-router-dom";
import { useProfile } from "../Providers/ProfileProvider";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Nav/Nav";

const HomeLayout = () => {
    const { profile } = useProfile();
    console.log("Profile", profile);

  return (
    <div className="max-w-full mx-auto min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
