"use client";

import { useState } from "react";
import { TECollapse } from "tw-elements-react";
import PlantLogo from "./global/PlantLogo";

const FaqAccordion = ({ title, list }) => {
  const [show, setShow] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
  });

  const toggleShow = (label) => {
    setShow((prevShow) => ({
      ...prevShow,
      [label]: !prevShow[label],
    }));
  };

  return (
    <section className="py-6">
      <div className="flex gap-2 items-center mb-6">
        <PlantLogo />
        <h2 className={`font-bold text-3xl secondary__font text-[#307b51] `}>
          {title}
        </h2>
      </div>

      {/* accordion */}

      <div id="accordionExample">
        {list.map((item, index) => (
          <div
            key={index}
            className="workShadow rounded-xl border-2 border-customBorder mb-4 px-2 py-1"
          >
            <h2 className="mb-0" id={item.id}>
              <button
                className={`group relative flex w-full items-center px-5 py-4 text-left text-lg text-text transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none  `}
                type="button"
                onClick={() => toggleShow(item.label)}
                aria-expanded={show[item.label]}
                aria-controls={item.label}
              >
                {item.question}
                <span
                  className={`${
                    show[item.label]
                      ? `rotate-[-180deg] -mr-1`
                      : `rotate-0 text-[#6A6A6A] `
                  } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <TECollapse
              show={show[item.label]}
              className="!mt-0 !rounded-b-none !shadow-none z-5"
            >
              <div
                className={`px-5 py-4 text-[#6A6A6A] text-base z-4 cursor-pointer ${
                  show[item.label] ? "block" : "hidden"
                }`}
                onClick={() => toggleShow(item.label)}
                aria-expanded={show[item.label]}
                aria-controls={item.label}
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </TECollapse>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqAccordion;
