import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ThreadShift",
  description: "Generated Linkedin Carousels from Twitter Threads in seconds.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col justify-center bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}
