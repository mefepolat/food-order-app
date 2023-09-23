import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  function NextBtn({ onClick }) {
    return (
      <button className="" onClick={onClick}>
        <IoIosArrowForward className="absolute -bottom-12 left-1/2 bg-primary items-center justify-center w-10 h-10 rounded-full text-white" />
      </button>
    );
  }
  function PreBtn({ onClick }) {
    return (
      <button className="" onClick={onClick}>
        <IoIosArrowBack className="absolute -bottom-12 right-1/2 bg-primary items-center justify-center w-10 h-10 rounded-full text-white mr-2" />
      </button>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PreBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mb-20 mt-16">
      <Title className="text-[40px] text-center">What Our Customers Say</Title>

      <Slider {...settings}>
        <CustomerItem imgSrc="/images/client1.jpg" />

        <CustomerItem imgSrc="/images/client2.jpg" />
        <CustomerItem imgSrc="/images/client1.jpg" />

        <CustomerItem imgSrc="/images/client2.jpg" />
      </Slider>
    </div>
  );
};

export default Customers;
