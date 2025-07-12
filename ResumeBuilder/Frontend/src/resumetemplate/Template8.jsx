import React from "react";
import resumeDataDefault from "./resumeDataDefault";

const Template8 = ({ theme = "timeline", resumeData = { ...resumeDataDefault } }) => {
  const { Name, Role, Contact, Achievements, Education, Experience, Projects, Skills, Summary, Strengths } = resumeData;
  return (
    <div className={`print-friendly theme-${theme} min-h-screen bg-white p-0`}> 
      <div className="max-w-4xl mx-auto py-10 px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-4 border-gray-800 pb-6 mb-8">
          <div>
            <h1 className="text-5xl font-black text-gray-800 uppercase tracking-tight">{Name ?? resumeDataDefault.Name}</h1>
            <p className="text-xl text-gray-500 font-semibold mt-2">{Role ?? resumeDataDefault.Role}</p>
          </div>
          <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
            {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], idx) => (
              <span key={idx} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded shadow-sm">{key}: {value}</span>
            ))}
          </div>
        </div>
        {/* Timeline */}
        <div className="relative pl-8 border-l-4 border-gray-300 mb-8">
          <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-800 rounded-full"></div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Summary</h2>
            <p className="text-gray-700">{Summary ?? resumeDataDefault.Summary}</p>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Experience</h2>
            {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-gray-400 relative">
                <div className="absolute -left-3 top-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                <h3 className="font-bold text-gray-700">{key}</h3>
                <p className="text-xs italic">{value.role}</p>
                <ul className="list-disc ml-5 text-gray-800">
                  {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Education</h2>
            {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], idx) => (
              <div key={idx} className="mb-3 pl-4 border-l-2 border-gray-400 relative">
                <div className="absolute -left-3 top-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                <h3 className="font-semibold">{key}</h3>
                <p className="text-xs">{value.Origin} | {value.StartDate} - {value.EndDate} | {value.Loaction}</p>
              </div>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-1">Projects</h2>
            {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], idx) => (
              <div key={idx} className="mb-4 pl-4 border-l-2 border-gray-400 relative">
                <div className="absolute -left-3 top-2 w-3 h-3 bg-gray-800 rounded-full"></div>
                <h3 className="font-semibold text-gray-700">{key}</h3>
                <p className="text-xs">{value.StartDate} - {value.EndDate}</p>
                <p className="text-sm">{value.Tagline}</p>
                <ul className="list-disc ml-5 text-gray-800">
                  {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Skills & Strengths */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {(Skills ?? resumeDataDefault.Skills).map((skill, idx) => <span key={idx} className="bg-gray-300 text-gray-800 px-2 py-1 rounded text-xs font-bold">{skill}</span>)}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow p-6">
            <h2 className="text-lg font-bold text-gray-800 mb-2">Strengths</h2>
            <ul className="space-y-1">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, desc], idx) => (
                <li key={idx} className="text-xs"><strong>{title}:</strong> {desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template8;
