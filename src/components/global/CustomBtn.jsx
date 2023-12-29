import Link from "next/link";

const CustomBtn = ({ children, link }) => {
  return (
    <Link
      href={link}
      className="bg-green-700 py-4 px-8 rounded-md text-white font-semibold text-lg"
    >
      {children}
    </Link>
  );
};

export default CustomBtn;
