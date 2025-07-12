import React from 'react'
import Herogif from '../ui/Herogif'

const Heroic = () => {
  return (
    <div className="relative w-screen min-h-screen bg-white flex flex-col justify-center items-center overflow-hidden">
      {/* Floating AI Animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 flex items-center justify-center">
        <Herogif />
      </div>
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center w-full justify-between mb-12">
          <div className="flex flex-col items-start md:items-start gap-4 w-full md:w-2/3">
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-tight mb-2 whitespace-pre-line">
              Crodouscv
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-blue-600 mb-4">
              AI Powered Resume Builder
            </p>
            <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-xl">
              Instantly create a professional, modern resume with the power of AI. Export your resume as a beautiful PDF in seconds.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white text-xl font-bold py-4 px-10 rounded-2xl shadow-lg">
              Get Started
            </button>
          </div>
          <div className="hidden md:flex flex-col items-center w-1/3">
            <div className="w-40 h-40 rounded-full bg-blue-100 flex items-center justify-center shadow-xl border-4 border-blue-200">
              <span className="text-6xl">🤖</span>
            </div>
          </div>
        </div>
        {/* Feature Pills */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <span className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-lg shadow">No Signup Required</span>
          <span className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-lg shadow">100% Free</span>
          <span className="px-6 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-lg shadow">Private & Secure</span>
        </div>
      </div>
    </div>
  )
}

export default Heroic
