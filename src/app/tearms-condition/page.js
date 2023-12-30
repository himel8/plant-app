/* eslint-disable react/no-unescaped-entities */
"use client";

import ScrollUp from "@/components/ScrollUp";
import SubTitle from "@/components/global/SubTitle";

const tearmsList = [
  {
    title: "Terms and Conditions of Use",
    des: 'These terms and conditions ("Terms") govern your use of [Your Website Name] ("the Website"), operated by [Your Company Name] ("the Company"). By accessing and using the Website, you agree to be bound by these Terms. If you do not agree to these Terms, please refrain from using the Website.',
  },
  {
    title: "1. Acceptance of Terms",
    des: "By using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms. The Company reserves the right to modify or amend these Terms at any time without prior notice. It is your responsibility to review these Terms regularly for updates.",
  },
  {
    title: "2. User Eligibility",
    des: "You must be at least 18 years old or have the legal capacity to enter into a contract in your jurisdiction to use the Website. If you are under 18, you may use the Website only with the involvement of a parent or guardian.",
  },
  {
    title: "3. Privacy Policy",
    des: "Your use of the Website is also governed by our Privacy Policy, which can be found [provide a link to your privacy policy]. By using the Website, you consent to the terms of our Privacy Policy.",
  },
  {
    title: "4. User Account",
    des: "If the Website requires you to create an account, you are responsible for maintaining the confidentiality of your account information and for restricting access to your computer or device. You agree to accept responsibility for all activities that occur under your account.",
  },
  {
    title: "5. Intellectual Property",
    des: "All content on the Website, including but not limited to text, graphics, logos, images, and software, is the property of the Company and is protected by intellectual property laws. You may not use, reproduce, modify, distribute, or display any part of the Website without the Company's prior written consent.",
  },
  {
    title: "6.Prohibited Conduct",
    des: "You agree not to engage in any conduct that may violate these Terms, local laws, or the rights of others. Prohibited conduct includes, but is not limited to, the following:<br/><br/>1. Transmitting any unlawful, threatening, defamatory, obscene, or otherwise objectionable content.<br/>2.Interfering with the proper functioning of the Website.<br/>3.Attempting to gain unauthorized access to the Website or its related systems.<br/>4.Engaging in any form of data mining, harvesting, or extraction.",
  },
  {
    title: "7. Termination of Access",
    des: "The Company reserves the right to terminate or suspend your access to the Website at its sole discretion, without notice, for any reason, including, but not limited to, violation of these Terms.",
  },
  {
    title: "8. Disclaimer of Warranties",
    des: 'The Website is provided on an "as-is" and "as-available" basis. The Company makes no warranties, expressed or implied, regarding the accuracy, completeness, or availability of the Website.',
  },
  {
    title: "9. Limitation of Liability",
    des: "The Company shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Website.",
  },
  {
    title: "10. Governing Law",
    des: "These Terms are governed by the laws of [Your Jurisdiction]. Any legal action arising out of your use of the Website shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].",
  },
  {
    title: "Contact Information",
    des: "If you have any questions or concerns about these Terms, please contact us at [Your Contact Information].",
  },
];

const page = () => {
  return (
    <main className="custom__width pt-40 pb-20 xl:px-0 px-4">
      {tearmsList.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 pb-6">
          <SubTitle align="text-left">{item.title}</SubTitle>

          <p
            className="text-base  text-[#1D2E28] "
            dangerouslySetInnerHTML={{ __html: item.des }}
          />
        </div>
      ))}
      <ScrollUp />
    </main>
  );
};

export default page;
