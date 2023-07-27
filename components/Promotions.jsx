import Image from "next/image";
import Title from "./ui/Title";
import {FaShoppingCart} from 'react-icons/fa';

const PromotionItem = () => {
    return (
        <div className='bg-secondary flex-1 rounded-md py-[1.25rem] px-[0.938rem] flex items-center gap-x-4'>
            <div className='relative md:w-44 md:h-44 w-36 h-36 after:content-[""] border-[0.313rem] rounded-full border-primary overflow-hidden '>
                <Image src='/images/o1.jpg' alt='' layout='fill' objectFit='cover' className='hover:scale-110 transition-all' />
            </div>
            <div className='text-white'>
                <Title className='text-2xl'>Tasty Thursdays</Title>
                <div className='font-dancing my-1'>
                    <span className='text-[2.5rem]'>20%</span>
                    <span className='text-sm inline-block ml-1'>Off</span>
                </div>
                <button className='btn-primary flex items-center gap-x-2'>Order Now <FaShoppingCart size={20}></FaShoppingCart></button>
            </div>
        </div>
    )
}

const Promotions = () => {
  return (
    <div className='flex justify-between container mx-auto py-[5.625rem] gap-5 flex-wrap'>
        <PromotionItem />
        <PromotionItem />
    </div>
  );
};

export default Promotions;