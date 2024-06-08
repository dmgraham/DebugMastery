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

function page({ params }: { params: { id: string } }) {
  return <p>Creator id: {params.id}</p>;
}

export default page;
