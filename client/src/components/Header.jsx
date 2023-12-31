import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../Header.css";
import { useState, useRef, useEffect } from "react";
import navLinks from "../assets/data/nav-links.json";

export default function Header({ hover, setHover }) {
  const [isHovered, setIsHovered] = useState({});
  const [currentHover, setCurrentHover] = useState("");
  const [hoverTarget, setHoverTarget] = useState("");
  const [heights, setHeights] = useState({});
  
  const divRefs = {
    mac: useRef(null),
    ipad: useRef(null),
    iphone: useRef(null),
    support: useRef(null),
    whereToBuy: useRef(null),
  }
  
  
  useEffect(() => {
    const newHeights = {};
    for (const item in divRefs) {
      if (divRefs[item].current) {
        newHeights[item] = divRefs[item].current.offsetHeight;
      }
    }
    setHeights(newHeights);
  }, [isHovered]);


  const handleMouseEnter = (item) => {
    setIsHovered({ [item]: true });
  };

  const handleMouseLeave = () => {
    setHover(false)
    setIsHovered({});
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={`transition-all duration-500 text-[#dadada] ease-in-out bg-[#444444] fixed z-10 top-0 left-0 w-full bg-opacity-95 backdrop-blur-md ${
        hover && "bg-[#161617] bg-opacity-100"
      }`}
    >
      <div className="flex flex-col justify-between ">
        <div className="flex items-center justify-between mx-[20%] py-2 ">
          <a href="">
            <FaApple className="text-lg" />
          </a>
          <a
            onMouseEnter={(e) => {
              const target = e.target.id;
              setCurrentHover(navLinks[target]);
              setHoverTarget(target);
              setHover(true);
              handleMouseEnter(target);
            }}
            href=""
            id="mac"
            className="text-xs"
          >
            Mac
          </a>
          <a
            onMouseEnter={(e) => {
              const target = e.target.id;
              setCurrentHover(navLinks[target]);
              setHoverTarget(target);
              setHover(true);
              handleMouseEnter(target);
            }}
            href=""
            id="ipad"
            className="text-xs"
          >
            iPad
          </a>
          <a
            onMouseEnter={(e) => {
              const target = e.target.id;
              setCurrentHover(navLinks[target]);
              setHoverTarget(target);
              setHover(true);
              handleMouseEnter(target);
            }}
            href=""
            id="iphone"
            className="text-xs"
          >
            iPhone
          </a>
          <a
            onMouseEnter={(e) => {
              const target = e.target.id;
              setCurrentHover(navLinks[target]);
              setHoverTarget(target);
              setHover(true);
              handleMouseEnter(target);
            }}
            href=""
            id="support"
            className="text-xs"
          >
            Support
          </a>
          <a
            onMouseEnter={(e) => {
              const target = e.target.id;
              setCurrentHover(navLinks[target]);
              setHoverTarget(target);
              setHover(true);
              handleMouseEnter(target);
            }}
            href=""
            id="whereToBuy"
            className="text-xs"
          >
            Where to Buy
          </a>
          <a href="">
            <CiSearch className="text-lg" />
          </a>
        </div>

        <div
          
          className={`mx-[20%] h-0 overflow-hidden transition-all duration-300 ease-in-out ${
            hover && `my-20 h-[${heights[hoverTarget]}px]`
          }`}
        >
          <div className="flex gap-16 " ref={divRefs[hoverTarget]}>
            <div className="">
              {currentHover?.col1?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a href="" className={`text-xl my-2 ${index === 0 && "text-xs"}`}>
                    {link}
                  </a>
                </div>
              ))}
            </div>

            <div className="">
              {currentHover?.col2?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a href="" className={`text-xl my-2 ${index === 0 && "text-xs"}`}>
                    {link}
                  </a>
                </div>
              ))}
            </div>

            <div className="">
              {currentHover?.col3?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a href="" className={`text-xl my-2 ${index === 0 && "text-xs"}`}>
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
