import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "../Header.css";
import { useState, useRef, useEffect } from "react";
import navLinks from "../assets/data/nav-links.json";
import { cn } from "../lib/utils";



export default function Header({
  hover,
  setHover,
  headerStyles,
  onHoverHeaderBg,
}) {
  
  const [currentHover, setCurrentHover] = useState("");
  const [height, setHeight] = useState(0);
  const divRef = useRef(null);
  console.log(height);
  console.log(currentHover);

  useEffect(() => {
    const fetchHeight = async () => {
      if (divRef.current) {
        setHeight(divRef.current.offsetHeight);
      }
    }
    fetchHeight();
  }, [currentHover]);

  const handleMouseEnter = (e) => {
    const target = e.target.id;
    setHover(true);
    setCurrentHover(navLinks[target]);
    
  };

  const handleMouseLeave = () => {
    setHover(false);
    setCurrentHover("");
    setHeight(0);
  };

  return (
    <nav
      onMouseLeave={handleMouseLeave}
      className={cn(
        "transition-all duration-500 ease-in-out fixed z-10 top-0 left-0 w-full ",
        headerStyles,
        hover && `${onHoverHeaderBg || "bg-[#fff]"} bg-opacity-100`
      )}
    >
      <div className="flex flex-col justify-between ">
        <div className="flex items-center justify-between mx-[20%] py-2 ">
          <a onMouseEnter={handleMouseLeave} href="">
            <FaApple className="text-lg" />
          </a>
          <a
            onMouseEnter={handleMouseEnter}
            href=""
            id="mac"
            className="text-xs"
          >
            Mac
          </a>
          <a
            onMouseEnter={handleMouseEnter}
            href=""
            id="ipad"
            className="text-xs"
          >
            iPad
          </a>
          <a
            onMouseEnter={handleMouseEnter}
            href=""
            id="iphone"
            className="text-xs"
          >
            iPhone
          </a>
          <a
            onMouseEnter={handleMouseEnter}
            href=""
            id="support"
            className="text-xs"
          >
            Support
          </a>
          <a
            onMouseEnter={handleMouseEnter}
            href=""
            id="whereToBuy"
            className="text-xs"
          >
            Where to Buy
          </a>
          <a onMouseEnter={handleMouseLeave} href="">
            <CiSearch className="text-lg" />
          </a>
        </div>

        <div
        id="navMenu"
          
          className={cn(
            "mx-[20%] max-h-0 overflow-hidden transition-all duration-500 ease-in-out",
            hover && `my-20 max-h-[${height}px]`
          )}
        >
          <div className="flex gap-16 " ref={divRef}>
            <div className="">
              {currentHover?.col1?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className={`text-xl my-2 ${
                      index === 0 && "text-xs text-[#848489]"
                    }`}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            <div className="">
              {currentHover?.col2?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className={` text-xs my-2 ${
                      index === 0 && " text-[#848489]"
                    }`}
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>

            <div className="">
              {currentHover?.col3?.map((link, index) => (
                <div className="flex flex-col gap-2">
                  <a
                    href=""
                    className={`text-xs my-2 ${
                      index === 0 && " text-[#848489]"
                    }`}
                  >
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
