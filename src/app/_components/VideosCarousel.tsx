import VideoItem from "./VideoItem";

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
export default VideosCarousel;
