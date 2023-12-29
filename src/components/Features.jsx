import Image from "next/image";
import Img1 from "../../public/images/features/plant01.png";
import CustomBtn from "./global/CustomBtn";
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
    icon: Img1,
    title: "Care reminders",
    desc: "Forget to water your plants on time? Not anymore! Set up plant care reminders and get notified when it's time to water, fertilize or repot your plant.",
    isBtn: false,
    link: "",
  },
  {
    icon: Img1,
    title: "Plant disease identification",
    desc: "Not sure why your plant is suffering? Diagnose your plant, and learn how to prevent and treat plant diseases.",
    isBtn: true,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Accurate identification",
    desc: "Identify more than 30,000+ plants, flowers, succulents, and trees. How? Just take a snap or upload a photo from your gallery.",
    isBtn: true,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Gardening schedule",
    desc: "Grow organic edible plants with Blossom! Plan your seeding season with a personalized planting schedule, and get additional care reminders for your edible garden.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Personal plant collection",
    desc: 'Keep track of your green friends in "My Garden", and add the plants you are planning to grow to your personal "Wishlist." ',
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Light meter",
    desc: "Find the ideal spot for your plant, based on how much light it needs. Measure the light level in your space to help your plant feel at home.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Green blog",
    desc: "Check out the “Plant care basics” series to learn more about your plants’ needs. Look for useful and easy-to-follow plant care tips and gardening insights.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Advanced search",
    desc: "Looking for a new plant to grow? Find a perfect green friend based on your criteria: light requirements, care difficulty level, plant type, pet safety, and more.",
    isBtn: false,
    link: "#!",
  },
  {
    icon: Img1,
    title: "Notes",
    desc: "Journal the life of your plants – monitor their growth and development, celebrate the first blooms, describe your plant care routine, or attach photos to see how your plant has changed.",
    isBtn: false,
    link: "#!",
  },
];

const Features = () => {
  return (
    <section className=" bg-featureBg bg-cover bg__position py-28">
      <div className="custom__width">
        <Title>KEY FEATURES</Title>
        <div className="flex items-stretch gap-4 justify-center flex-wrap mt-6">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col  gap-6 items-center p-6 card__shadow my-4 rounded-lg max-w-[280px]"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={150}
                height={150}
              />
              <SubTitle Style={"font-bold"}>{item.title}</SubTitle>
              <Paragraph Style={"font-medium leading-[32px]"}>
                {item.desc}
              </Paragraph>
              {item.isBtn && <CustomBtn link={item.link}>Learn More</CustomBtn>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
