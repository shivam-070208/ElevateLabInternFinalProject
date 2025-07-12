import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { FaGithub, FaLocationPin, FaStar } from "react-icons/fa6";

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

const Template3 = ({
  theme = "forest",
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
    <div className={`w-6xl mx-auto font-sans min-h-screen theme-${theme} bg-[var(--color-bg)] p-8`}>
      {/* Header */}
      <div className="text-center mb-8 bg-[var(--color-sidebar)] p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[var(--color-heading)] mb-2">
          {Name ?? resumeDataDefault.Name}
        </h1>
        <p className="text-xl text-[var(--color-secondary)] font-medium mb-4">
          {Role ?? resumeDataDefault.Role}
        </p>
        <div className="flex justify-center gap-6 text-sm">
          {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], index) => (
            <div key={index} className="flex items-center gap-2">
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

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              SUMMARY
            </h2>
            <p className="text-sm text-[var(--color-text)] leading-relaxed">
              {Summary ?? resumeDataDefault.Summary}
            </p>
          </div>

          {/* Skills */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              SKILLS
            </h2>
            <div className="flex flex-wrap gap-2">
              {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
                <span
                  key={index}
                  className="bg-[var(--color-highlighting)] text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              STRENGTHS
            </h2>
            <div className="space-y-4">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, description], index) => (
                <div key={index}>
                  <h3 className="font-semibold text-[var(--color-heading)] mb-1 text-sm">{title}</h3>
                  <p className="text-xs text-[var(--color-text)] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-6">
          {/* Experience */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              EXPERIENCE
            </h2>
            <div className="space-y-4">
              {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs text-[var(--color-comment)] font-medium">{value.role}</p>
                  <p className="text-xs mt-1 font-medium text-[var(--color-text)]">{value.tagline}</p>
                  <ul className="mt-2 space-y-1">
                    {value.Bullets.slice(0, 3).map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-xs flex items-start gap-2">
                        <span className="text-[var(--color-highlighting)] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              EDUCATION
            </h2>
            <div className="space-y-4">
              {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs font-medium text-[var(--color-text)]">{value.Origin}</p>
                  <div className="flex gap-3 mt-1 text-xs text-[var(--color-comment)]">
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
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Projects */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              PROJECTS
            </h2>
            <div className="space-y-4">
              {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs text-[var(--color-comment)] flex items-center gap-1 mt-1">
                    <BiCalendar size={10} />
                    {value.StartDate} - {value.EndDate}
                  </p>
                  <p className="text-xs mt-1 font-medium text-[var(--color-text)]">{value.Tagline}</p>
                  <ul className="mt-2 space-y-1">
                    {value.Bullets.slice(0, 2).map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-xs flex items-start gap-2">
                        <span className="text-[var(--color-highlighting)] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-[var(--color-heading)] mb-4 flex items-center gap-2">
              <FaStar className="text-[var(--color-highlighting)]" />
              ACHIEVEMENTS
            </h2>
            <div className="space-y-4">
              {Object.entries(Achievements ?? resumeDataDefault.Achievements).map(([key, value], index) => (
                <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                  <h3 className="font-bold text-[var(--color-secondary)] text-sm">{key}</h3>
                  <p className="text-xs mt-1 text-[var(--color-text)]">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
