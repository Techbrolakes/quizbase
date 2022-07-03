import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://video-react.github.io/assets/video-react.css"
        />
      </Head>

      <main>
        <h1 className="text-8xl uppercase">Course Plug</h1>
        <iframe
          class="sproutvideo-player"
          src="https://videos.sproutvideo.com/embed/069ed8b71d1de5c08f/ad6cfd02ad1ad87a"
          width="630"
          height="354"
          frameborder="0"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </main>
    </div>
  );
}
