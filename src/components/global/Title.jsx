const Title = ({ children, align = "text-center" }) => {
  return (
    <h2
      className={`font-bold text-3xl md:text-4xl lg:text-5xl secondary__font text-[#307b51] ${align}`}
    >
      {children}
    </h2>
  );
};

export default Title;
