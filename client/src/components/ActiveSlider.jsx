import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { ServiceData } from "../constants";
import slideVideo1 from "../assets/media/videos/MacBook Pro - Apple (NG)_2.mp4";
import slideVideo2 from "../assets/media/videos/MacBook Pro - Apple (NG)_4.mp4";

export default function ActiveSlider() {
  return (
    <div className="my-10">
      <Swiper
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
                    autoPlay
                    muted
                    onLoadedData={(e) => e.target.play()}
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
              <video src={slideVideo1} type="video/mp4" autoPlay muted />
            </figure>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3xl overflow-hidden">
            <figure>
            <figcaption className="absolute text-3xl font-semibold max-w-[40%] top-7 left-7 text-white m-0 p-0">
                    The world’s best laptop display. Brilliant in every way.
                </figcaption>
              <video src={slideVideo1} type="video/mp4" autoPlay muted />
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
