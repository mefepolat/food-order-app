import Image from "next/image";
import {RiShoppingCart2Fill} from 'react-icons/ri'

const MenuItem = () => {
  return (
    <div className='bg-secondary rounded-3xl'>
        <div className='w-full bg-[#f1f2f3] h-[13.125rem] grid place-content-center rounded-bl-[46px] rounded-tl-2xl rounded-tr-2xl'>
        <div className='relative w-36 h-36 hover:scale-110 transition-all'>
            <Image src='/images/f1.png' alt='' layout='fill' />
        </div>
        </div>
        <div className='p-[25px] text-white'>
            <h4 className='text-xl font-semibold'>Delicious Pizza</h4>
            <p className='text-[15px]'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                 Ex quo itaque porro repudiandae aliquid autem enim reiciendis rerum, 
                 officia, error aut esse. Facere ut in ipsum similique culpa, minima magni.
            </p>
            <div className='flex justify-between items-center mt-4'>
                <span>$20</span>
                <button className='btn-primary !w-10 !h-10 !rounded-full grid place-content-center'><RiShoppingCart2Fill /></button>
            </div>
        </div>
    </div>
  );
};

export default MenuItem;