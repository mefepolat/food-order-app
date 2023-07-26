import { useState } from "react";
import Logo from "../ui/Logo";
import {FaUserAlt} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaSearch} from 'react-icons/fa';
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
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
            <FaUserAlt className='text-xl hover:text-primary transition-all' />
          </a>
          <a href="">
            <FaShoppingCart className='text-xl hover:text-primary transition-all' />
          </a>
          <button>
            <FaSearch onClick={() => setIsSearchModal(true)} className='text-xl hover:text-primary transition-all' />
          </button>
          <a href="#">
            <button className='btn-primary'>Order Online</button>
          </a>
        </div>
      </div>
      {isSearchModal && (
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
          <div className=''>
            <Title className='text-9xl'>Search</Title>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default Header;
