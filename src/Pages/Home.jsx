import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Components/Experience";

const Home = () => {
  return (
    <div className="min-h-screen mt-7 p-3">
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center h-full lg:mt-10">

        {/* Left Hero Content */}
        <div className="w-full lg:w-1/2 flex order-2 lg:order-1 flex-col items-center justify-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-green-600">
            Welcome to SignSpell
          </h1>
          <p className="text-xl font-semibold mb-6">
            Explore our interactive 3D avatar experience on the right.
          </p>
          <p className="text-lg mb-6">
           Sign Spell is an AI-powered system that translates spoken language into Indian Sign Language (ISL) in real time using animated 3D avatars. It’s designed to bridge the communication gap for the hearing and speech impaired, especially in public and government events where accessibility matters most.
          </p>
          <a href="http://localhost:3000"><button className="px-6 py-3 cursor-pointer bg-green-500 text-white rounded-md w-max">
            Get Started
          </button></a>
        </div>

        {/* Right 3D Canvas */}
        <div className="w-full lg:w-1/2 flex order-1 lg:order-2 justify-center px-4">
          {/* 
            - w-full: full width on small screens 
            - sm:w-3/4 md:w-2/3 lg:w-full: gradually wider on larger breakpoints 
            - aspect-[4/3]: 4:3 aspect ratio (requires Tailwind v3+)
          */}
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-full aspect-[4/3] rounded-2xl shadow-xl overflow-hidden">
            <Canvas
              shadows
              camera={{ position: [0, 2, 5], fov: 30 }}
              className="w-full h-full block"
            >
              <color attach="background" args={["#ececec"]} />
              <Experience />
            </Canvas>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
