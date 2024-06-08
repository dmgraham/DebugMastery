interface VideoType {
  title: string;
  thumbnail: string;
  videoPreview?: string;
}

interface Creator {
  id: number;
  name: string;
  biography: string;
  bannerImage: string;
}

const sampleCreator: Creator = {
  id: 1,
  name: "Theo - t3.gg",
  biography: `Theo, renowned as T3.gg in the developer community on YouTube, is a dynamic content creator with a passion for simplifying complex coding concepts. With a knack for breaking down intricate technical topics into digestible pieces, Theo has garnered a loyal following among aspiring and seasoned developers alike. Through his engaging tutorials and walkthroughs, he empowers viewers to enhance their programming skills across various languages and frameworks. From beginner-friendly introductions to advanced coding techniques, Theo's channel serves as a valuable resource hub for anyone looking to dive into the world of software development.

Beyond his tutorials, Theo fosters a vibrant community where developers can exchange ideas, troubleshoot challenges, and collaborate on projects. His genuine enthusiasm for coding shines through in every video, inspiring viewers to embrace the joy of problem-solving and continuous learning. Whether you're a novice coder looking to get started or an experienced developer seeking to expand your skill set, Theo's channel offers a welcoming space to embark on your coding journey and unlock your full potential.`,
  bannerImage:
    "https://utfs.io/f/5685b4ae-a679-408f-837a-32d1573c255f-n4g0bh.png",
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
  return <p>Creator id: {params.id}</p>;
}

export default page;
