import React from "react";
import { FaPhone, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import resumeData from "./resumedata";

const Template2 = () => {
  const {
    name,
    role,
    photo,
    contact,
    summary,
    experience,
    education,
    skills,
    software,
    certifications,
    projects,
  } = resumeData;

  return (
    <div
      className="theme-glacier max-w-6xl mx-auto flex min-h-screen font-sans shadow-2xl rounded-lg overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text)",
      }}
    >
      {/* Sidebar */}
      <aside
        className="w-1/4 p-6 text-sm flex flex-col items-center gap-4 backdrop-blur-lg"
        style={{
          background: "var(--glass)",
        }}
      >
        {/* Profile Image */}
        {photo && (
          <img
            src={photo}
            alt={`${name}'s profile`}
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
        )}
        <h1
          className="text-xl font-bold text-center tracking-tight"
          style={{ color: "var(--color-name)" }}
        >
          {name}
        </h1>
        <p
          className="text-center font-medium"
          style={{ color: "var(--color-role)" }}
        >
          {role}
        </p>

        {/* Contact */}
        <div
          className="mt-4 space-y-2 text-sm w-full"
          style={{ color: "var(--color-contact)" }}
        >
          <p className="flex items-center gap-2">
            <FaPhone /> {contact.phone}
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> {contact.email}
          </p>
          <p className="flex items-center gap-2">
            <FaLinkedin /> {contact.linkedin}
          </p>
          <p className="flex items-center gap-2">
            <FaTwitter /> {contact.twitter}
          </p>
        </div>

        {/* Skills */}
        <div className="mt-6 w-full">
          <h2
            className="text-sm font-bold mb-2 px-2 py-1 rounded"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Skills
          </h2>
          <ul className="space-y-2 pl-2">
            {skills.map((skill, i) => (
              <li key={i} className="text-sm">
                • {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-8 space-y-10">
        {/* Summary */}
        <section>
          <h2
            className="text-xl font-bold mb-2 px-2 py-1 rounded inline-block"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Summary
          </h2>
          <p className="px-5">{summary}</p>
        </section>

        {/* Experience */}
        <section>
          <h2
            className="text-xl font-bold mb-2 px-2 py-1 rounded inline-block"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Experience
          </h2>
          {experience.map((job, i) => (
            <div key={i} className="mb-4 px-5">
              <h3 className="font-bold text-lg">{job.role}</h3>
              <p className="italic text-sm">
                {job.company} – {job.date}
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                {job.achievements.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section>
          <h2
            className="text-xl font-bold mb-2 px-2 py-1 rounded inline-block"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Projects
          </h2>
          {projects.map((project, i) => (
            <div key={i} className="mb-4 px-5">
              <h3 className="font-semibold">{project.title}</h3>
              <p className="text-sm italic mb-1">
                {project.tech.join(", ")}
              </p>
              <p className="text-sm">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-500 text-sm underline"
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Education */}
        <section>
          <h2
            className="text-xl font-bold mb-2 px-2 py-1 rounded inline-block"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Education
          </h2>
          <div className="px-5 text-sm">
            <p className="font-semibold">{education.date}</p>
            <p className="font-bold">
              {education.degree}, {education.institution}
            </p>
            <ul className="list-disc list-inside mt-2">
              {education.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2
            className="text-xl font-bold mb-2 px-2 py-1 rounded inline-block"
            style={{ backgroundColor: "var(--color-subheading)" }}
          >
            Certifications
          </h2>
          <ul className="text-sm px-5">
            {certifications.map((cert, i) => (
              <li key={i}>
                <strong>{cert.date}</strong> – {cert.title},{" "}
                {cert.organization}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Template2;
