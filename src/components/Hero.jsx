/* eslint-disable @next/next/no-img-element */
import CustomBtn from "./global/CustomBtn";
import PlantLogo from "./global/PlantLogo";

const Hero = () => {
  return (
    <section className="lg:h-screen flex justify-between items-center gap-10 custom__width pt-20 lg:pt-10 xl:px-0 px-7 lg:flex-row flex-col-reverse">
      <div className="w-full flex flex-col gap-6 items-start">
        <PlantLogo />
        <h2 className="secondary__font font-[800] text-4xl md:text-5xl lg:text-[55px] lg:leading-[60px] text-[#307b51]">
          LeafSnap
          <br /> Plant Identification & Care
        </h2>
        <p className="text-lg">
          Instantly identify plants around you and learn how to care for them.
        </p>
        <CustomBtn link="#!">Start now</CustomBtn>
      </div>
      <div className="w-full flex justify-center items-center">
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
