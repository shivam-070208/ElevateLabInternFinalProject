import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { FaGithub, FaLocationPin } from "react-icons/fa6";

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

const Template2 = ({
  theme = "minimal",
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

  const getContactIcon = (key) => {
    switch (key) {
      case "Phone": return <BiPhone size={16} />;
      case "Gmail": return <BiEnvelope size={16} />;
      case "Github": return <FaGithub size={16} />;
      case "Portfolio": return <BiWorld size={16} />;
      default: return <BiWorld size={16} />;
    }
  };

  return (
    <div className={`w-6xl mx-auto font-sans min-h-screen flex theme-${theme} bg-[var(--color-bg)]`}>
      {/* Sidebar */}
      <div className="w-80 bg-[var(--color-sidebar)] p-8 flex flex-col">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[var(--color-heading)] mb-2">
            {Name ?? resumeDataDefault.Name}
          </h1>
          <p className="text-[var(--color-secondary)] font-medium">
            {Role ?? resumeDataDefault.Role}
          </p>
        </div>

        {/* Contact */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            CONTACT
          </h2>
          <div className="space-y-3">
            {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], index) => (
              <div key={index} className="flex items-center gap-3 text-sm">
                {getContactIcon(key)}
                {key === "Phone" ? (
                  <span className="text-[var(--color-text)]">{value}</span>
                ) : (
                  <a
                    href={key === "Gmail" ? `mailto:${value}` : value}
                    className="text-[var(--color-text)] hover:text-[var(--color-secondary)] break-all"
                  >
                    {value}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            SKILLS
          </h2>
          <div className="space-y-2">
            {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
              <div key={index} className="bg-[var(--color-bg)] px-3 py-2 rounded text-sm font-medium text-[var(--color-text)]">
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h2 className="text-lg font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
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

      {/* Main Content */}
      <div className="flex-1 p-8 text-[var(--color-text)]">
        {/* Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm leading-relaxed">
            {Summary ?? resumeDataDefault.Summary}
          </p>
        </div>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            EXPERIENCE
          </h2>
          <div className="space-y-6">
            {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], index) => (
              <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                <h3 className="text-lg font-semibold text-[var(--color-secondary)]">{key}</h3>
                <p className="text-[var(--color-comment)] text-sm font-medium">{value.role}</p>
                <p className="text-sm mt-2 font-medium">{value.tagline}</p>
                <ul className="mt-3 space-y-1">
                  {value.Bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm flex items-start gap-2">
                      <span className="text-[var(--color-highlighting)] mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            PROJECTS
          </h2>
          <div className="space-y-6">
            {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], index) => (
              <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                <h3 className="text-lg font-semibold text-[var(--color-secondary)]">{key}</h3>
                <p className="text-xs text-[var(--color-comment)] flex items-center gap-1 mt-1">
                  <BiCalendar size={12} />
                  {value.StartDate} - {value.EndDate}
                </p>
                <p className="text-sm mt-2 font-medium">{value.Tagline}</p>
                <ul className="mt-3 space-y-1">
                  {value.Bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-sm flex items-start gap-2">
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
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            EDUCATION
          </h2>
          <div className="space-y-4">
            {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], index) => (
              <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                <h3 className="text-lg font-semibold text-[var(--color-secondary)]">{key}</h3>
                <p className="text-sm font-medium text-[var(--color-text)]">{value.Origin}</p>
                <div className="flex gap-4 mt-2 text-xs text-[var(--color-comment)]">
                  <span className="flex items-center gap-1">
                    <BiCalendar size={12} />
                    {value.StartDate} - {value.EndDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaLocationPin size={12} />
                    {value.Loaction}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-semibold text-[var(--color-heading)] mb-4 border-b-2 border-[var(--color-highlighting)] pb-2">
            KEY ACHIEVEMENTS
          </h2>
          <div className="space-y-4">
            {Object.entries(Achievements ?? resumeDataDefault.Achievements).map(([key, value], index) => (
              <div key={index} className="border-l-4 border-[var(--color-highlighting)] pl-4">
                <h3 className="font-semibold text-[var(--color-secondary)]">{key}</h3>
                <p className="text-sm mt-1">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
