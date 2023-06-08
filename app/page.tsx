import { ExpandingArrow, Github, Twitter } from "@/components/shared/icons";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-xl sm:px-0">
      <Link
        href=""
        className="group mx-auto flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
      >
        <p className="text-sm font-semibold text-gray-700">Try It NOW!</p>
        <ExpandingArrow className="-ml-1 h-3.5 w-3.5" />
      </Link>

      <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Twitter Threads to
        <br />
        <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
          Linkedin Carousels
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Seamlessly transform Twitter Threads to captivating LinkedIn Carousels.
      </h2>

      <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <a
          href=""
          className="rounded-full border border-black bg-black px-5 py-2 text-sm text-white shadow-lg transition-all hover:bg-white hover:text-black"
        >
          Start For Free
        </a>
        <a
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <Github className="h-5 w-5 text-black" />
          <p className="text-sm">Star on GitHub</p>
        </a>
      </div>
    </div>
  );
}
