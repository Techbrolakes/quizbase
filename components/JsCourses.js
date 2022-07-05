// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const JsCourses = () => {
  return (
    <div className="py-12 space-y-8">
      <article className="flex justify-center lg:justify-start gap-8 items-center uppercase text-xl md:text-4xl font-bold">
        <h1 className="lin">JAVASCRIPT</h1>
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
              src="https://videos.sproutvideo.com/embed/d39ed8b71b13e8c45a/d01ef01bb32284e4"
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
              src="https://videos.sproutvideo.com/embed/069ed8b71d1de5c08f/ad6cfd02ad1ad87a"
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
              src="https://videos.sproutvideo.com/embed/449ed8b71b13efc8cd/6477604cc535cc5f"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="ml-4 btn-fill rounded-md shadow-lg">
        Get Access To Premium Courses
      </button>
    </div>
  );
};

export default JsCourses;
