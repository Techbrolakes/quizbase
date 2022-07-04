import Courses from "../components/Courses";
import Layout from "../layouts/Layout";

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
          <div>
            <iframe
              className="sproutvideo-player"
              src="https://videos.sproutvideo.com/embed/069ed8b71d1de5c08f/ad6cfd02ad1ad87a"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="ml-4 btn-fill rounded-md shadow-lg">
            Get Access To Premium Courses
          </button>
        </div>

        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
        <Courses />
      </section>
    </Layout>
  );
};

export default index;
