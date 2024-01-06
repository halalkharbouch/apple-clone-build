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
    pauseAllVideos();
    playCurrentVideo();
  };

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
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          renderBullet: function (index, className) {
            return `<div class="${className}">
            <span class="line"></span>
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
              <video className="" src={slideVideo1} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video src={slideVideo1} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video src={slideVideo1} type="video/mp4" muted />
            </figure>
          </div>
        </SwiperSlide>

        <div className="swiper-custom-pagination flex justify-center gap-3 mt-3"></div>

      </Swiper>
    </div>
  );
}
