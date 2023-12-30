"use client";

import FaqAccordion from "@/components/FaqAccordion";
import ScrollUp from "@/components/ScrollUp";
import Title from "@/components/global/Title";
import Image from "next/image";

const accordionData1 = [
  {
    id: "headingOne",
    element: "element1",
    question: "One of the identifications is not accurate, what should I do?",
    answer:
      "Since the app relies on a single picture to identify,sometimes changing the angle or distance a bit can help and please make sure the camera is focused on the species you want to identify. If you do know the correct name, you could correct the identification on the result page. After taking or uploading a picture, please scroll to the end, then tap “Change the result” to input the name manually. If you don’t know the name, please feel free to contact our human experts to identify (Email: contact@leafsnap.app).",
    label: "collapse1",
  },
  {
    id: "Framer Sites Development",
    element: "element2",
    question:
      "Why do I need to give LeafSnap permission to access my camera and gallery?",
    answer:
      "Yes, and if you do not the app will become non-responsive during the identification process! When you Snap a photo with LeafSnap, the app needs somewhere to store that photo on your phone. LeafSnap creates an album in your camera gallery called LeafSnap, where your LeafSnap photos are stored. If you do not allow access to your camera gallery, LeafSnap has nowhere on your phone to store and analyze the photos, so it will not work properly.",
    label: "collapse2",
  },
  {
    id: "headingThree",
    element: "element3",
    question: "Can I use LeafSnap offline?",
    answer:
      "Since LeafSnap runs on a huge plant database, the identification process requires a network connection. However, if you are somewhere without a connection but would like to identify a plant, simply take the photo and save them to your gallery. When able to connect to the Internet, simply upload the photo into the app!",
    label: "collapse3",
  },
  {
    id: "headingFour",
    element: "element4",
    question: "How do I share my identification with friends?",
    answer:
      "I’m glad to hear that you’d like to share the information with your friends. To do so, here are instructions:<br/>1. Tap the plant picture you’d like to share<br/> 2. Tap “Readmore” button at the bottom<br/> 3. Tap to Share with Friend and Select a channel to export the information out.",
    label: "collapse4",
  },
];
const accordionData2 = [
  {
    id: "headingOne",
    element: "element1",
    question: "How to restore my Premium membership on a new device?",
    answer: "This function is developing, and it will be available soon?",
    label: "collapse1",
  },
];
const accordionData3 = [
  {
    id: "headingOne",
    element: "element1",
    question: "What privileges do LeafSnap Premium offer?",
    answer:
      "LeafSnap Premium unlocks unlimited smart plant identifications, full access to plant info, plant care reminders and guides. Ads are also removed for Premium members. You can access everything through the LeafSnap app.<br/>The Premium subscription includes:<br/>1. Identify plants without limits<br/>2. No ads<br/>3. Step-by-step plant care guides<br/>4. Plant care reminder without limits<br/>5. Advanced Identification<br/>6. Access to database of over 30,000+ species",
    label: "collapse1",
  },
  {
    id: "headingTwo",
    element: "element2",
    question: "How to subscribe LeafSnap?",
    answer:
      "You can tap to Premium button on the Home page and choose the Package you want.",
    label: "collapse2",
  },
  {
    id: "headingThree",
    element: "element3",
    question: "How to unsubscribe LeafSnap?",
    answer:
      "If you want to cancel the subscription, please follow the instructions below<br/>- iOS:<br/>Step to cancel your subscriptions<br/>1.Open the Settings app.<br/>2.Tap your name<br/>3.Tap Subscriptions<br/>4.Tap the subscription<br/>5.Select LeafSnap-Plant Identification<br/>6.Scroll to the bottom and select 'Cancel Subscription'<br/>7.Select 'Confirm' to cancel<br/>- Android: https://support.google.com/googleplay/answer/7018481",
    label: "collapse3",
  },
];
const accordionData4 = [
  {
    id: "headingOne",
    element: "element1",
    question: "How can I propose a new feature?",
    answer:
      "All you have to do is write to us by e-mail, indicating as precisely as possible the type of functionality you would like to provide. The ideas we receive enrich the list of evolutions that we plan on an ongoing basis, and that we do our best to implement. Please contact us at contact@leafsnap.app",
    label: "collapse1",
  },
  {
    id: "headingTwo",
    element: "element2",
    question: "Some function is not working, what should I do?",
    answer:
      "Restart or update to the latest version usually solves most technical issues. If the problem persists, please feel free to find us at contact@leafsnap.app",
    label: "collapse2",
  },
];

const page = () => {
  return (
    <main className="pt-40 pb-20 custom__width xl:px-0 px-4">
      <Title>Frequently Asked Questions</Title>
      <div className="flex justify-center items-center py-4">
        <Image
          src="/images/plant-qa.png"
          alt="faq-img"
          width={80}
          height={80}
          className=" align-middle"
        />
      </div>

      {/* Using LeafSnap */}
      <FaqAccordion list={accordionData1} title=" Using LeafSnap" />

      {/* Managing Your Account */}
      <FaqAccordion list={accordionData2} title=" Managing Your Account" />

      {/* Subscription */}
      <FaqAccordion list={accordionData3} title="Subscription" />

      {/* Other */}
      <FaqAccordion list={accordionData4} title="Other" />
      <ScrollUp />
    </main>
  );
};

export default page;
