import React from "react";
import resumeDataDefault from "./resumeDataDefault";

const Template9 = ({ theme = "minimalist", resumeData = { ...resumeDataDefault } }) => {
  const { Name, Role, Contact, Achievements, Education, Experience, Projects, Skills, Summary, Strengths } = resumeData;
  return (
    <div className={`print-friendly theme-${theme} min-h-screen bg-white p-0`}> 
      <div className="max-w-3xl mx-auto py-10 px-4">
        {/* Header */}
        <div className="flex flex-col items-center border-b border-gray-300 pb-6 mb-8">
          <h1 className="text-5xl font-light text-black uppercase tracking-widest mb-2">{Name ?? resumeDataDefault.Name}</h1>
          <p className="text-lg text-gray-600 font-medium mb-2">{Role ?? resumeDataDefault.Role}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], idx) => (
              <span key={idx} className="text-xs text-gray-500 border-b border-dotted border-gray-400 px-1">{key}: {value}</span>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-lg font-bold text-black mb-2">Summary</h2>
            <p className="text-gray-700 mb-4">{Summary ?? resumeDataDefault.Summary}</p>
            <h2 className="text-lg font-bold text-black mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2 mb-4">
              {(Skills ?? resumeDataDefault.Skills).map((skill, idx) => <span key={idx} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-xs font-bold">{skill}</span>)}
            </div>
            <h2 className="text-lg font-bold text-black mb-2">Strengths</h2>
            <ul className="space-y-1">
              {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, desc], idx) => (
                <li key={idx} className="text-xs"><strong>{title}:</strong> {desc}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-black mb-2">Experience</h2>
            {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-bold text-black">{key}</h3>
                <p className="text-xs italic">{value.role}</p>
                <ul className="list-disc ml-5 text-gray-800">
                  {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
            <h2 className="text-lg font-bold text-black mb-2 mt-4">Education</h2>
            {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], idx) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold">{key}</h3>
                <p className="text-xs">{value.Origin} | {value.StartDate} - {value.EndDate} | {value.Loaction}</p>
              </div>
            ))}
            <h2 className="text-lg font-bold text-black mb-2 mt-4">Projects</h2>
            {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-black">{key}</h3>
                <p className="text-xs">{value.StartDate} - {value.EndDate}</p>
                <p className="text-sm">{value.Tagline}</p>
                <ul className="list-disc ml-5 text-gray-800">
                  {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template9;
