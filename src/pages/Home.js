import React from 'react';

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <div className="flex h-[600px] w-full">
        {/* Left Side */}
        <div className="flex-1 p-8 px-15 items-center text-left bg-[#f9eee0] flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Solace!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your AI chatbot for grief support.
          </p>
        </div>

        <div className="h-full border-l-2 border-[#2b2927]"></div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Small robot"
            className="w-full h-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex h-[150px] w-full bg-[#2b2927] p-20 items-center justify-center">
        {/* Narrow Rectangle */}
        <h1 className="text-lg font-bold text-white">Revolutionizing mental health support with a deeper emotional connection and comforting experience.</h1>
      </div>

      <h1 className="text-2xl text-center mt-10 font-bold text-gray-800">The offerings</h1>

      <div className="flex h-[600px] px-20 w-full justify-center">

        {/* Left Side */}
        <div className="flex-1 px-10 items-center text-left bg-[#f9eee0] flex flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Small robot"
            className="w-64 h-64 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Solace!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your AI chatbot for grief support.
          </p>
        </div>

        {/* Center */}
        <div className="flex-1 px-10 items-center text-left bg-[#f9eee0] flex flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Small robot"
            className="w-64 h-64 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Solace!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your AI chatbot for grief support.
          </p>
        </div>

        {/* Left Side */}
        <div className="flex-1 px-10 items-center text-left bg-[#f9eee0] flex flex-col justify-center">
          <img
            src="https://images.unsplash.com/photo-1659018966834-99be9746b49e?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Small robot"
            className="w-64 h-64 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-800">Welcome to Solace!</h1>
          <p className="text-lg text-gray-600 mt-4">
            Your AI chatbot for grief support.
          </p>
        </div>

      
      </div>
    </div>
  );
};

export default Home;
