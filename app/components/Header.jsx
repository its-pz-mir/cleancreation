"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbShoppingBag } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const showMenue = () => {
    setShow(!show);
  };

  return (
    <div className="flex justify-between px-12 py-2 items-center border border-b">
      <div className="left md:space-x-7 md:flex md:items-center">
        <Link href={"#"} className="hover">
          Current Menue
        </Link>
        <div className="relative">
          <button className="btn flex items-center" onClick={toggleDropdown}>
            Shop
            <RiArrowDropDownLine className="w-7 h-7" />
          </button>
          {isOpen && <Profile />}
        </div>
      </div>
      <div className="center">
        <Image src="/logo.png" alt="Logo Image" width={66} height={50} />
      </div>
      <div className="right">
        <ul className="flex space-x-4 sm:space-x-6 md:space-x-7 items-center justify-center">
          <li className="hover res sm:block">
            <Link href={"#"}>Grab & Go</Link>
          </li>
          <li className="hover res sm:block">
            <Link href={"#"}>Blog</Link>
          </li>
          <li className="hover">
            <Link href={"#"}>
              <TbShoppingBag className="inline-block w-6 h-6" />
            </Link>
          </li>
          <li className="hover">
            <Link href={"#"}>Login</Link>
          </li>
          <li className="hover">
            <Link href={"#"}>Signup</Link>
          </li>
          <li className="ico md:hidden pointer inline-block">
            <BiMenu onClick={showMenue} className="relative" />
            {show && <Menu />}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="space-x-7 absolute w-full bg-white left-0 top-20 justify-center space-y-4 flex flex-col items-center ">
        <Link href={"#"} className="hover">
          Current Menue
        </Link>
        <div className="relative">
          <button className="btn flex items-center" onClick={toggleDropdown}>
            Shop
            <RiArrowDropDownLine className="w-7 h-7" />
          </button>
          {isOpen && <Profile />}
        </div>
        <li className="hover sm:hidden">
            <Link href={"#"}>Grab & Go</Link>
          </li>
          <li className="hover sm:hidden">
            <Link href={"#"}>Blog</Link>
          </li>
      </div>
    </>
  );
}

function Profile() {
  const dropText = "hover:bg-[#8ed444] hover:text-white hover:rounded-xl";
  return (
    <div className="absolute w-64">
      <div className="flex flex-col bg-white py-4 z-10 shadow-xl rounded-md">
        <Link href="#" className={`${dropText} px-2 py-2`}>
          Subscription Meal Section
        </Link>
        <Link href="#" className={`${dropText} px-2 py-2`}>
          A la Carte
        </Link>
        <Link href="#" className={`${dropText} px-2 py-2`}>
          Proteins by Pound
        </Link>
        <Link href="#" className={`${dropText} px-2 py-2`}>
          Extras
        </Link>
        <Link href="#" className={`${dropText} px-2 py-2`}>
          Gift Card
        </Link>
      </div>
    </div>
  );
}
