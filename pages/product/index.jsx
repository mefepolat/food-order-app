import Header from "@/components/layout/Header";
import Title from "@/components/ui/Title";
import Image from "next/image";

const Index = () => {
  return (
    <div className="flex items-center h-screen gap-20 py-20 flex-wrap">
      <div className="relative md:flex-1 w-[80%] h-[80%] mx-20 py-10">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit='contain'></Image>
      </div>
      <div className='md:flex-1 md:text-start text-center'>
        <Title className="text-[2.5rem]">Good Pizza</Title>
        <span className='text-primary text-2xl font-bold underline-offset-1 my-4 inline-block'>$10</span>
        <p className='text-sm my-4 md:pr-24'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          error necessitatibus commodi tempora. Porro officia fugit quod
          corporis illum culpa repellat neque nihil, maiores obcaecati quis
          velit voluptas cupiditate provident.
        </p>
        <div>
          <h4 className='text-xl font-bold'>Choose the size</h4>
          <div className='flex items-center gap-x-20 md:justify-start justify-center'>
          <div className="relative w-12 h-12">
            <Image src="/images/size.png" alt="" layout="fill"></Image>
            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
          </div>
          <div className="relative w-16 h-16">
            <Image src="/images/size.png" alt="" layout="fill"></Image>
            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
          </div>
          <div className="relative w-20 h-20">
            <Image src="/images/size.png" alt="" layout="fill"></Image>
            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
          </div>
          </div>
        </div>
        <div className='flex gap-x-4 my-6 md:justify-start justify-center'>
            <label className='flex items-center gap-x-1'>
                <input type='checkbox' className='w-5 h-5 accent-primary' />
                <span className='text-sm font-semibold'>green peppers</span>
            </label>
            <label className='flex items-center gap-x-1'>
                <input type='checkbox' className='w-5 h-5 accent-primary' />
                <span className='text-sm font-semibold'>mushrooms</span>
            </label>
        </div>
        <button className='btn-primary mt-6'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Index;
