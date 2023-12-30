import ScrollToTop from "react-scroll-to-top";

const ScrollUp = () => {
  return (
    <ScrollToTop
      smooth
      color="#fff"
      size={40}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        background: "linear-gradient(90deg, #5cb38a, #7fc496)",
      }}
    />
  );
};

export default ScrollUp;
