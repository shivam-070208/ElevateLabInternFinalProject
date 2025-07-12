import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { FaGithub, FaLocationPin, FaCode } from "react-icons/fa6";

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

const Template5 = ({
  theme = "oceanic",
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
    <div className={`w-6xl mx-auto p-4 font-sans min-h-screen theme-${theme} bg-[var(--color-bg)] text-[var(--color-text)]`}>
      {/* Header with gradient-like design */}
      <div className="relative overflow-hidden">
        <div className="bg-[var(--color-sidebar)] p-10 relative z-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-highlighting)] opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--color-highlighting)] opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
          <div className="relative z-20 text-center">
            <h1 className="text-4xl font-bold text-[var(--color-heading)] mb-3">
              {Name ?? resumeDataDefault.Name}
            </h1>
            <p className="text-xl text-[var(--color-secondary)] font-medium mb-6">
              {Role ?? resumeDataDefault.Role}
            </p>
            <div className="flex justify-center gap-8 text-sm">
              {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], index) => (
                <div key={index} className="flex items-center gap-2 bg-[var(--color-bg)] px-3 py-2 rounded-full">
                  {key === "Phone" && <BiPhone size={16} className="text-[var(--color-highlighting)]" />}
                  {key === "Gmail" && <BiEnvelope size={16} className="text-[var(--color-highlighting)]" />}
                  {key === "Github" && <FaGithub size={16} className="text-[var(--color-highlighting)]" />}
                  {key === "Portfolio" && <BiWorld size={16} className="text-[var(--color-highlighting)]" />}
                  {key === "Phone" ? (
                    <span className="text-[var(--color-text)]">{value}</span>
                  ) : (
                    <a
                      href={key === "Gmail" ? `mailto:${value}` : value}
                      className="text-[var(--color-text)] hover:text-[var(--color-secondary)]"
                    >
                      {key === "Gmail" ? value : key}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8 flex gap-8">
        {/* Left Column */}
        <div className="w-2/3 space-y-8">
          {/* Summary */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">SUMMARY</h2>
              <div className="flex-1 h-0.5 bg-[var(--color-highlighting)]"></div>
            </div>
            <p className="text-sm leading-relaxed bg-[var(--color-sidebar)] p-4 rounded-lg">
              {Summary ?? resumeDataDefault.Summary}
            </p>
          </div>

          {/* Experience */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">EXPERIENCE</h2>
              <div className="flex-1 h-0.5 bg-[var(--color-highlighting)]"></div>
            </div>
            <div className="space-y-6">
              {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-6 rounded-lg relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-highlighting)] rounded-l-lg"></div>
                  <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-1">{key}</h3>
                  <p className="text-[var(--color-comment)] text-sm font-medium mb-2">{value.role}</p>
                  <p className="text-sm font-medium mb-3">{value.tagline}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {value.Bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="text-sm flex items-start gap-2">
                        <span className="text-[var(--color-highlighting)] mt-1">●</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">PROJECTS</h2>
              <div className="flex-1 h-0.5 bg-[var(--color-highlighting)]"></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-6 rounded-lg relative">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color-highlighting)] rounded-l-lg"></div>
                  <h3 className="text-lg font-bold text-[var(--color-secondary)] mb-1">{key}</h3>
                  <p className="text-xs text-[var(--color-comment)] flex items-center gap-1 mb-2">
                    <BiCalendar size={12} />
                    {value.StartDate} - {value.EndDate}
                  </p>
                  <p className="text-sm font-medium mb-3">{value.Tagline}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {value.Bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="text-sm flex items-start gap-2">
                        <span className="text-[var(--color-highlighting)] mt-1">●</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 space-y-8">
          {/* Skills */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-xl font-bold text-[var(--color-heading)]">SKILLS</h2>
            </div>
            <div className="bg-[var(--color-sidebar)] p-6 rounded-lg">
              <div className="grid grid-cols-1 gap-2">
                {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[var(--color-highlighting)] rounded-full"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-xl font-bold text-[var(--color-heading)]">EDUCATION</h2>
            </div>
            <div className="bg-[var(--color-sidebar)] p-6 rounded-lg space-y-4">
              {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs font-medium text-[var(--color-text)] mt-1">{value.Origin}</p>
                  <div className="flex flex-col gap-1 mt-2 text-xs text-[var(--color-comment)]">
                    <span className="flex items-center gap-1">
                      <BiCalendar size={10} />
                      {value.StartDate} - {value.EndDate}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaLocationPin size={10} />
                      {value.Loaction}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-xl font-bold text-[var(--color-heading)]">ACHIEVEMENTS</h2>
            </div>
            <div className="bg-[var(--color-sidebar)] p-6 rounded-lg space-y-4">
              {Object.entries(Achievements ?? resumeDataDefault.Achievements).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaCode className="text-[var(--color-highlighting)]" size={20} />
              <h2 className="text-xl font-bold text-[var(--color-heading)]">STRENGTHS</h2>
            </div>
            <div className="bg-[var(--color-sidebar)] p-6 rounded-lg space-y-4">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, description], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm mb-1">{title}</h3>
                  <p className="text-xs leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template5;
