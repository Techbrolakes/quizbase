import BlockchainCourses from "../components/BlockchainCourses";
import Courses from "../components/Courses";
import FigmaCourses from "../components/FigmaCourses";
import HtmlCourses from "../components/HtmlCourses";
import JsCourses from "../components/JsCourses";
import NativeCourses from "../components/NativeCourses";
import ReactCourses from "../components/ReactCourses";
import Layout from "../layouts/Layout";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";

const index = () => {
  return (
    <Layout>
      <section className="space-y-14">
        <div className=" flex flex-col justify-center text-center items-center space-y-4 mont p-4">
          <h1 className="text-4xl lg:text-7xl capitalize font-bold cinzel tracking-wider">
            courseplug
          </h1>
          <p className="text-xl font-medium text-white">
            Courseplug is your ultimate solultion to getting access to premium
            tech udemy courses from top instructors
          </p>
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
                  src="https://videos.sproutvideo.com/embed/069ed8b71d1de5c08f/ad6cfd02ad1ad87a"
                  width="400"
                  height="224"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>s
            </SwiperSlide>
          </Swiper>

          <button className="ml-4 btn-fill rounded-md shadow-lg">
            Get Access To Premium Courses
          </button>
        </div>

        <FigmaCourses />
        <HtmlCourses />
        <JsCourses />
        <ReactCourses />
        <BlockchainCourses />
        <NativeCourses />
      </section>
    </Layout>
  );
};

export default index;
