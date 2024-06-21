import { useState } from "react";
import type { VideoType } from "~/app/_components/VideoItem";

interface Creator {
  id: number;
  name: string;
  biography: string;
  profileImage: string;
  bannerImage: string;
  youtubeHandle: string;
  twitterHandle?: string;
  instagramHandle?: string;
}

const sampleCreator: Creator = {
  id: 1,
  name: "Theo - t3.gg",
  profileImage:
    "https://utfs.io/f/f7ec4fab-c964-4936-bef4-472f482e29db-gonife.jpg",
  biography: `Theo, renowned as T3.gg in the developer community on YouTube, is a dynamic content creator with a passion for simplifying complex coding concepts. With a knack for breaking down intricate technical topics into digestible pieces, Theo has garnered a loyal following among aspiring and seasoned developers alike. Through his engaging tutorials and walkthroughs, he empowers viewers to enhance their programming skills across various languages and frameworks. From beginner-friendly introductions to advanced coding techniques, Theo's channel serves as a valuable resource hub for anyone looking to dive into the world of software development.

Beyond his tutorials, Theo fosters a vibrant community where developers can exchange ideas, troubleshoot challenges, and collaborate on projects. His genuine enthusiasm for coding shines through in every video, inspiring viewers to embrace the joy of problem-solving and continuous learning. Whether you're a novice coder looking to get started or an experienced developer seeking to expand your skill set, Theo's channel offers a welcoming space to embark on your coding journey and unlock your full potential.`,
  bannerImage:
    "https://utfs.io/f/5685b4ae-a679-408f-837a-32d1573c255f-n4g0bh.png",
  youtubeHandle: "t3dotgg",
};

const mockdata: VideoType[] = [
  {
    title: "Dan Abramov SLAYS Frontend Interview w/ Ex-Twitch Engineer",
    thumbnail:
      "https://utfs.io/f/d11daa98-469e-4382-a43a-9e818f806bb1-kpyxkd.jpg",
  },
  {
    title:
      "Comparing Modern CSS Solutions (Tailwind vs MUI vs Bootstrap vs Chakra vs...)",
    thumbnail:
      "https://utfs.io/f/d11daa98-469e-4382-a43a-9e818f806bb1-kpyxkd.jpg",
  },
  {
    title: "JavaScript Framework Tier List",
    thumbnail:
      "https://utfs.io/f/d11daa98-469e-4382-a43a-9e818f806bb1-kpyxkd.jpg",
  },
  {
    title: "The Biggest Change In React's History",
    thumbnail:
      "https://utfs.io/f/d11daa98-469e-4382-a43a-9e818f806bb1-kpyxkd.jpg",
  },
];

const firstItem = mockdata[0]!;
const secondItem = mockdata[1]!;
const thirdItem = mockdata[2]!;
const fourthItem = mockdata[3]!;

function page({ params }: { params: { id: string } }) {
  return (
    <div className="relative flex h-full flex-col items-center overflow-x-hidden">
      {/* bg image */}
      <div className="absolute top-0 z-[-10] h-[56.25vw] w-full">
        <img
          className="absolute top-0 h-[56.25vw] w-full bg-cover object-cover opacity-35"
          src={sampleCreator.bannerImage}
        />
        <div className="absolute bottom-0 h-[14.7vw] w-full bg-gradient-to-b from-transparent via-gray-800 to-black"></div>
        <p className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          {sampleCreator.name}
        </p>
      </div>

      <div className="pb-[30%]"></div>
      <VideosCarousel />
      <img
        className="my-20 h-48 w-48 rounded-full border border-gray-500"
        src={sampleCreator.profileImage}
        alt={sampleCreator.name}
      />

      <h4 className="mb-3 text-3xl">About {sampleCreator.name}</h4>
      <p className="max-w-[60ch] whitespace-pre-line text-center">
        {sampleCreator.biography}
      </p>
      <div className="my-10 flex h-56 items-center gap-2">
        <p> Visit Channel</p>
        <a
          href={`//www.youtube.com/@${sampleCreator.youtubeHandle}`}
          target="_blank"
        >
          <svg width="64" height="64" fill="red" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

function VideosCarousel() {
  return (
    <div className="w-full self-start">
      <h2 className="p-3 text-3xl font-bold">Popular Videos</h2>

      <div className="relative">
        <button className="duration-50 absolute left-0 flex h-full w-[3%] items-center justify-center text-[transparent] transition-colors hover:bg-black/80 hover:text-white">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>

        <button className="duration-50 absolute right-0 flex h-full w-[3%] items-center justify-center text-[transparent] transition-colors hover:bg-black/80 hover:text-white">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>

        <div className="flex gap-2">
          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />

          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />
        </div>
      </div>
    </div>
  );
}

export default page;
