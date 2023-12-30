import Image from "next/image";
import Paragraph from "./global/Paragraph";
import PlantLogo from "./global/PlantLogo";
import Title from "./global/Title";

const GetApp = () => {
  return (
    <section>
      <div className="custom__width py-16 flex justify-center items-center gap-10 flex-col-reverse lg:flex-row xl:px-0 px-7">
        <div className="flex justify-center items-center gap-6 flex-col">
          <Image
            src="/images/plant-qr-footer.png"
            alt="qr-code"
            width={200}
            height={200}
          />
          <div className="flex justify-center items-center gap-6 flex-col sm:flex-row">
            <Image
              src="/images/plant-logo-android.png"
              alt="qr-code"
              width={200}
              height={200}
            />
            <Image
              src="/images/plant-logo-apple.png"
              alt="qr-code"
              width={200}
              height={200}
            />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <PlantLogo />
          <Title align="left">Get LeafSnap now</Title>
          <Paragraph align="left">
            Unlimited plant identification, Unlimited reminders, Unlimited plant
            collection!
          </Paragraph>
          <Paragraph align="left">
            LeafSnap is the most high-tech, comprehensive and accurate plant
            identification app ever created!
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

export default GetApp;
