import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <header className="bg-[#444444] h-12">
      <nav className="">
        <ul className="flex justify-evenly items-center mx-auto p-3 text-[#dadada]">
          <li ><FaApple className="text-xl"/></li>
          <li className="text-xs">Mac</li>
          <li className="text-xs">iPad</li>
          <li className="text-xs">iPhone</li>
          <li className="text-xs">Support</li>
          <li className="text-xs">Where to Buy</li>
          <li ><CiSearch className="text-xl"/></li>
          </ul> 
      </nav>
    </header>
  );
}
