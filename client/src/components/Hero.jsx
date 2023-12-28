import React from "react";

export default function Hero({
  header,
  subheader,
  link,
  image,
  bg,
  textColor,
  imageStyle,
  imageDivStyle,
}) {
  return (
    <div
      className={`flex flex-col gap-4 mx-auto items-center py-10 ${bg} w-full`}
    >
      <h1 className={`${textColor} font-bold text-6xl`}>{header}</h1>
      <h2 className={`${textColor}  text-3xl`}>{subheader}</h2>
      <a href={link} className="text-[#2b80d4] text-2xl hover:underline">
        Learn more
      </a>
      <div className={`flex w-full ${imageDivStyle}`}>
        <img className={imageStyle} src={image} alt="" />
      </div>
    </div>
  );
}
