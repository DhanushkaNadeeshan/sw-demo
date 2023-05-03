import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const buttonSlideBarStyle = `
 bg-blue-1001
 text-slate-200
 px-4
 py-1
 rounded
 hover:bg-sky-500
 hover:cursor-pointer

`;

export default function Home() {
  return (
    <div>
      {/* slide bar */}
      <div className="fixed left-0 w-1/5 h-full bg-slate-200 p-2">
        <Image
          width={50}
          height={50}
          alt="swastha logo"
          src="/assets/swastha_logo.png"
        />

        <div className={buttonSlideBarStyle}>
          <p>Dashboard</p>
        </div>
      </div>
      <nav className="w-full p-2 bg-blue-500 flex justify-end">
        <div className="px-2">
          <p className="text-slate-100 font-bold">Hi Admin</p>
        </div>
      </nav>
      <div className="w-full">
        <Image
          src="/assets/swastha_logo _full_height.png"
          width={500}
          height={500}
          alt="Swastha Full"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
