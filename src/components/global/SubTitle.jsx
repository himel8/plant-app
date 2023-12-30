const SubTitle = ({ children, Style, align = "text-center" }) => {
  return (
    <h4
      className={`secondary__font text-lg md:text-xl lg:text-[22px]  text-[#307b51] ${Style} ${align}`}
    >
      {children}
    </h4>
  );
};

export default SubTitle;
