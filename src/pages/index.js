import Image from "next/image";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const textInputStyle = `
  px-2
  py-1
  mt-4
  border 
  border-slate-300 
  rounded-md 
  focus:outline-none 
  text-sm
  focus:border-sky-500
`;

const buttonStyle = `
 bg-blue-1001
 text-slate-200
 px-4
 py-1
 rounded
 hover:bg-sky-500

`;

export default function Home() {
  return (
    <div className="bg-blue-1000 w-screen h-screen  grid place-items-center">
      <div className="w-2/4  p-2 grid  grid-cols-2 bg-slate-100 rounded">
        <Image
          width={250}
          height={250}
          alt="swatha"
          src="/assets/swastha_Login_logo.png"
        />
        <div className="py-8">
          <input
            className={textInputStyle}
            type="text"
            placeholder="User Name"
          ></input>

          <input
            className={textInputStyle}
            type="password"
            placeholder="Password"
          ></input>
          <div className="py-2">
            <Link className={buttonStyle} href="/dashboard">
              Sign In
            </Link>
          </div>
          <p className="text-blue-400">Forgot password ?</p>
        </div>
      </div>
    </div>
  );
}
