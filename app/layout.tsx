import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";
import joelnbl from 'public/images/home/joelnbl.jpg';
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Joel Bello",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          <div className="flex flex-col sm:flex-row justify-around gap-4">
        <div >
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={joelnbl}
            width={800}
            height={150}
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
       </div> 
      <div>
      <h1 className="font-medium text-2xl mb-4 text-left tracking-tighter">
        hey, I am Joel 👋
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Highly motivated and experienced Full-Stack Developer with
        a passion for building innovative and user-friendly web
        applications. Proven ability to design, develop, and deploy
        applications across various technologies. Adept at
        collaborating with cross-functional teams to deliver
        successful projects on time and within budget.
        </p>
      </div>
      </div>

          </div>
          <div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://linear.app">
            <svg width="78" height="20" role="img" aria-label="Linear logo">
              <use href="/sprite.svg#linear" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://supabase.com">
            <svg width="100" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://www.makeswift.com/blog/makeswift-is-joining-bigcommerce">
            <svg width="96" height="19" role="img" aria-label="Makeswift logo">
              <use href="/sprite.svg#makeswift" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://resend.com">
            <svg width="70" height="17" role="img" aria-label="Resend logo">
              <use href="/sprite.svg#resend" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://bun.sh">
            <svg width="35" height="27" role="img" aria-label="Bun logo">
              <use href="/sprite.svg#bun" />
            </svg>
          </a>
        </div>
      </div>
          </div>
        {children}
        </main>
      </body>
    </html>
  );
}
