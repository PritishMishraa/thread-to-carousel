import Background from "@/components/shared/background";
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
        <div className="flex flex-col text-black">
          {children}
          <Background />
        </div>
      </body>
    </html>
  );
}
