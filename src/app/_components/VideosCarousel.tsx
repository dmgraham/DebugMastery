"use client";
import VideoItem from "./VideoItem";
import mockdata from "./videoCarouselMockData";
import useScreenWidth from "../utils/useScreenWidth";
import getScreenBreakpoint, {
  Breakpoint,
} from "../utils/helper/getScreenBreakpoint";
import { useState } from "react";

const firstItem = mockdata[0]!;
const secondItem = mockdata[1]!;
const thirdItem = mockdata[2]!;
const fourthItem = mockdata[3]!;
const finalItem = mockdata[4]!;

const maxVideosAtBreakpoints: Record<Breakpoint, number> = {
  xs: 2, // 50.00%
  sm: 2, // 50.00%
  md: 3, // 33.33%
  lg: 4, // 25%
  xl: 5, // 20%
  "2xl": 6, // 16.67%
};

function VideosCarousel() {
  const [xTranslation, setXTranslation] = useState(0);

  const screenWidth = useScreenWidth();
  const totalItems = 18;
  const screenBreakpoint = getScreenBreakpoint(screenWidth);

  const itemsOnScreenCount = maxVideosAtBreakpoints[screenBreakpoint];

  const totalPadding = 17;
  let itemWidth = (screenWidth - totalPadding) / itemsOnScreenCount;

  const totalWidth = totalItems * itemWidth;
  const maxWidth = totalWidth - itemWidth * itemsOnScreenCount;

  function MoveCarouselRight() {
    setXTranslation((previousXTranslation) => {
      let updatedXTranslation = previousXTranslation + itemWidth;
      //if user is at the last item, go back to 0 at the beginning
      if (previousXTranslation >= maxWidth) {
        updatedXTranslation = 0;
      }

      updatedXTranslation = Math.min(maxWidth, updatedXTranslation);
      return updatedXTranslation;
    });
  }

  return (
    <div className="w-full self-start">
      <h2 className="p-3 text-3xl font-bold">Popular Videos</h2>

      <div className="relative">
        <button className="duration-50 absolute left-0 z-10 flex h-full w-[3%] items-center justify-center text-[transparent] transition-colors hover:bg-black/80 hover:text-white">
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>

        <button
          className="duration-50 absolute right-0 z-10 flex h-full w-[3%] items-center justify-center text-[transparent] transition-colors hover:bg-black/80 hover:text-white"
          onClick={MoveCarouselRight}
        >
          <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>

        <div
          className="flex flex-1 gap-0 transition-transform duration-300"
          style={{
            transform: `translateX(-${xTranslation}px)`,
          }}
        >
          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />

          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />

          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />

          <VideoItem props={firstItem} />
          <VideoItem props={secondItem} />
          <VideoItem props={thirdItem} />
          <VideoItem props={fourthItem} />

          <VideoItem props={firstItem} />
          <VideoItem props={finalItem} />
        </div>
      </div>
    </div>
  );
}
export default VideosCarousel;
