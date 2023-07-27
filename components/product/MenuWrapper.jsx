import Title from "../ui/Title";
import MenuItem from "./MenuItem";


const MenuWrapper = () => {
  return (
    <div className='container mx-auto text-center flex flex-col items-center mb-16'>
        <Title className='text-[2.5rem]'>Our Menu</Title>
        <div className='mt-10'>
            <button className='px-6 py-2 rounded-3xl bg-secondary text-white '>All</button>
            <button className='px-6 py-2 rounded-3xl'>Burger</button>
            <button className='px-6 py-2 rounded-3xl'>Pizza</button>
            <button className='px-6 py-2 rounded-3xl'>Drink</button>
        </div>
        <div className='mt-8'>
          <MenuItem />
        </div>
    </div>
  );
};

export default MenuWrapper;