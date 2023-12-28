import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import macBookPro from "./assets/macbook-pro-14-and-16_overview__fz0lron5xyuu_og-removebg-preview.png";
import iMac from "./assets/imac__cau1jbsr8lau_og-removebg-preview.png";
import iPhone15 from "./assets/iphone-15-pro_copy.png";

export default function App() {
  return (
    <div className="font-SF">
      <Header />
      <div className="flex flex-col gap-4 ">
        <Hero
        textColor={"text-[#1d1d1f]"}
          bg={"bg-[#fafafa]"}
          imageStyle={"w-[60%]"}
          header={"MacBook Pro"}
          subheader={"Mind-blowing. Head-turning"}
          imageDivStyle={"justify-center"}
          link={"#"}
          image={macBookPro}
        />

        <Hero
          textColor={"text-[#1d1d1f]"}
          bg={"bg-[#fafafa]"}
          imageStyle={"w-[60%]"}
          header={"iMac"}
          imageDivStyle={"justify-center"}
          subheader={"Packed with more juice."}
          link={"#"}
          image={iMac}
        />

        <Hero
          textColor={"text-white"}
          bg={"bg-[#000000]"}
          imageStyle={"w-[90%] overflow-hidden"}
          header={"iPhone 15 Pro"}
          imageDivStyle={"justify-end"}
          subheader={"Titanium. So strong. So light. So Pro."}
          link={"#"}
          image={iPhone15}
        />
      </div>
    </div>
  );
}
