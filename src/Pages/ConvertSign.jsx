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
  <>
    <Navbar/>
    <div className="min-h-screen pt-25 gap-6 md:pl-70 ">
        
        <div className="lg:flex-row mx-auto flex flex-col">
          {/* Center Column */}
          <div className="order-2 md:w-1/2 mx-auto lg:order-1">
            <div
              id="canvas"
              className="min-w-[300px]  mx-auto h-64 sm:h-80 lg:h-[450px] border rounded shadow  "
            />
          </div>

          {/* Right Column */}
          <div className="max-w-[230px] order-1 max-h-[300px] mx-auto  lg:order-2 p-4 rounded-lg">
            <p className="text-lg font-semibold mb-2">Select Avatar</p>
            <div className="flex space-x-2">
              <img
                src={xbotPic}
                className="w-20 h-20 cursor-pointer rounded-lg border border-gray-300 hover:border-blue-500"
                onClick={() => setBot(xbot)}
                alt="XBOT"
              />
              <img
                src={ybotPic}
                className="w-20 h-20 cursor-pointer rounded-lg border border-gray-300 hover:border-blue-500"
                onClick={() => setBot(ybot)}
                alt="YBOT"
              />
            </div>

            <p className="text-lg font-semibold mt-4">
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

            <p className="text-lg font-semibold mt-4">
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
        <div className=" mx-auto mt-8 flex flex-col lg:flex-row pl-6 gap-y-4 gap-x-16">

          <div className="w-full lg:w-1/2 space-y-4"> 
            <div className="pr-6">
              <label className="block font-semibold mb-4">
                Speech Recognition:
                <span className="text-blue-500 "> {listening ? "on" : "off"}</span>
              </label>
              <div className="flex gap-4 justify-center md:space-x-14 ">
                <button
                  className="bg-[#bdf094] font-semibold rounded w-[100px] h-[38px] lg:w-[300px] md:h-[50px] cursor-pointer"
                  onClick={() => SpeechRecognition.startListening({ continuous: true, language: 'en-US' })}
                >Mic On 🎙️</button>
                <button
                  className="bg-[#bdf094] font-semibold rounded w-[110px] h-[38px] lg:w-[300px] md:h-[50px] cursor-pointer"
                  onClick={() => SpeechRecognition.stopListening()}
                >Mic Off 🔇</button>
                <button
                  className="bg-[#4a5565] font-semibold text-white rounded  w-[100px] h-[38px] lg:w-[300px] md:h-[50px] cursor-pointer"
                  onClick={() => resetTranscript()}
                >Clear</button>
              </div>
              <div className="flex flex-col items-center mt-4">
                <textarea
                  ref={textFromAudio} readOnly rows={3}
                  value={transcript} placeholder="Speech input..."
                  className="w-full bg-white h-[150px] p-2 border mt-2 rounded"
                  // className="w-[250px] md:min-w-[340px] h-[150px] lg:min-w-[580px] p-2 border mt-2 rounded"
                />

                <button
                  onClick={() => sign(textFromAudio)} 
                  className="w-[200px] mt-2 bg-[#bdf094] font-semibold py-2 rounded cursor-pointer"
                >Start Animations</button>
              </div>   
            </div>

            <div className="pr-6" >
              <label className="block font-semibold">Text Input</label>
              <div className="flex flex-col items-center">
                <textarea
                  ref={textFromInput} rows={3}
                  placeholder="Text input..."
                  className="w-full h-[150px] bg-white p-2 border mt-2 rounded"
                  // className="w-[250px] h-[150px] md:min-w-[350px] lg:min-w-[580px] p-2 border mt-2 rounded"
                />
                <button
                  onClick={() => sign(textFromInput)}
                  className="w-[200px] mt-2 bg-[#bdf094] font-semibold py-2 rounded cursor-pointer"
                >Start Animations</button>
              </div>
            </div>
          </div>

          <div className="pr-6 md:mt-18 w-full">
            <div className="w-full">
              <label className="block font-semibold">Processed Text</label>
              <textarea readOnly rows={3} value={text} className="bg-white w-full h-[150px] mt-4 p-2 border rounded" />
              {/* <textarea readOnly rows={3} value={text} className="w-[250px] md:min-w-[350px] lg:min-w-[580px] h-[150px] mt-4 p-2 border rounded" /> */}
            </div>
          </div>
          
        </div>
        
    </div>
  </>
    
  );
};

export default ConvertSign;
