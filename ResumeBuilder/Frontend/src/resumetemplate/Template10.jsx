import React from "react";
import resumeDataDefault from "./resumeDataDefault";

const Template10 = ({ theme = "left-accent", resumeData = { ...resumeDataDefault } }) => {
  const { Name, Role, Contact, Achievements, Education, Experience, Projects, Skills, Summary, Strengths } = resumeData;
  return (
    <div className={`print-friendly theme-${theme} min-h-screen bg-gray-50 p-0`}> 
      <div className="max-w-4xl mx-auto py-10 px-4 flex flex-col md:flex-row gap-8">
        {/* Left Accent Bar */}
        <div className="w-2 bg-green-600 rounded-full md:block hidden"></div>
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b-2 border-green-600 pb-6 mb-8">
            <div>
              <h1 className="text-4xl font-bold text-green-700 uppercase tracking-widest">{Name ?? resumeDataDefault.Name}</h1>
              <p className="text-lg text-green-500 font-semibold mt-2">{Role ?? resumeDataDefault.Role}</p>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 md:mt-0">
              {Object.entries(Contact ?? resumeDataDefault.Contact).map(([key, value], idx) => (
                <span key={idx} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded shadow-sm">{key}: {value}</span>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-green-700 mb-2">Summary</h2>
            <p className="text-gray-700">{Summary ?? resumeDataDefault.Summary}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h2 className="text-lg font-bold text-green-700 mb-2">Experience</h2>
              {Object.entries(Experience ?? resumeDataDefault.Experience).map(([key, value], idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-bold text-green-700">{key}</h3>
                  <p className="text-xs italic">{value.role}</p>
                  <ul className="list-disc ml-5 text-gray-800">
                    {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-700 mb-2">Education</h2>
              {Object.entries(Education ?? resumeDataDefault.Education).map(([key, value], idx) => (
                <div key={idx} className="mb-3">
                  <h3 className="font-semibold">{key}</h3>
                  <p className="text-xs">{value.Origin} | {value.StartDate} - {value.EndDate} | {value.Loaction}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold text-green-700 mb-2">Projects</h2>
            {Object.entries(Projects ?? resumeDataDefault.Projects).map(([key, value], idx) => (
              <div key={idx} className="mb-4">
                <h3 className="font-semibold text-green-700">{key}</h3>
                <p className="text-xs">{value.StartDate} - {value.EndDate}</p>
                <p className="text-sm">{value.Tagline}</p>
                <ul className="list-disc ml-5 text-gray-800">
                  {value.Bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-lg font-bold text-green-700 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {(Skills ?? resumeDataDefault.Skills).map((skill, idx) => <span key={idx} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">{skill}</span>)}
              </div>
            </div>
            <div>
              <h2 className="text-lg font-bold text-green-700 mb-2">Strengths</h2>
              <ul className="space-y-1">
                {Object.entries(Strengths ?? resumeDataDefault.Strengths).map(([title, desc], idx) => (
                  <li key={idx} className="text-xs"><strong>{title}:</strong> {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template10;
