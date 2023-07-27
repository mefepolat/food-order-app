import Image from "next/image";
import Title from "./ui/Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    customPaging: (i) => (
        <div className='w-3 h-3 border bg-white rounded-full mt-10'></div>
    ),
    appenDots: (dots) => (
        <div>
            <ul>
                {dots}
            </ul>
        </div>
    )
  };
  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          ></Image>
        </div>
       
      </div>
      <Slider {...settings}>
        <div>
        <div className="mt-48 text-white flex flex-col items-start gap-y-10">
              <Title className={`text-[3.5rem]`}>Fast Food Restaurant</Title>
              <p className="text-sm sm:w-2/5 w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                aut consequuntur deleniti eaque ex repellat, obcaecati
                voluptates assumenda numquam aliquam voluptatum quae culpa
                doloremque consequatur magnam est ut accusamus eos.
              </p>
              <button className="btn-primary">Order Now</button>
              </div>
        </div>
        <div>
        <div className="mt-48 text-white flex flex-col items-start gap-y-10">
              <Title className={`text-[3.5rem]`}>Fast Food Restaurant</Title>
              <p className="text-sm sm:w-2/5 w-full">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
                aut consequuntur deleniti eaque ex repellat, obcaecati
                voluptates assumenda numquam aliquam voluptatum quae culpa
                doloremque consequatur magnam est ut accusamus eos.
              </p>
              <button className="btn-primary">Order Now</button>
              </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
