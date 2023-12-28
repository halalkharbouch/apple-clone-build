import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import macBookPro from "./assets/macbook-pro-14-and-16_overview__fz0lron5xyuu_og-removebg-preview.png";
import iMac from "./assets/imac__cau1jbsr8lau_og-removebg-preview.png";
import iPhone15 from "./assets/iphone-15-pro_copy.png";
import Card from "./components/Card.jsx";
import cardIphone from "./assets/iphone-15_overview__gm0jynt55aai_og-removebg-preview.png";
import cardIPad from "./assets/promo_ipad__fioegapg12qi_large-removebg-preview.png"
import cardIPadPro from "./assets/promo_ipadpro_refresh__evi9utuixwuq_large-removebg-preview.png"
import m2ChipIcon from "./assets/promo_m2_chip__enw2kz91lsuq_large.png"
import cardMacStudio from "./assets/promo_mac_studio_announce__do7xnc8z5mgm_large-removebg-preview.png"

export default function App() {
  return (
    <div className="font-SF">
      <Header />
      <div className="">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center p-5">
          <Card
            header={"iPhone 15"}
            subheader={"New camera. New design. Newphoria"}
            link={"#"}
            image={cardIphone}
            className="bg-[#fafafa] "
          />
          <Card
            header={"iPad"}
            subheader={"Lovable. Drawable. Magical."}
            link={"#"}
            image={cardIPad}
            className="bg-[#fafafa]"
          />
          <Card
            header={"iPad Pro"}
            subheader={`Supercharged by`}
            headerIcon={m2ChipIcon}
            link={"#"}
            image={cardIPadPro}
            textColor={"text-white"}
            className="bg-[#000000]"
            blurBack={true}
          />
          <Card
            header={"Mac Studio"}
            subheader={"Superchaged by M2 Max and M2 Ultra"}
            link={"#"}
            image={cardMacStudio}
            className="bg-[#fafafa] "
          />
        </div>
      </div>
    </div>
  );
}
