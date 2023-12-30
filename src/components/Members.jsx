import Title from "./global/Title";

const memberData = [
  { name: "Plants Identified", number: "18,500,500+" },
  { name: "Care reminders completed", number: "4,880,000+" },
  { name: "Plants grown with Blossom", number: "3,190,000+" },
];

const Members = () => {
  return (
    <section className="bg-featureBg bg-cover bg__position py-28 mb-10">
      <div className="custom__width">
        <Title>Blossom in Numbers</Title>
        <div className="flex justify-center gap-6 md:gap-10 lg:gap-20 flex-wrap">
          {memberData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 pt-20 max-w-[260px]"
            >
              <h3 className="secondary__font font-[800] text-3xl text-[#0A5C36]">
                {item.number}
              </h3>
              <p className="text-lg">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
