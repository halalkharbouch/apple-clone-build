import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import macBookProVideo from "../assets/MacBook Pro - Apple (NG).mp4";
import { cn } from "../lib/utils";

export default function MacBookPro() {
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const video = document.getElementById("macBookProVideo");
    if (video) {
      video.play();
    }
  }, []);

  return (
    <div className="">
      <Header hover={hover} setHover={setHover} />
      <div className={cn(hover && 'blur-md')}>
        <div className="mt-20 flex flex-col gap-4 justify-center mx-auto text-center ">
        <div className="animate-slideIn">
          <h2 className="font-semibold text-4xl">MacBook Pro</h2>
          <div className="flex flex-col gap-4 font-bold text-6xl mb-16">
            <h1>Mind-blowing.</h1>
            <h1>Head-turning.</h1>
          </div>
        </div>

        <video
          id="macBookProVideo"
          src={macBookProVideo}
          type="video/mp4"
          autoPlay
          muted
        />

        <button className="text-white bg-[#0071e3] px-8 py-2 mx-auto rounded-full mt-6">Find a Store</button>
        <p className="text-[#86868b] text-lg mb-5 font-semibold">Check back later for availability</p>
      </div>
      </div>
      
    </div>
  );
}
