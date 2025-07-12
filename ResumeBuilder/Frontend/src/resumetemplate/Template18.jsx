import React from "react";
import resumeDataDefault from "./resumeDataDefault";

const Template18 = ({ theme = "formal", resumeData = { ...resumeDataDefault } }) => {
  const { Name, Role, Contact, Achievements, Education, Experience, Projects, Skills, Summary, Strengths } = resumeData;
  return (
    <div className={`print-friendly modern-template theme-${theme} bg-[var(--color-bg)] min-h-screen p-8`}> 
      <header className="border-b pb-4 mb-4 flex flex-col items-center">
        <h1 className="text-4xl font-bold uppercase">{Name ?? resumeDataDefault.Name}</h1>
        <p className="text-lg text-[var(--color-secondary)]">{Role ?? resumeDataDefault.Role}</p>
        <div className="flex gap-4 mt-2">
          {Object.entries(Contact ?? resumeDataDefault.Contact).map(([, value], idx) => (
            <span key={idx} className="text-sm">{value}</span>
          ))}
        </div>
      </header>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b mb-2">Summary</h2>
        <p>{Summary ?? resumeDataDefault.Summary}</p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b mb-2">Experience</h2>
        {(Object.entries(Experience ?? resumeDataDefault.Experience)).map(([key, value], idx) => (
          <div key={idx} className="mb-2">
            <h3 className="font-bold">{key}</h3>
            <p className="text-sm">{value.role}</p>
            <ul className="list-disc ml-5">
              {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b mb-2">Education</h2>
        {(Object.entries(Education ?? resumeDataDefault.Education)).map(([key, value], idx) => (
          <div key={idx} className="mb-2">
            <h3 className="font-bold">{key}</h3>
            <p className="text-sm">{value.Origin} | {value.StartDate} - {value.EndDate} | {value.Loaction}</p>
          </div>
        ))}
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b mb-2">Projects</h2>
        {(Object.entries(Projects ?? resumeDataDefault.Projects)).map(([key, value], idx) => (
          <div key={idx} className="mb-2">
            <h3 className="font-bold">{key}</h3>
            <p className="text-sm">{value.StartDate} - {value.EndDate}</p>
            <p>{value.Tagline}</p>
            <ul className="list-disc ml-5">
              {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {(Skills ?? resumeDataDefault.Skills).map((skill, idx) => <span key={idx} className="bg-gray-200 px-2 py-1 rounded">{skill}</span>)}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold border-b mb-2">Strengths</h2>
        {(Object.entries(Strengths ?? resumeDataDefault.Strengths)).map(([title, desc], idx) => (
          <div key={idx} className="mb-1">
            <strong>{title}:</strong> {desc}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Template18;
