
import { default as React } from "react";
import About from "./About";
import Faculty from "./Faculty";
import Hero from "./Hero";
import LatestBlogs from "./LatestBlogs";
import StudentFeedback from "./StudentFeedback";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Faculty />
      <StudentFeedback />
      <LatestBlogs />
      
    </>
  );
};

export default Home;
