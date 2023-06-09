import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ThreadShift",
  description: "Generated Linkedin Carousels from Twitter Threads seamlessly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col bg-white text-black">
          <div className="absolute z-0 h-full w-full bg-[url('/grid.svg')] opacity-10 bg-repeat"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
