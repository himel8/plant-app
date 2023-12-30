import Image from "next/image";
import CustomBtn from "./global/CustomBtn";
import Title from "./global/Title";

const PerfectPlant = () => {
  return (
    <section className="custom__width flex justify-center items-center gap-10 py-10 lg:flex-row flex-col">
      <Image
        src="/images/prof-bloom.png"
        width={300}
        height={300}
        alt="perfect-plant"
      />
      <div className="flex flex-col gap-6 ">
        <Title>Find Your Perfect Plant</Title>
        <CustomBtn link="">Take the FAQ</CustomBtn>
      </div>
    </section>
  );
};

export default PerfectPlant;
