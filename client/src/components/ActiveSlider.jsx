import React, { useEffect, useState, useRef } from "react";
import {
  Swiper,
  SwiperSlide,
  useSwiperSlide,
} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import slideVideo1 from "../assets/media/videos/MacBook Pro - Apple (NG)_2.mp4";
import slideVideo2 from "../assets/media/videos/MacBook Pro - Apple (NG)_4.mp4";

export default function ActiveSlider() {
  
  const [swiper, setSwiper] = useState(null);
  const swiperRef = useRef(null);
  console.log(swiper);
  console.log(swiperRef);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.5,
    })

    if (swiperRef.current) {
        observer.observe(swiperRef.current);
    }

    return () => {
        observer.disconnect();
    }
  }, []);

  const handleIntersection = (entries) => {
        console.log('intersection detected');
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log('swiper is visible');
                playFirstSlide();
            } 
        })
  }

  function playFirstSlide() {
    if (swiper && swiper.slides) {
    console.log('swiper is intialized');
      const video = swiper.slides[0].querySelector('video');
      if (video) {
        video.play();
      }
    }
  }

  

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }
  }, [swiper]);

    const handleSlideChange = () => {
        
        pauseAllVideos();
        playCurrentVideo();
    }

    const pauseAllVideos = () => {
        const videos = document.querySelectorAll("figure video");
        videos.forEach((video) => video.pause());
    };

    const playCurrentVideo = () => {
        const currentSlide = swiper.slides[swiper.activeIndex];
        const video = currentSlide.querySelector("video");
        if (video) {
            video.play();
        }
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
        
      >
        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure className="">
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                className=""
                src={slideVideo1}
                type="video/mp4"
                muted
                
              />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                src={slideVideo1}
                type="video/mp4"
                
                muted
              />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                src={slideVideo1}
                type="video/mp4"
                
                muted
              />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
