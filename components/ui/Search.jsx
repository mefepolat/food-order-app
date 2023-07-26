import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className='fixed top-0 left-0 w-screen h-screen z-50 after:content-[""] 
    after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0
    after:opacity-60 grid place-content-center'
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[37.5rem] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title className="text-[2.5rem] text-center">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10"
            />

            <ul className="">
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt="food image"
                    width={48}
                    height={48}
                  ></Image>
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt="food image"
                    width={48}
                    height={48}
                  ></Image>
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image
                    src="/images/f1.png"
                    alt="food image"
                    width={48}
                    height={48}
                  ></Image>
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">10$</span>
              </li>
            </ul>
            <button className="absolute top-4 right-4">
              <GiCancel size={25}
                onClick={() => setIsSearchModal(false)}
                className="hover:text-primary transition-all"
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
