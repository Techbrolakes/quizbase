import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="bg-background">
      <Head>
        <title>CoursePlug - Premium Access to amazing tech courses</title>
        <meta name="description" content="Get Access To Premium Tech Courses" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
      </Head>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
