"use client"
import type { Metadata } from "next";
import "./globals.css";
import style from "./navbar.module.css";
import Link from "next/link";
import { useState } from "react";

import localFont from "next/font/local";
const inter = localFont({src: '../public/fonts/Inter.ttf'});

//export const metadata: Metadata = {
//  title: "Burpees!!!",
//  description: "More Burpees!!!",
//};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Style
  const linkStyle = "w-full p-3 border-2 border-green border-solid block text-xl text-center hover:text-main"; 

  // Navbar
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };


  return (
    <html lang="de">
      <body className={inter.className}>
      <nav className="m-0 p-0 w-0 h-0">
        <button onClick={handleClick}>
          <svg
              className='max-md:w-6 max-md:h-6 h-10 w-10 top-0 left-0 lg:m-10 max-lg:m-5 fixed'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
          </svg>
        </button>
        <div className={`${active ? '' : 'hidden'} absolute top-0 left-0 border-solid border-white border-2 lg:w-1/6 h-full z-50 bg-gradient-to-t shadow-xl shadow-black from-background-start-rgb to-background-end-rgb m-0 p-0`}>
          <button className={linkStyle} onClick={handleClick}>
            &#11164; Back
          </button>
          <Link onClick={handleClick} className={linkStyle} href="/">Home</Link>
          <Link onClick={handleClick} className={linkStyle} href="/schwarzes-buch">Schwarzes Buch</Link>
        </div>
        <div onClick={handleClick} className={`${active ? '' : 'hidden'}lg:w-5/6 bg-white/0 h-full absolute right-0 top-0`}/>
      </nav>
        {children}
      </body>
    </html>
  );
}
