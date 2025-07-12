import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar } from "react-icons/bi";
import { FaCalendar, FaLocationPin } from "react-icons/fa6";
const definer = () => {
  return {
    Name: String,
    Role: String,
    Contact: Object,
    Achievements: Object,
    Projects: Object,
    Education: Object,
    Experience: Object,
    Skills: Array,
    Summary: String,
    Strengths: Object,
  };
};
const Template1 = ({
  theme = "formal",
  resumeData = {
    ...definer,
  },
}) => {
  const {
    Name,
    Role,
    Contact,
    Achievements,
    Education,
    Experience,
    Projects,
    Skills,
    Summary,
    Strengths,
  } = resumeData;

  return (
    <div
      className={`w-6xl text-[var(--color-text)] font-sans min-h-screen flex flex-col  theme-${theme} bg-[var(--color-bg)] `}
    >
      <h1 className="text-3xl text-[var(--color-heading)] uppercase font-sans font-[500] tracking-tight">
        {Name ?? resumeDataDefault.Name}
      </h1>
      <p className="text-[var(--color-secondary)] mt-1 text-sm font-semibold">
        {Role ?? resumeDataDefault.Role}
      </p>
      <div className="flex gap-7 mt-4 text-sm font-bold">
        {Object.entries(Contact ?? resumeDataDefault.Contact).map(
          ([key, value], index) => {
            if (key == "Phone")
              return (
                <span title={key} key={index}>
                  {value}
                </span>
              );
            else if (key == "Portfolio")
              return (
                <a href={value} key={index} target="_blank">
                  {key}
                </a>
              );
            return (
              <a
                href={key == "Gmail" ? `mailto:${value}` : value}
                title={key}
                key={index}
              >
                {value}
              </a>
            );
          }
        )}
      </div>
      <div className="flex-1 flex gap-19 mt-5">
        <div className="flex-1 space-y-5">
          <div className="">
            <div className="text-2xl tracking-tight font-noramal  pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Summary
            </div>
            <p className="w-full text-sm leading-tight font-medium mt-3 ">
              {Summary ?? resumeDataDefault.Summary}
            </p>
          </div>
          <div className="">
            <div className="text-2xl tracking-tight font-noramal pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Experiences
            </div>
            <div className="px-1">
              {Object.entries(Experience ?? resumeDataDefault.Experience).map(
                ([key, value], index) => (
                  <div
                    className="mt-4 font-semibold pb-4 border-b border-dashed"
                    key={index}
                  >
                    <h1 className="text-lg text-[var(--color-secondary)] font-bold">
                      {key}
                    </h1>
                    <p className="text-[var(--color-comment)] text-xs">
                      {value.role}
                    </p>
                    <p className="text-sm text-[var(--color-text)] leading-tight mt-1 ml-1 ">
                      {value.tagline}
                    </p>
                    <ol className="space-y-1 mt-2 list-disc">
                      {value.Bullets.map((item, index) => (
                        <li
                          className="text-sm leading-tight  ml-2  "
                          key={index}
                        >
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="">
            <div className="text-2xl tracking-tight   font-noramal font-sans pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Education
            </div>
            <div>
              {Object.entries(Education ?? resumeDataDefault.Education).map(
                ([key, value], index) => (
                  <div className="pb-3 border-b border-dashed mt-2" key={index}>
                    <h2 className="text-[var(--color-heading)] tracking-tight text-lg">
                      {key}
                    </h2>
                    <p className="text-[var(--color-secondary)] text-sm mb-1 font-bold font-sans ml-1">
                      {value.Origin}
                    </p>
                    <div className="flex gap-3">
                      {" "}
                      <p className="ml-1 text-sm flex  items-center  gap-1 ">
                        <BiCalendar size={14} />
                        {value.StartDate} - {value.EndDate}
                      </p>
                      <p className="ml-1 text-sm flex  items-center  gap-1 ">
                        <FaLocationPin size={14} />
                        {value.Loaction}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="w-[45%] space-y-5">
          <div>
            <div className="text-2xl tracking-tight font-noramal font-sans pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Key Achievements
            </div>
            <div>
              {Object.entries(
                Achievements ?? resumeDataDefault.Achievements
              ).map(([key, value], index) => (
                <div key={index} className="border-b pb-4 border-dashed">
                  <div className="text-[var(--color-heading)] font-semibold">
                    <div className="border border-[var(--color-highlighting)] w-4 h-4 mr-3 translate-y-6 inline-block" />
                    {key}
                  </div>
                  <p className="leading-tight ml-10 text-sm font-semibold">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-2xl tracking-tight font-noramal font-sans pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Projects
            </div>
            <div className="w-full pl-2">
              {Object.entries(Projects ?? resumeDataDefault.Projects).map(
                ([key, value], index) => (
                  <div key={index} className="border-b border-dashed pb-4 mt-3">
                    <h1 className="text-[var(--color-heading)] font-semibold ">
                      {key}
                    </h1>
                    <p className="flex items-center gap-3 text-xs ml-2">
                      <FaCalendar size={14} />
                      {value.StartDate} - {value.EndDate}
                    </p>
                    <p className="ml-2 text-sm  font-semibold mt-2">
                      {value.Tagline}
                    </p>
                    <ul className="list-disc ml-2 text-sm font-semibold">
                      {value.Bullets.map((value, index) => (
                        <li key={index}>{value}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </div>
          <div>
            <div className="text-2xl tracking-tight font-noramal font-sans pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Skills
            </div>
            <div className="w-full flex flex-wrap gap-2 px-2 justify-evenly">
              {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
                <span key={index} className="px-2 py-2  whitespace-nowrap border-b-2 font-semibold text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-2xl tracking-tight font-normal font-sans pb-1 uppercase border-b-4 text-[var(--color-heading)]">
              Strengths
            </div>
            <div className="w-full space-y-0.5 pt-2">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(
                ([title, description], index) => (
                  <div
                    key={index}
                    className="px-2 border-b border-dashed pb-3"
                  >
                    <h4 className=" font-semibold text-[var(--color-heading)] mb-1">
                      {title}
                    </h4>
                    <p className="font-semibold text-sm">
                      {description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;
