import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Promotions from "@/components/Promotions";
import Reservation from "@/components/Reservation";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

export const Index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Promotions />
      <MenuWrapper />
      <About />
      <Reservation />
    </React.Fragment>
  );
};


export default Index;