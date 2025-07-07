import React from "react";
import resumeData from "./resumedata";

const Template1 = () => {
  const {
    name,
    title,
    contact,
    summary,
    experience,
    education,
    skills,
    software,
    certifications,
  } = resumeData;

  return (
    <div
      className="theme-eclipse max-w-5xl mx-auto min-h-screen font-sans px-6 py-12"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      <div
        className="w-full mx-auto p-6 rounded-xl shadow-xl"
        style={{
          background: "var(--glass)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Header */}
        <div
          className="mb-8 p-6 rounded-lg shadow"
          style={{ background: "var(--color-header)" }}
        >
          <h1
            className="text-4xl font-bold font-mono tracking-tight"
            style={{ color: "var(--color-name)" }}
          >
            {name}
          </h1>
          <p
            className="text-lg font-semibold"
            style={{ color: "var(--color-role)" }}
          >
            {title}
          </p>
          <div
            className="flex flex-wrap justify-between mt-4 text-sm"
            style={{ color: "var(--color-contact)" }}
          >
            <div>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Email:</strong> {contact.email}</p>
            </div>
            <div>
              <p><strong>LinkedIn:</strong> {contact.linkedin}</p>
              <p><strong>Twitter:</strong> {contact.twitter}</p>
            </div>
          </div>
        </div>

        {/* Generic Section Block */}
        {[
          { title: "Summary", content: <p className="leading-relaxed">{summary}</p> },
          {
            title: "Experience",
            content: experience.map((job, idx) => (
              <div key={idx} className="mb-6">
                <p className="text-sm font-semibold">{job.date}</p>
                <h3 className="text-lg font-bold">{job.role}</h3>
                <p className="italic">{job.company}</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  {job.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )),
          },
          {
            title: "Education",
            content: (
              <>
                <p className="text-sm font-semibold">{education.date}</p>
                <p className="font-bold">
                  {education.degree}, {education.institution}
                </p>
                <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                  {education.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </>
            ),
          },
          {
            title: "Skills",
            content: (
              <ul className="list-disc list-inside text-sm space-y-1">
                {skills.map((skill, i) => (
                  <li key={i}>
                    <strong>{skill.name}</strong> – {skill.description}
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Software",
            content: (
              <ul className="text-sm space-y-1">
                {software.map((item, i) => (
                  <li key={i}>
                    {item.name}{" "}
                    <span className="ml-4 text-gray-500">
                      {"●".repeat(Math.floor(item.rating))}
                      {item.rating % 1 !== 0 && "◐"} {item.level}
                    </span>
                  </li>
                ))}
              </ul>
            ),
          },
          {
            title: "Certifications",
            content: (
              <ul className="text-sm">
                {certifications.map((cert, i) => (
                  <li key={i}>
                    <strong>{cert.date}</strong> – {cert.title},{" "}
                    {cert.organization}
                  </li>
                ))}
              </ul>
            ),
          },
        ].map((block, index) => (
          <section key={index} className="mb-10">
            <div
              className="px-2 py-1 rounded mb-3 inline-block"
              style={{ backgroundColor: "var(--color-subheading)" }}
            >
              <h2 className="text-xl font-bold font-mono">{block.title}</h2>
            </div>
            {block.content}
          </section>
        ))}
      </div>
    </div>
  );
};

export default Template1;
