import { ExpandingArrow, Github, Twitter } from "@/components/shared/icons";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="mx-auto mb-10 mt-12 max-w-md px-2.5 text-center sm:max-w-xl sm:px-0 z-10">
      <div className="mx-auto mt-10 flex max-w-fit space-x-4">
        <a
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 shadow-lg transition-all hover:border-gray-800"
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <Twitter className="h-5 w-5 text-[#38A3F2]" />
          <p className="text-sm">Catch on Twitter</p>
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

      <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.15]">
        Twitter Threads to
        <br />
        <span className="bg-gradient-to-r from-[#865DFF] via-[#E384FF] to-[#865DFF] bg-clip-text text-transparent">
          Linkedin Carousels
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Seamlessly transform Twitter Threads to captivating LinkedIn Carousels
      </h2>
    </div>
  );
}
