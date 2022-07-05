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
          <p className="text-base lg:text-xl font-medium text-white">
            Courseplug is your ultimate solultion to getting access to premium
            tech udemy courses from top instructors
          </p>
          <div className="py-8">
            <Swiper
              className="grid grid-cols-3 gap-12 cursor-pointer mySwiper py-8"
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
                    src="https://videos.sproutvideo.com/embed/709ed8b71b13ecc7f9/c06d27e2853f981c"
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
                    src="https://videos.sproutvideo.com/embed/4d9ed8b71b13ebc1c4/d0069dad3f707e5e"
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
              </SwiperSlide>
            </Swiper>
          </div>

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

        <div className="space-y-4 flex flex-col justify-center items-center text-center">
          <article className="flex justify-center gap-8 items-center uppercase text-xl md:text-4xl font-bold">
            <h1 className="lin">How CoursePlug Works</h1>
          </article>

          <p className="text-base text-white">
            Courseplug offers you access to top tech courses from top industry
            leading instructors like mosh hamedani, angela yu, Academind
            (maximilian schwarzmuller) and many others. Our courses are stored
            on a google drive meaning you get access to our courses immediately.
            Courses range from HTML & CSS, JAVASCRIPT , DOCKER , PYTHON ,
            REACT.JS , NEXT.JS , FLUTTER, REACT NATIVE, BLOCKCHAIN, UI.UX
            DESIGN, REDUX, TYPESCRIPT, VUE JS , NODE JS, GOLANG AND MUCH MORE
          </p>
          <h6>LEARN CODING THE RIGHT WAY</h6>
          <a
            href="https://wa.me/+2349057791158?text=Hi,%20I%20Want%20Access%20Into%20The%20Drive"
            target="_blank"
            rel="noreferrer"
          >
            <button className="ml-4 btn-fill rounded-md shadow-lg text-white">
              Get Access To Premium Courses
            </button>
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default index;
