"use client";
import Image from "next/image";
import Link from "next/link";
import user from "@/app/images/Vector (12).png";
import search from "@/app/images/icn settings icn-xs (6).png";
import cart from "@/app/images/icn settings icn-xs (7).png";
import mail from "@/app/images/icn settings icn-xs (8).png";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full bg-white shadow-md lg:h-[70px]">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between px-8 lg:px-20 h-full">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>

        {/* Menu Links */}
        <ul className="flex gap-6 font-Montserrat font-semibold text-[14px] text-[#737373]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Login and Icons */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Image src={user} alt="user" width={16} height={16} />
            <span className="font-Montserrat font-semibold text-[14px] text-[#23A6F0]">
              Login / Register
            </span>
          </div>
          <div className="flex gap-4">
            <Image src={search} alt="search" width={16} height={16} />
            <Image src={cart} alt="cart" width={16} height={16} />
            <Image src={mail} alt="mail" width={16} height={16} />
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-2 bg-[#252B42] text-white">
        {/* Logo */}
        <h3 className="font-Montserrat font-semibold text-[24px]">Bandage</h3>

        {/* Hamburger Menu */}
        <div className="cursor-pointer" onClick={toggleMenu}>
          <div className="w-[24px] h-[2px] bg-white mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-white mb-[5px]"></div>
          <div className="w-[24px] h-[2px] bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden absolute w-full bg-[#252B42] p-4 flex flex-col items-center text-white`}
      >
        <ul className="flex flex-col gap-4 font-Montserrat font-semibold text-[14px]">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/pages">Pages</Link></li>
        </ul>

        {/* Close Menu Button */}
        <button
          onClick={toggleMenu}
          className="mt-4 text-[14px] font-Montserrat border border-white px-4 py-2 rounded"
        >
          Close Menu
        </button>
      </div>
    </div>
  );
}