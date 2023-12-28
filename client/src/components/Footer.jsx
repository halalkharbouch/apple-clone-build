import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#fafafa] text-sm">
      <div className="mx-10 md:mx-40 xl:mx-80 ">
        <div className="grid grid-cols-2 md:grid-cols-4   md:py-5 ">
          <div className="">
            <ul>
              <li className="font-bold text-[#8c8c8d]">Explore</li>
              <li className="text-[#b6b6b8]">Mac</li>
              <li className="text-[#b6b6b8]">iPad</li>
              <li className="text-[#b6b6b8]">iPhone</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-bold text-[#8c8c8d]">Account</li>
              <li className="text-[#b6b6b8]">Manage Your Apple ID</li>
              <li className="text-[#b6b6b8]">icloud.com</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-bold text-[#8c8c8d]">Apple Values</li>
              <li className="text-[#b6b6b8]">Privacy</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="font-bold text-[#8c8c8d]">About Apple</li>
              <li className="text-[#b6b6b8]">Newsroom</li>
              <li className="text-[#b6b6b8]">Apple Leadership</li>
              <li className="text-[#b6b6b8]">Career Opportunities</li>
              <li className="text-[#b6b6b8]">Investors</li>
              <li className="text-[#b6b6b8]">Ethics & compliance</li>
            </ul>
          </div>
        </div>

        <div className="my-5 text-[#b6b6b8] ">
          <p>
            <a href="" className="text-[#2b80d4] hover:underline">
              Find a retailer{" "}
            </a>
            near you
          </p>
        </div>
        <div className="border-b-2"></div>
        <div className="mt-5 pb-5 flex w-full text-[#b6b6b8]">
            <p className="mr-5">Copyright @ 2023 Apple Inc. All rights reserved.</p>
            <p className=""><a className="hover:underline" href="">Terms of Use</a>  |  <a className="hover:underline" href="">Site map</a></p>
            <p className="ml-auto ">Nigeria</p>
        </div>
        
      </div>
    </div>
  );
}
