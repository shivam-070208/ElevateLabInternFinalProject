import React from 'react'
import Button from '../ui/Button'

const Heoicoverlay = () => {
return (
    <div className="w-full relative h-full flex flex-col items-center justify-center text-center py-20 z-0 px-4 ">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight drop-shadow-lg">
            Build Your <span className="text-blue-600">CV</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mx-auto leading-tight max-w-2xl mb-10">
            Create your AI-powered, ATS-friendly resume or CV in minutes. Just fill in your details and let us do the rest!
        </p>
       
      <Button>Get Resume!</Button>
    </div>
)
}
export default Heoicoverlay