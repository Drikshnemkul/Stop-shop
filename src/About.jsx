import React from "react";
import HeroSection from "./Components/HeroSection";

const About = () => {
  const data = {
    name: "Stop & Shop Mart",
  };
  return (
    <>
      <HeroSection myData={data} />
    </>
  );
};

export default About;
