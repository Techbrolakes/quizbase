// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const HtmlCourses = () => {
  return (
    <div className="py-12 space-y-8">
      <article className="flex justify-center lg:justify-start gap-8 items-center uppercase text-xl md:text-4xl font-bold">
        <h1 className="lin">HTML & CSS</h1>
        <img src="/Line.png" alt="line" className="inline" />
        <p className="text-sm md:text-xl font-light text-white">VIEW MORE</p>
      </article>

      <Swiper
        className="grid grid-cols-3 gap-12 cursor-pointer mySwiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1300,
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
              src="https://videos.sproutvideo.com/embed/799ed8b71819e4c3f0/b97dfd4980bf76e4"
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
              src="https://videos.sproutvideo.com/embed/a79ed8b71819e5c42e/abe62ecd330435f4"
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
              src="https://videos.sproutvideo.com/embed/4d9ed8b71d1cebc8c4/b42ffbe1dfb841a0"
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

export default HtmlCourses;
