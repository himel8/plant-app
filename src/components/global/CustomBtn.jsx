import Link from "next/link";

const CustomBtn = ({ children, link }) => {
  return (
    <Link
      href={link}
      className="custom__botton py-4 px-8 rounded-full text-white secondary__font font-semibold text-sm sm:text-base md:text-lg text-center"
    >
      {children}
    </Link>
  );
};

export default CustomBtn;
