import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import slideVideo1 from "../assets/media/videos/MacBook Pro - Apple (NG)_2.mp4";
import slideVideo2 from "../assets/media/videos/MacBook Pro - Apple (NG)_4.mp4";
import './ActiveSlider.css';

export default function ActiveSlider() {
  

  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  
  

  

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: [0.25, 0.75],
    });

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        swiperRef.current.swiper.slides[0].querySelector("video").play();
      }
    });
  };


  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }
  }, [swiper]);

  const handleSlideChange = () => {
    clearProgress();
    pauseAllVideos();
    playCurrentVideo();
  };

  const clearProgress = () => {
    const ProgressBars = document.querySelectorAll(".progress");
    ProgressBars.forEach((progress) => { 
      if (progress.style.width === "100%") {
        progress.style.width = "0%";
      }
    });
  }

  const pauseAllVideos = () => {
    const videos = document.querySelectorAll(".slide-video");
    videos.forEach((video) => video.pause());
  };

  const playCurrentVideo = () => {
    const currentSlide = swiper.slides[swiper.activeIndex];
    const video = currentSlide.querySelector("video");
    if (video) {
      video.play();
    }
  };

  const handleTimeUpdate = (e) => {
    const ProgressBar = document.querySelector(".swiper-pagination-bullet-active .line .progress");
    const video = e.target;
    const percent = (video.currentTime / video.duration) * 100;
    ProgressBar.style.width = `${percent}%`;
    
  };

  return (
    <div className="my-10">
      <Swiper
        ref={swiperRef}
        id="swiper-container"
        onSwiper={setSwiper}
        modules={[FreeMode, Pagination]}
        spaceBetween={100}
        slidesPerView={1.5}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          renderBullet: function (index, className) {
            return `<div class="${className}">
            
            <div class="line"><div class="progress"></div></div>
            </div>`;
          },
          
        }}
      >
        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure className="">
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video className="slide-video" src={slideVideo1} onTimeUpdate={handleTimeUpdate} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video className="slide-video" src={slideVideo1} onTimeUpdate={handleTimeUpdate} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video className="slide-video" src={slideVideo1} onTimeUpdate={handleTimeUpdate} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

       
        
        <div className="flex justify-center mt-5 items-center h-20">

          <div className="swiper-custom-pagination px-6 py-6  rounded-full bg-gray-500"></div>
        </div>
        
        

      </Swiper>
    </div>
  );
}
