import React, { useState, useEffect, useRef } from "react";

import xbot from '../Models/xbot/xbot.glb';
import ybot from '../Models/ybot/ybot.glb';
import xbotPic from '../Models/xbot/xbot.png';
import ybotPic from '../Models/ybot/ybot.png';

import * as words from '../Animations/words';
import * as alphabets from '../Animations/alphabets';
import { defaultPose } from '../Animations/defaultPose';

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Slider from 'react-input-slider';
import Navbar from "../Components/Navbar";


const ConvertSign = () => {
  const [text, setText] = useState("");
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);

  const componentRef = useRef({});
  const { current: ref } = componentRef;

  // ← useRef so the same ref persists
  const textFromAudio = useRef(null);
  const textFromInput = useRef(null);

  const sliderStyles = {
    track: {
      backgroundColor: "#ddd",
      height: 5,
    },
    active: {
      backgroundColor: "#73a049",
    },
    thumb: {
      width: 20,
      height: 20,
    },
  };

  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  // browser‑support check
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    console.warn("Browser does not support speech recognition");
  }

  // Three.js setup with responsive resizing
  useEffect(() => {
    // reset state
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    // scene
    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);
    const spotLight = new THREE.SpotLight(0xffffff, 90);
    spotLight.position.set(0, 0, 8);
    ref.scene.add(spotLight);

    // renderer & camera
    ref.renderer = new THREE.WebGLRenderer({ antialias: true });
    ref.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
    ref.camera.position.set(0, 1.4, 1.6);

    // attach canvas
    const container = document.getElementById("canvas");
    container.innerHTML = "";
    container.appendChild(ref.renderer.domElement);

    // handle resizing
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      ref.renderer.setSize(width, height);
      ref.camera.aspect = width / height;
      ref.camera.updateProjectionMatrix();
    };
    // initial and listener
    handleResize();
    window.addEventListener("resize", handleResize);

    // load model
    const loader = new GLTFLoader();
    loader.load(bot, (gltf) => {
      gltf.scene.traverse(child => { if (child.isSkinnedMesh) child.frustumCulled = false; });
      ref.avatar = gltf.scene;
      ref.scene.add(ref.avatar);
      defaultPose(ref);
      ref.animate();
    });

    // cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [bot]);

  // animation loop
  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);

    if (ref.animations[0].length) {
      if (!ref.flag) {
        if (ref.animations[0][0] === 'add-text') {
          setText(text + ref.animations[0][1]);
          ref.animations.shift();
        } else {
          for (let i = 0; i < ref.animations[0].length;) {
            const [boneName, action, axis, limit, sign] = ref.animations[0][i];
            const bone = ref.avatar.getObjectByName(boneName)[action];
            if (sign === "+" && bone[axis] < limit) {
              bone[axis] = Math.min(bone[axis] + speed, limit);
              i++;
            } else if (sign === "-" && bone[axis] > limit) {
              bone[axis] = Math.max(bone[axis] - speed, limit);
              i++;
            } else {
              ref.animations[0].splice(i, 1);
            }
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => { ref.flag = false; }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  // unified sign function
  const sign = (inputRef) => {
    const str = inputRef.current.value.toUpperCase();
    const wordsArr = str.split(' ');
    setText('');
    for (let w of wordsArr) {
      if (words[w]) {
        ref.animations.push(['add-text', w + ' ']);
        words[w](ref);
      } else {
        for (const [i, ch] of w.split('').entries()) {
          ref.animations.push(['add-text', ch + (i === w.length - 1 ? ' ' : '')]);
          alphabets[ch](ref);
        }
      }
    }
  };

  return (
    <div className="h-screen p-3">
      <div className="lg:flex-row  flex flex-col items-center justify-around ">
        {/* Center Column */}
        <div className="order-2  md:w-1/2 rounded-2xl  lg:order-1">
          <div
            id="canvas"
            className="w-full max-w-[500px] h-64 sm:h-80 lg:h-[450px] outline-4 outline-[#4a5565] dark:outline-[#666666] rounded-lg "
          >
            
          </div>
        </div>

        {/* Right Column */}
        <div className="order-1 bg-[#f3f4f6] mb-5 dark:bg-[#333333] dark:border-[#444444] border-[#dadada] border-1 lg:m-0  max-w-300px max-h-[300px] lg:order-2 p-4 rounded-lg">
          <p className="text-lg font-semibold mb-2 dark:text-[#cccccc]">Select Avatar</p>
          <div className="flex gap-x-2">
            <img
              src={xbotPic}
              className="w-20 h-20 cursor-pointer rounded-lg border border-gray-300 hover:scale-110"
              onClick={() => setBot(xbot)}
              alt="XBOT"
            />
            <img
              src={ybotPic}
              className="w-20 h-20 cursor-pointer rounded-lg border border-gray-300 hover:scale-110"
              onClick={() => setBot(ybot)}
              alt="YBOT"
            />
          </div>

          <p className="text-lg font-semibold mt-4 dark:text-[#cccccc]">
            Animation Speed: {Math.round(speed * 100) / 100}
          </p>
          <Slider
            axis="x"
            xmin={0.05}
            xmax={0.5}
            xstep={0.01}
            x={speed}
            onChange={({ x }) => setSpeed(x)}
            styles={sliderStyles}
            className="w-full"
          />

          <p className="text-lg font-semibold mt-4 dark:text-[#cccccc]">
            Pause Time: {pause} ms
          </p>
          <Slider
            axis="x"
            xmin={0}
            xmax={2000}
            xstep={100}
            x={pause}
            onChange={({ x }) => setPause(x)}
            styles={sliderStyles}
            className="w-full"
          />
        </div>
      </div>

        {/* Left Column */}
      <div className="w-full mt-8  flex flex-col lg:flex-row gap-y-4 lg:space-x-6 p-4">

        {/* Left Column: Contains Speech Recognition and Text Input */}
        <div className="flex flex-col  space-y-4 lg:w-1/2"> {/* Added lg:w-1/2 */}

          {/* Speech Recognition Section */}
          <div className="bg-[#f3f4f6]  dark:bg-[#3c3c3c] dark:border-[#444444] p-4 rounded shadow border-1 border-[#dadada]"> {/* Added background/padding for visual separation */}
            <label className="block font-semibold mb-4 text-xl dark:text-[#cccccc]">
              Speech Recognition:
              <span className="text-blue-500 dark:text-[#60a5fa] "> {listening ? "on" : "off"}</span>
            </label>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:space-x-6 "> {/* Adjusted button layout for smaller screens too */}
              <button
                className="bg-[#b8f278] text-[#1e1e1e] dark:hover:bg-[#aedd6a] hover:bg-[#a4db77] transition-all text-lg font-medium rounded  py-2 px-4 cursor-pointer  flex-1" // Use flex-1 for better button sizing
                onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-US' })}
              >
                Mic On
              </button>
              <button
                className="bg-[#b8f278] hover:bg-[#a4db77] dark:hover:bg-[#aedd6a] transition-all text-lg font-medium rounded py-2 px-4 cursor-pointer flex-1" // Use flex-1
                onClick={() => SpeechRecognition.stopListening()}
              >
                Mic Off
              </button>
              <button
                className="bg-[#4a5565] font-semibold dark:text-[#cccccc] dark:hover:bg-[#5a6575] text-white rounded text-lg py-2 px-4 cursor-pointer  flex-1" // Use flex-1
                onClick={() => resetTranscript()}
              >
                Clear
              </button>
            </div>
            <div className="flex flex-col items-center mt-4">
              <textarea
                ref={textFromAudio}
                readOnly
                rows={4} // Adjusted rows slightly
                value={transcript}
                placeholder="Speech input..."
                className="w-full bg-white text-[#4a5565]  dark:border-[#666666] dark:bg-[#444444] dark:text-[#cccccc] font-semibold p-2 border mt-2 rounded"
              />
              <button
                onClick={() => sign(textFromAudio)}
                className="w-max mt-4 bg-[#b8f278] hover:bg-[#a4db77] dark:hover:bg-[#aedd6a] transition-all text-lg font-medium py-3 px-4 rounded cursor-pointer" // Added padding
              >
                Start Animations
              </button>
            </div>
          </div>

          {/* Text Input Section */}
          <div className=" p-4 rounded shadow bg-[#f3f4f6]  dark:bg-[#3c3c3c] dark:border-[#444444] text-[#cccccc]  border-1 border-[#dadada]"> {/* Added background/padding for visual separation */}
            <label className="block font-semibold text-xl mb-2 text-black dark:text-[#cccccc]">Text Input</label> {/* Added mb-2 */}
            <div className="flex flex-col items-center">
              <textarea
                ref={textFromInput}
                rows={4} // Adjusted rows slightly
                placeholder="Text input..."
                className="w-full bg-white text-[#4a5565] dark:bg-[#444444]  dark:border-[#666666] dark:text-[#cccccc] font-semibold p-2 border mt-2 rounded"
              />
              <button
                onClick={() => sign(textFromInput)}
                className="w-max mt-4 text-lg bg-[#b8f278] hover:bg-[#a4db77] dark:hover:bg-[#aedd6a] text-black transition-all  font-semibold py-2 px-4 rounded cursor-pointer" // Added padding
              >
                Start Animations
              </button>
            </div>
          </div>

        </div>

        {/* Right Column: Contains Processed Text */}
          <div className="lg:w-1/2 p-4 rounded  dark:bg-[#3c3c3c] dark:border-[#444444]  text-[#cccccc] shadow bg-[#f3f4f6] border-1 border-[#dadada]"> {/* Added lg:w-1/2 and matching styling */}
            <div className="w-full h-full flex flex-col"> {/* Make it flex column to push textarea down */}
              <label className="font-semibold text-xl mb-2 text-black dark:text-[#cccccc]">Processed Text</label> {/* Added mb-2 */}
              <textarea
                readOnly
                // rows={3} // Let flex grow handle height or set specific height
                value={text}
                placeholder="Processed output..." // Added placeholder
              className=" bg-white dark:bg-[#444444] dark:text-[#cccccc] text-[#4a5565] dark:border-[#666666] font-semibold w-full p-2 border rounded flex-grow" // Use flex-grow
            />
          </div>
        </div>
      </div>
        
    </div>
    
  );
};

export default ConvertSign;
