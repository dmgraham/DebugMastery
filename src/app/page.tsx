import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <main className="flex min-h-full flex-col items-center justify-center bg-gradient-to-b from-neutral-800 to-neutral-950">
      <div className="container flex flex-col items-center justify-center gap-24 px-4 py-16 ">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Debug Mastery
          </h1>

          <h3 className="text-center text-2xl">
            A website to highlight educational content creators for web
            development.
          </h3>
        </div>

        <div className="flex gap-10">
          <img
            className=" h-48 w-48 rounded-full border border-gray-500"
            src="https://utfs.io/f/f7ec4fab-c964-4936-bef4-472f482e29db-gonife.jpg"
            alt="Theo Browne"
          />
          <img
            className=" h-48 w-48  rounded-full border border-gray-500"
            src="https://utfs.io/f/99c98833-e3e4-4e7f-92dc-889535e1f162-envsqj.jpg"
            alt="Fireship.io"
          />
          <img
            className=" h-48 w-48 rounded-full border border-gray-500"
            src="https://utfs.io/f/11960624-972a-44c5-a0e0-2d11468c07d9-35m4pb.jpg"
            alt="Primeagen"
          />
        </div>
        <button className=" h-10 rounded-md bg-primary px-4 py-2 hover:bg-primary/85">
          See Creators
        </button>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
