import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { ClockLoader } from 'react-spinners';

const Sign = () => {
    const [loading,setloading] = useState(false)
  const handleGoogleLogin = () => {
   const win = window.open(`${import.meta.env.VITE_SERVER_URL}/api/auth/google`, "_blank", "width=500,height=600");
    setloading(true)
 window.addEventListener("message", (event) => {
  if (event.origin !== `${import.meta.env.VITE_SERVER_URL}`) return; // ✅ match your backend origin
  if (event.data?.login) {
    console.log("Login successful!", event.data);
  }
});

    setTimeout(() => {
        win.close()
        setloading(false)
    }, 3000*10);
  };

  return (
    <div className="min-h-screen flex items-center   justify-center  px-4">
      <div className="bg-white rounded-2xl perspective-distant shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] p-6 md:p-10 max-w-md w-full text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to CrodousCV</h1>
        <p className="text-gray-500">Sign in with your Google account to continue</p>

        {!loading&& <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="flex items-center md:hover:rotate-y-45   whitespace-nowrap cursor-pointer justify-center gap-3 bg-gray-100 hover:bg-gray-200 transition text-black font-semibold py-3 px-6 rounded-lg shadow-md"
        >
         <><FcGoogle className="text-2xl" />
          Continue with Google</>
        </button>}
        {
            loading&&<ClockLoader />
        }

        <p className="text-sm text-gray-400">We respect your privacy. No spam ever!</p>
      </div>
    </div>
  );
};

export default Sign;
