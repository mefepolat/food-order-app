import Logo from "../ui/Logo";
import {FaUserAlt} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />

        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[0.313rem] py-[1.25rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[1.25rem] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className='flex gap-x-4 items-center'>
          <a href="">
            <FaUserAlt className='text-xl' />
          </a>
          <a href="">
            <FaShoppingCart className='text-xl' />
          </a>
          <a href="">
            <FaSearch className='text-xl' />
          </a>
          <a href="#">
            <button className='btn-primary'>Order Online</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
