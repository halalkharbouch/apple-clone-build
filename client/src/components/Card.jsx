export default function Card({
  className,
  header,
  subheader,
  link,
  image,
  headerIcon,
  textColor,
  blurBack
}) {
  return (
    <div className={` ${className}`}>
      <div className={`mt-5 ${textColor}`}>
        <h1 className="font-bold text-6xl">{header} </h1>
        <h2 className="text-3xl">
          {subheader} <img className="inline" src={headerIcon} alt="" />
        </h2>
      </div>
      <a href={link} className="text-[#2b80d4] text-2xl hover:underline">
        Learn more
      </a>
      
      
      <div className="">
        <div className="relative w-full">
          {blurBack && (

          <div className="absolute top-[20%] right-[15%] w-[70%] h-[70%] rounded-[60%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-xl opacity-15"></div>
          )}
          <div className="backdrop-blur-sm ">
          <img src={image} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      
    </div>
  );
}
