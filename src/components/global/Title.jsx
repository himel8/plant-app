const Title = ({ children, align = "text-center" }) => {
  return (
    <h2 className={`font-bold text-3xl  text-[#0A5C36] ${align}`}>
      {children}
    </h2>
  );
};

export default Title;
