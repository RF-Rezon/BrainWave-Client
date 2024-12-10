
import { default as React } from "react";
import About from "./About";
import Faculty from "./Faculty";
import Hero from "./Hero";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Faculty />
      <StudentFeedback />
      {/* <UpcomingEvents />
      <LatestBlogs /> */}
      
    </>
  );
};

export default Home;
