// Navbar.js
"use client"; // for nextjs 13.4 users
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import CustomBtn from "./global/CustomBtn";
const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "TESTIMONIALS", link: "/#testimonials" },
    { name: "ABOUT", link: "/#about" },
    { name: "FAQ", link: "/faq" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <header className="">
      <nav className="shadow-md w-full fixed top-0 left-0 z-50 bg-white">
        <div className="md:flex custom__width items-center justify-between  py-4 xl:px-0 px-7">
          {/* logo section */}
          <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
            <span>LOGO</span>
          </div>
          {/* Menu icon */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
          >
            {open ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
          {/* linke items */}
          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-12" : "top-[-490px]"
            }`}
          >
            {Links.map((link, index) => (
              <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                <Link
                  onClick={() => setOpen(!open)}
                  href={link.link}
                  className="text-gray-800 hover:text-[#307b51] duration-500 text-lg"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static uppercase">
              
            </button> */}
            <div className=" md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static uppercase">
              {" "}
              <CustomBtn link="">Contact Us</CustomBtn>
            </div>
          </ul>
          {/* button */}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
