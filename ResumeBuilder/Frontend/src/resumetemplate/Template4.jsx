import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { FaGithub, FaLocationPin, FaCircle } from "react-icons/fa6";

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

const Template4 = ({
  theme = "midnight",
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
    <div className={`w-6xl mx-auto font-sans min-h-screen theme-${theme} bg-[var(--color-bg)] text-[var(--color-text)]`}>
      {/* Header */}
      <div className="bg-[var(--color-sidebar)] p-12 text-center">
        <h1 className="text-5xl font-bold text-[var(--color-heading)] mb-3">
          {Name ?? resumeDataDefault.Name}
        </h1>
        <div className="w-24 h-1 bg-[var(--color-highlighting)] mx-auto mb-4"></div>
        <p className="text-2xl text-[var(--color-secondary)] font-medium mb-6">
          {Role ?? resumeDataDefault.Role}
        </p>
        <div className="flex justify-center gap-8 text-sm">
          {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], index) => (
            <div key={index} className="flex items-center gap-2">
              {key === "Phone" && <BiPhone size={18} className="text-[var(--color-highlighting)]" />}
              {key === "Gmail" && <BiEnvelope size={18} className="text-[var(--color-highlighting)]" />}
              {key === "Github" && <FaGithub size={18} className="text-[var(--color-highlighting)]" />}
              {key === "Portfolio" && <BiWorld size={18} className="text-[var(--color-highlighting)]" />}
              {key === "Phone" ? (
                <span className="text-[var(--color-text)]">{value}</span>
              ) : (
                <a
                  href={key === "Gmail" ? `mailto:${value}` : value}
                  className="text-[var(--color-text)] hover:text-[var(--color-highlighting)]"
                >
                  {key === "Gmail" ? value : key}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-2/3 p-8">
          {/* Summary */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 relative">
              PROFESSIONAL SUMMARY
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <p className="text-sm leading-relaxed">
              {Summary ?? resumeDataDefault.Summary}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 relative">
              EXPERIENCE
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--color-highlighting)]"></div>
              <div className="space-y-8">
                {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], index) => (
                  <div key={index} className="relative pl-12">
                    <FaCircle className="absolute left-2 top-2 text-[var(--color-highlighting)]" size={12} />
                    <div className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
                      <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{key}</h3>
                      <p className="text-[var(--color-comment)] font-medium mb-3">{value.role}</p>
                      <p className="text-sm mb-4 font-medium">{value.tagline}</p>
                      <ul className="space-y-2">
                        {value.Bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="text-sm flex items-start gap-3">
                            <span className="text-[var(--color-highlighting)] mt-1">▶</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-heading)] mb-6 relative">
              PROJECTS
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="space-y-6">
              {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)] mb-2">{key}</h3>
                  <p className="text-xs text-[var(--color-comment)] flex items-center gap-2 mb-3">
                    <BiCalendar size={14} />
                    {value.StartDate} - {value.EndDate}
                  </p>
                  <p className="text-sm mb-4 font-medium">{value.Tagline}</p>
                  <ul className="space-y-2">
                    {value.Bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-sm flex items-start gap-3">
                        <span className="text-[var(--color-highlighting)] mt-1">▶</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/3 bg-[var(--color-sidebar)] p-8">
          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-4 relative">
              SKILLS
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="space-y-3">
              {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[var(--color-highlighting)] rounded-full"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-4 relative">
              EDUCATION
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="space-y-4">
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-4 relative">
              ACHIEVEMENTS
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="space-y-4">
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
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-4 relative">
              STRENGTHS
              <div className="absolute bottom-0 left-0 w-12 h-1 bg-[var(--color-highlighting)]"></div>
            </h2>
            <div className="space-y-4">
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

export default Template4;
