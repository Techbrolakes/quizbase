// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const FigmaCourses = () => {
  return (
    <div className="py-12 space-y-8">
      <article className="flex justify-center lg:justify-start gap-8 items-center uppercase text-xl md:text-4xl font-bold">
        <h1 className="lin">FIGMA</h1>
        <img src="/Line.png" alt="line" className="inline" />
        <p className="text-sm md:text-xl font-light text-white">VIEW MORE</p>
      </article>

      <Swiper
        className="grid grid-cols-3 gap-12 cursor-pointer mySwiper"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1400,
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
              src="https://videos.sproutvideo.com/embed/a79ed8b71819eacb2e/1fb0980ac5481fef"
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
              src="https://videos.sproutvideo.com/embed/ac9ed8b7181ae0c525/45a228d6315395b1"
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
              src="https://videos.sproutvideo.com/embed/069ed8b7181ae1c68f/44af2c8efada0fd7"
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
        className="block"
        rel="noreferrer"
      >
        <button className="ml-4 btn-fill rounded-md shadow-lg text-white">
          Get Access To Premium Courses
        </button>
      </a>
    </div>
  );
};

export default FigmaCourses;
