/* eslint-disable @next/next/no-img-element */
import CustomBtn from "./global/CustomBtn";

const Hero = () => {
  return (
    <section className="h-screen flex justify-between items-center gap-10 custom__width">
      <div className="w-full">
        <h2 className="font-[800] text-4xl">
          LeafSnap
          <br /> Plant Identification & Care
        </h2>
        <p className="text-lg mb-6">
          Instantly identify plants around you and learn how to care for them.
        </p>
        <CustomBtn link="#!">Start now</CustomBtn>
      </div>
      <div className="w-full">
        <img
          src="/images/plant-banner.png"
          alt="bannar-img"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
