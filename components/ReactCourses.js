// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const ReactCourses = () => {
  return (
    <div className="py-12 space-y-8">
      <article className="flex justify-center lg:justify-start gap-8 items-center uppercase text-xl md:text-4xl font-bold">
        <h1 className="lin">REACT.JS</h1>
        <img src="/Line.png" alt="line" className="inline" />
        <p className="text-sm md:text-xl font-light text-white">VIEW MORE</p>
      </article>

      <Swiper
        className="grid grid-cols-3 gap-12 cursor-pointer mySwiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div>
            <iframe
              className="sproutvideo-player"
              src="https://videos.sproutvideo.com/embed/a79ed8b71b1ce4c32e/31968c7e0f5eedbc"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SwiperSlide>
        <SwiperSlide className="hidden lg:block">
          <div>
            <iframe
              className="sproutvideo-player"
              src="https://videos.sproutvideo.com/embed/ac9ed8b71b13eec125/67eca50b6f32ad1f"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SwiperSlide>{" "}
        <SwiperSlide className="hidden lg:block">
          <div>
            <iframe
              className="sproutvideo-player"
              src="https://videos.sproutvideo.com/embed/449ed8b71b1ce4cccd/d2561374b502dd6b"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>

      <a
        href="https://wa.me/+2349057791158?text=Hi,%20I%20Want%20Access%20Into%20The%20Drive"
        target="_blank"
        rel="noreferrer"
        className="block"
      >
        <button className="ml-4 btn-fill rounded-md shadow-lg text-white">
          Get Access To Premium Courses
        </button>
      </a>
    </div>
  );
};

export default ReactCourses;
