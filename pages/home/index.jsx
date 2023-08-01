import About from "@/components/About";
import Carousel from "@/components/Carousel";
import Promotions from "@/components/Promotions";
import Reservation from "@/components/Reservation";
import MenuWrapper from "@/components/product/MenuWrapper";

export const Index = () => {
  return (
    <div className=''>
      <Carousel />
      <Promotions />
      <MenuWrapper />
      <About />
      <Reservation />
    </div>
  );
};


export default Index;