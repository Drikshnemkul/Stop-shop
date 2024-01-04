import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import FeatureProduct from "./Components/FeatureProduct";

const Home = () => {
  const data = {
    name: "Stop & Shop",
  };
  return (
    <>
      <HeroSection myData={data} />
      <FeatureProduct />
      <Services />
    </>
  );
};
export default Home;
