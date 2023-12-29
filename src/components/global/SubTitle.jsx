const SubTitle = ({ children, Style, align = "text-center" }) => {
  return (
    <h4 className={` text-xl  text-[#0F5132] ${Style} ${align}`}>{children}</h4>
  );
};

export default SubTitle;
