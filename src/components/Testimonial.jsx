import Paragraph from "./global/Paragraph";
import SubTitle from "./global/SubTitle";
import Title from "./global/Title";

const testimonialData = [
  {
    title: "Best plant app for plant lovers!",
    desc: "I love the watering reminders. Plant notification is thorough and extensive! Me and my plant bbs are very happy!!!!",
  },
  {
    title: "Wow, this is cool and easy!",
    desc: "I am a new gardener. I've been hoping to find an app like this where I can find all the details to care for specific plants. Also I was hoping for an app to identify plants around my property. This one seems to have it all and it's easy to use! And it has reminders! Thank you.",
  },
  {
    title: "Really cute and helpful so far!!",
    desc: "I love the interface and the aesthetic of this app. It's so calming and easy to use, really makes me feel like a proper Plant Mom.",
  },
];

const Testimonial = () => {
  return (
    <section className="py-6 custom__width">
      <Title>OUR USERS SAY</Title>
      <div className="py-10 flex justify-center items-center gap-6">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="custom__shadow p-6 rounded-lg w-full flex flex-col gap-3"
          >
            <SubTitle Style="font-medium">{item.title}</SubTitle>
            <Paragraph Style="font-normal ">{item.desc}</Paragraph>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
