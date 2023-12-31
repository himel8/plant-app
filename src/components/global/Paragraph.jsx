const Paragraph = ({ children, Style, align = "text-center" }) => {
  return (
    <p className={`text-sm sm:text-base  text-[#1D2E28] ${Style} ${align}`}>
      {children}
    </p>
  );
};

export default Paragraph;
