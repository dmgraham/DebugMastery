import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { TRPCReactProvider } from "~/trpc/react";
import Link from "next/link";
import getCreatorLink from "./utils/helper/getCreatorLink";

export const metadata = {
  title: "Debug Mastery",
  description: "Project to highlight content creators for developers.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

interface developer {
  id: number;
  name: string;
}

const developers: developer[] = [
  { id: 1, name: "Theo - t3" },
  { id: 2, name: "Fireship" },
  { id: 3, name: "Primeagen" },
];

function NavigationBar() {
  return (
    <nav className="text-md z-50 flex justify-between border-b-2 border-b-neutral-500 bg-neutral-900 p-4">
      <Link href="/">
        <div className="border-2 border-transparent font-semibold hover:border-b-primary">
          Debug Mastery
        </div>
      </Link>
      <div className="flex gap-3">
        {developers.map((dev) => {
          return (
            <Link href={getCreatorLink(dev.id)} key={dev.id}>
              <p className="border-2 border-transparent hover:border-b-primary">{dev.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <div className=" grid h-screen grid-rows-[auto,1fr]">
            <NavigationBar />
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
