import React from "react";
import resumeDataDefault from "./resumeDataDefault";

const Template7 = ({ theme = "accented", resumeData = { ...resumeDataDefault } }) => {
  const { Name, Role, Contact, Achievements, Education, Experience, Projects, Skills, Summary, Strengths } = resumeData;
  return (
    <div className={`print-friendly theme-${theme} min-h-screen flex bg-white`}> 
      {/* Sidebar */}
      <aside className="w-1/3 bg-gradient-to-b from-blue-700 to-blue-400 text-white p-8 flex flex-col items-center print:bg-gray-200">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold uppercase tracking-widest">{Name ?? resumeDataDefault.Name}</h1>
          <p className="text-lg font-semibold mt-2">{Role ?? resumeDataDefault.Role}</p>
        </div>
        <div className="mb-8 w-full">
          <h2 className="text-xl font-bold border-b border-white mb-2 pb-1">Contact</h2>
          <ul className="space-y-1">
            {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], idx) => (
              <li key={idx} className="text-sm break-all">{key}: {value}</li>
            ))}
          </ul>
        </div>
        <div className="mb-8 w-full">
          <h2 className="text-xl font-bold border-b border-white mb-2 pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {(Skills ?? resumeDataDefault.Skills).map((skill, idx) => <span key={idx} className="bg-white text-blue-700 px-2 py-1 rounded text-xs font-bold">{skill}</span>)}
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-xl font-bold border-b border-white mb-2 pb-1">Strengths</h2>
          <ul className="space-y-1">
            {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, desc], idx) => (
              <li key={idx} className="text-xs"><strong>{title}:</strong> {desc}</li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-10">
        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-700 mb-2">Summary</h2>
          <p className="text-gray-700">{Summary ?? resumeDataDefault.Summary}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-700 mb-2">Experience</h2>
          {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-bold text-blue-700">{key}</h3>
              <p className="text-sm italic">{value.role}</p>
              <ul className="list-disc ml-5 text-gray-800">
                {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-bold border-b-2 border-blue-700 mb-2">Education</h2>
          {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], idx) => (
            <div key={idx} className="mb-3">
              <h3 className="font-semibold">{key}</h3>
              <p className="text-xs">{value.Origin} | {value.StartDate} - {value.EndDate} | {value.Loaction}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold border-b-2 border-blue-700 mb-2">Projects</h2>
          {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold text-blue-700">{key}</h3>
              <p className="text-xs">{value.StartDate} - {value.EndDate}</p>
              <p className="text-sm">{value.Tagline}</p>
              <ul className="list-disc ml-5 text-gray-800">
                {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Template7;
