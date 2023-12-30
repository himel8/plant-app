import Image from "next/image";
import Link from "next/link";
import Img1 from "../../public/images/features/features-01.png";
import Img2 from "../../public/images/features/features-02.png";
import Img3 from "../../public/images/features/features-03.png";
import Img4 from "../../public/images/features/features-04.png";
import Img5 from "../../public/images/features/features-05.png";
import Img6 from "../../public/images/features/features-06.png";
import Img7 from "../../public/images/features/features-07.png";
import Img8 from "../../public/images/features/features-08.png";
import Img9 from "../../public/images/features/features-09.png";
import Img10 from "../../public/images/features/features-10.png";
import Paragraph from "./global/Paragraph";
import SubTitle from "./global/SubTitle";
import Title from "./global/Title";

const featuresList = [
  {
    icon: Img1,
    title: "Plant info and care tips",
    desc: "Get your plant care questions answered! Learn more about your plants and find detailed plant care information on watering, propagating, fertilizing, and more.",
    isBtn: false,
    link: "",
  },
  {
    icon: Img2,
    title: "Care reminders",
    desc: "Forget to water your plants on time? Not anymore! Set up plant care reminders and get notified when it's time to water, fertilize or repot your plant.",
    isBtn: false,
    link: "",
  },
  {
    icon: Img3,
    title: "Plant disease identification",
    desc: "Not sure why your plant is suffering? Diagnose your plant, and learn how to prevent and treat plant diseases.",
    isBtn: true,
    link: "#!",
  },
  {
    icon: Img4,
    title: "Accurate identification",
    desc: "Identify more than 30,000+ plants, flowers, succulents, and trees. How? Just take a snap or upload a photo from your gallery.",
    isBtn: true,
    link: "#!",
  },
  {
    icon: Img5,
    title: "Gardening schedule",
    desc: "Grow organic edible plants with Blossom! Plan your seeding season with a personalized planting schedule, and get additional care reminders for your edible garden.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img6,
    title: "Personal plant collection",
    desc: 'Keep track of your green friends in "My Garden", and add the plants you are planning to grow to your personal "Wishlist." ',
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img7,
    title: "Light meter",
    desc: "Find the ideal spot for your plant, based on how much light it needs. Measure the light level in your space to help your plant feel at home.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img8,
    title: "Green blog",
    desc: "Check out the “Plant care basics” series to learn more about your plants’ needs. Look for useful and easy-to-follow plant care tips and gardening insights.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img9,
    title: "Advanced search",
    desc: "Looking for a new plant to grow? Find a perfect green friend based on your criteria: light requirements, care difficulty level, plant type, pet safety, and more.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img10,
    title: "Notes",
    desc: "Journal the life of your plants – monitor their growth and development, celebrate the first blooms, describe your plant care routine, or attach photos to see how your plant has changed.",
    isBtn: false,
    link: "#!",
  },
];

const Features = () => {
  return (
    <section className=" bg-featureBg bg-cover bg__position py-28" id="about">
      <div className="custom__width">
        <Title>Key Features</Title>
        <div className="flex items-stretch gap-4 justify-center flex-wrap mt-6">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  gap-6 items-center py-6 px-3 card__shadow my-4 rounded-lg max-w-[340px] sm:max-w-[280px] hover:-translate-y-2 transform duration-300 ease-in-out"
            >
              <Image src={item.icon} alt={item.title} width={80} height={80} />
              <SubTitle Style={"font-bold"}>{item.title}</SubTitle>
              <Paragraph Style={"font-normal leading-[32px]"}>
                {item.desc}
              </Paragraph>
              {item.isBtn && (
                <Link
                  href={item.link}
                  className="custom__botton2 py-4 px-8 text-white secondary__font font-semibold text-sm rounded-full sm:text-base md:text-lg text-center"
                >
                  Learn More
                </Link>
              )}{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
