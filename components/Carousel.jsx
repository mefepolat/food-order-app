import Image from "next/image";
import Title from "./ui/Title";

const Carousel = () => {
  return (
    <div className='h-screen w-full container mx-auto -mt-[88px]'>
        <div className='absolute top-0 left-0 w-full h-full'>
      <div className='relative h-full w-full'>
        <Image src='/images/hero-bg.jpg' alt='' layout='fill' objectFit='cover' ></Image>
      </div>
      </div>
      <div className='relative text-white top-40 flex flex-col items-start gap-y-10'>
        <Title className={`text-[3.5rem]`}>Fast Food Restaurant</Title>
        <p className='text-sm sm:w-2/5 w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, aut consequuntur deleniti eaque ex repellat, 
            obcaecati voluptates assumenda numquam aliquam voluptatum 
            quae culpa doloremque consequatur magnam est ut accusamus eos.</p>
            <button className='btn-primary'>Order Now</button>
      </div>
    </div>
  );
};

export default Carousel;
