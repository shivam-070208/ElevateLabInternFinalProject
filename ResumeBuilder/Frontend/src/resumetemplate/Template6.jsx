import React from "react";
import resumeDataDefault from "./resumeDataDefault";
import { BiCalendar, BiEnvelope, BiPhone, BiWorld } from "react-icons/bi";
import { FaGithub, FaLocationPin, FaMedal } from "react-icons/fa6";

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

const Template6 = ({
  theme = "sunset",
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
      <div className="bg-[var(--color-sidebar)] p-10 mb-8">
        <h1 className="text-4xl font-bold text-center text-[var(--color-heading)]">
          {Name ?? resumeDataDefault.Name}
        </h1>
        <p className="text-center text-[var(--color-secondary)]">
          {Role ?? resumeDataDefault.Role}
        </p>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed bg-[var(--color-sidebar)] p-4 rounded-lg shadow-lg">
              {Summary ?? resumeDataDefault.Summary}
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Experience
            </h2>
            <div className="space-y-6">
              {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {key}
                  </h3>
                  <p className="text-[var(--color-comment)] text-sm font-medium">
                    {value.role}
                  </p>
                  <ul className="mt-2">
                    {value.Bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
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
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {key}
                  </h3>
                  <p className="text-sm">
                    {value.Origin}
                  </p>
                  <p className="text-xs flex items-center gap-1 mt-2">
                    <BiCalendar /> {value.StartDate} - {value.EndDate} | <FaLocationPin /> {value.Loaction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Projects
            </h2>
            <div className="space-y-6">
              {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {key}
                  </h3>
                  <p className="text-xs text-[var(--color-comment)] flex items-center gap-1">
                    <BiCalendar /> {value.StartDate} - {value.EndDate}
                  </p>
                  <p className="text-sm mt-3">
                    {value.Tagline}
                  </p>
                  <ul className="mt-2">
                    {value.Bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2">
                        <span className="text-[var(--color-highlighting)] mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Skills
            </h2>
            <div className="bg-[var(--color-sidebar)] p-4 rounded-lg shadow-lg">
              <div className="flex flex-wrap gap-2">
                {(Skills ?? resumeDataDefault.Skills).map((skill, index) => (
                  <span key={index} className="border px-2 py-1 text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Achievements
            </h2>
            <div className="space-y-4">
              {Object.entries(Achievements ?? resumeDataDefault.Achievements).map(([key, value], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {key}
                  </h3>
                  <p className="text-sm mt-2">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--color-heading)] mb-3">
              Strengths
            </h2>
            <div className="space-y-4">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, description], index) => (
                <div key={index} className="bg-[var(--color-sidebar)] p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-[var(--color-secondary)]">
                    {title}
                  </h3>
                  <p className="text-sm mt-2">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template6;

