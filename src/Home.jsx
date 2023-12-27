import React from "react";
import styled from "styled-components";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";

const Home = () => {
  const data = {
    name: "Stop & Shop",
  };
  return (
    <>
      <HeroSection myData={data} />
      <Services />
    </>
  );
};
export default Home;
