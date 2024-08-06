interface VideoType {
  title: string;
  thumbnail: string;
  videoPreview?: string;
}

function VideoItem({ props }: { props: VideoType }) {
  return (
    <div className="flex flex-[0_0_50.00%] flex-col gap-2 md:flex-[0_0_33.33%] lg:flex-[0_0_25.00%] xl:flex-[0_0_20.00%] 2xl:flex-[0_0_16.67%]">
      <img className="aspect-video w-72" src={props.thumbnail} />

      <div className="flex min-w-60 max-w-72 justify-between">
        <h3 className="line-clamp-3 w-full text-ellipsis pl-1">
          {props.title}
        </h3>
        <div className="flex w-7 cursor-pointer text-slate-300 hover:text-white">
          <svg className="h-10 w-10" fill="currentColor" viewBox="0 4 16 16">
            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
          </svg>
        </div>
      </div>
    </div>
  );
}
export type { VideoType };
export default VideoItem;
