import { Button } from "flowbite-react";
import Layout from "../layouts/Layout";

const index = () => {
  return (
    <Layout>
      <section>
        <div className=" flex flex-col justify-center text-center items-center space-y-4 mont p-4">
          <h1 className="text-7xl capitalize font-bold cinzel">
            Welcome to courseplug
          </h1>
          <p>
            Courseplug is your ultimate solultion to getting access to premium
            tech udemy courses from top instructors
          </p>
          <div>
            <iframe
              class="sproutvideo-player"
              src="https://videos.sproutvideo.com/embed/069ed8b71d1de5c08f/ad6cfd02ad1ad87a"
              width="400"
              height="224"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <button className="bg-blue-600 py-4 px-2">Get Access Today</button>
        </div>
      </section>
    </Layout>
  );
};

export default index;
