import React, { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { FaPlay, FaPause } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";
import slideVideo1 from "../assets/media/videos/MacBook Pro - Apple (NG)_2.mp4";
import slideVideo2 from "../assets/media/videos/MacBook Pro - Apple (NG)_4.mp4";
import "./ActiveSlider.css";
import { motion, useAnimationControls } from "framer-motion";

export default function ActiveSlider() {
  const [swiper, setSwiper] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [swiperIsEnd, setSwiperIsEnd] = useState(false);
  const [Animating, setAnimating] = useState(true);
  const swiperRef = useRef(null);
  const buttonOpenConrols = useAnimationControls();
  const paginationControls = useAnimationControls();

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "0px",
      threshold: 0.5,
    });

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleIntersection = async (entries) => {
    await buttonOpenConrols.start("slideUp");
    await buttonOpenConrols.start("scale");
    await buttonOpenConrols.start("borderScaleDown");
    buttonOpenConrols.start("slideRight");
    paginationControls.start("appear");
    document.getElementById("play__btn").classList.remove("text-[#efeff2]");
    

    entries.forEach((entry) => {
      if (entry.isIntersecting && swiperRef.current.swiper.activeIndex === 0) {
        pauseAllVideos();
        swiperRef.current.swiper.slides[0].querySelector("video").play();
        setIsPlaying(true);
      }
    });

   
  };

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", handleSlideChange);
    }
  }, [swiper]);

  const handleSlideChange = () => {
    setIsPlaying(true);
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
  };

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
    const ProgressBar = document.querySelector(
      ".swiper-pagination-bullet-active .line .progress"
    );
    const video = e.target;
    const percent = (video.currentTime / video.duration) * 100;
    ProgressBar.style.width = `${percent}%`;
  };

  const handlePlay = () => {
    const video = swiper.slides[swiper.activeIndex].querySelector("video");
    if (swiperIsEnd) {
      swiper.slideTo(0);
      setSwiperIsEnd(false);
      return;
    } else if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    if (swiper.isEnd) {
      setSwiperIsEnd(true);
      return;
    } else {
      swiper.slideNext();
    }
  };

  return (
    <div className="my-10">
      <Swiper
        ref={swiperRef}
        id="swiper-container"
        onSwiper={(s) => setSwiper(s)}
        modules={[Pagination]}
        spaceBetween={100}
        slidesPerView={1.5}
        centeredSlides={true}
        noSwiping={true}
        noSwipingClass="swiper-no-swiping"
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
          renderBullet: function (index, className) {

            
            return `<div class="${className}">
            <div class="pagination__div">
            <div class="line"><div class="progress"></div></div>
            </div>
            
            
            </div>`;
          },
        }}
      >
        <SwiperSlide onClick={handlePlay}>
          <div className="rounded-3xl overflow-hidden swiper-no-swiping">
            <figure className="">
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                className="slide-video"
                src={slideVideo1}
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
                type="video/mp4"
                muted
              />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide onClick={handlePlay}>
          <div className="rounded-3xl overflow-hidden swiper-no-swiping">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                className="slide-video"
                src={slideVideo1}
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
                type="video/mp4"
                muted
              />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide onClick={handlePlay}>
          <div className="rounded-3xl overflow-hidden swiper-no-swiping">
            <figure>
              <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                The world’s best laptop display. Brilliant in every way.
              </figcaption>
              <video
                className="slide-video"
                src={slideVideo1}
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
                type="video/mp4"
                muted
              />
            </figure>
          </div>
        </SwiperSlide>

        <motion.div
          // animate={{

          //   y: -350,
          //   scale: 1,
          //   rotate: 0,
          // }}
          // variants={{
          //   initial: {
          //     y: -200,
          //   },
          //   animate: {
          //     y: -350,
          //   }
          // }}
          className="flex gap-10 justify-center z-10 relative mt-5 items-center h-20"
        >
          <motion.div
            variants={{
              initial: {
                
                y: -500,
                scaleX: 0,
              },
              appear: {
                
                scaleX: 1,
              }
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            initial="initial"
            animate={paginationControls}
            className="swiper-custom-pagination px-6 py-6 rounded-full bg-[#efeff2] text-[#efeff2] transition-all duration-500 ease-in-out  hover:bg-[#dcdcdf] cursor-pointer "
          ></motion.div>
          <motion.button
            variants={{
              initial: {
                x: -150,
                y: -200,
                scale: 0,
              },
              slideUp: {
                y: -350,
              },
              scale: {
                border: "12px solid #0071e3",
                y: -500,
                scale: 1,
              },
              borderScaleDown: {
                border: ["12px solid #0071e3", "none"],
              },
              slideRight: {
                border: "none",
                x: 0,
              },
            }}
            initial="initial"
            transition={{
              duration: 0.6,
              ease: "circInOut",
            }}
            animate={buttonOpenConrols}
            onClick={handlePlay}
            className="bg-[#efeff2]  px-5 py-5 rounded-full hover:bg-[#dcdcdf]"
          >
            <span
              className="text-[#efeff2] transition-all duration-500 ease-in-out"
              id="play__btn"
            >
              {swiperIsEnd ? (
                <VscDebugRestart />
              ) : isPlaying ? (
                <FaPause />
              ) : (
                <FaPlay />
              )}
            </span>
          </motion.button>
        </motion.div>
      </Swiper>
    </div>
  );
}
