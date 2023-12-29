import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

const footerLink = [
  { name: "Terms of Use", link: "#!" },
  { name: "Privacy Policy", link: "#!" },
  { name: "Contact Us", link: "#!" },
];

const Footer = () => {
  return (
    <footer className="bg-[#2b394e] ">
      <div className="custom__width py-16">
        <div className="flex justify-center items-center gap-10">
          {footerLink.map((item, index) => (
            <Link key={index} href={item.link} className="text-xl text-white">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center gap-10 py-6 text-2xl text-white">
          <Link href="#">
            <FaFacebookF className=" transform ease-in-out duration-300 hover:scale-[1.3]" />
          </Link>
          <Link href="#">
            <FaXTwitter className=" transform ease-in-out duration-300 hover:scale-[1.3]" />
          </Link>
          <Link href="#">
            <FaInstagram className=" transform ease-in-out duration-300 hover:scale-[1.3]" />
          </Link>
        </div>
      </div>
      <div className="bg-[#1f2c3f]">
        <div className="custom__width">
          <p className="text-sm text-white text-center py-4">
            Copyright © Appixi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
