import React, { useState, useEffect, useRef } from "react";
import Slider from "react-input-slider";

import xbot from "../Models/xbot/xbot.glb";
import ybot from "../Models/ybot/ybot.glb";
import xbotPic from "../Models/xbot/xbot.png";
import ybotPic from "../Models/ybot/ybot.png";

import * as words from "../Animations/words";
import * as alphabets from "../Animations/alphabets";
import { defaultPose } from "../Animations/defaultPose";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Navbar from "../Components/Navbar";

function LearnSign() {
  const [bot, setBot] = useState(ybot);
  const [speed, setSpeed] = useState(0.1);
  const [pause, setPause] = useState(800);

  const componentRef = useRef({});
  const canvasRef = useRef(null);
  const { current: ref } = componentRef;

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

  useEffect(() => {
    ref.flag = false;
    ref.pending = false;
    ref.animations = [];
    ref.characters = [];

    ref.scene = new THREE.Scene();
    ref.scene.background = new THREE.Color(0xdddddd);

    const spotLight = new THREE.SpotLight(0xffffff,90 );//(0xffffff,70 )
    spotLight.position.set(0, 0, 8);
    ref.scene.add(spotLight);

    // let cameraWidth;
    //   if (window.innerWidth < 640) {
    //     cameraWidth = window.innerWidth * 0.9; // Mobile: 90% of screen width
    //   } else if (window.innerWidth < 1024) {
    //     cameraWidth = window.innerWidth * 0.5; // Tablet: 50% of screen width
    //   } else {
    //     cameraWidth = window.innerWidth * 0.3; // Desktop: 30% of screen width
    //   }

    //   let cameraHeight = window.innerHeight * 0.6; // 60% of screen height

    //   ref.camera = new THREE.PerspectiveCamera(
    //     30,
    //     cameraWidth / cameraHeight,
    //     0.1,
    //     1000
    //   );

    // ref.renderer = new THREE.WebGLRenderer({ antialias: true });//ref.renderer.setSize(window.innerWidth * 0.30, window.innerHeight - 370);

    // ref.renderer.setSize(window.innerWidth * 0.30, window.innerHeight - 370); 
    // let canvasWidth;
    // if (window.innerWidth < 640) { 
    //   canvasWidth = window.innerWidth * 0.9;  // Mobile: Use 90% of screen width
    // } else if (window.innerWidth < 1024) { 
    //   canvasWidth = window.innerWidth * 0.415;  // Tablet: Use 50% of screen width
    // } else { 
    //   canvasWidth = window.innerWidth * 0.3;  // Desktop: Use 30% of screen width
    // }

    // let canvasHeight = window.innerHeight * 0.434; // 60% of screen height dynamically

    // ref.renderer.setSize(canvasWidth, canvasHeight);
    // Create camera and renderer as before
      ref.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 1000);
      ref.renderer = new THREE.WebGLRenderer({ antialias: true });

      // Function to update both camera and renderer sizes responsively
      function updateSizes() {
        let cameraWidth, canvasWidth;
        if (window.innerWidth < 640) {
          cameraWidth = window.innerWidth * 0.92;  // Mobile: 90% of screen width
          canvasWidth = window.innerWidth * 0.734;
        } else if(window.innerWidth < 768){
          cameraWidth = window.innerWidth * 0.63;  // Mobile: 40% of screen width
          canvasWidth = window.innerWidth * 0.6;
        } else if (window.innerWidth < 1024) {
          cameraWidth = window.innerWidth * 0.63;  // Tablet: 50% of screen width
          canvasWidth = window.innerWidth * 0.634;
        } else {
          cameraWidth = window.innerWidth * 0.33;  // Desktop: 30% of screen width
          canvasWidth = window.innerWidth * 0.34;
        }

        let cameraHeight = window.innerHeight * 0.53; // 60% of screen height for camera
        let canvasHeight = window.innerHeight * 0.434; // ~43% of screen height for canvas

        // Update camera aspect ratio and projection matrix
        ref.camera.aspect = cameraWidth / cameraHeight;
        ref.camera.updateProjectionMatrix();

        // Update renderer size (canvas)
        ref.renderer.setSize(canvasWidth, canvasHeight);
      }

      // Initial call to update sizes
      updateSizes();

      // Optional: Add an event listener to update sizes on window resize
      window.addEventListener("resize", updateSizes);



    if (canvasRef.current) {
      canvasRef.current.innerHTML = "";
      canvasRef.current.appendChild(ref.renderer.domElement);
    }

    ref.camera.position.z = 1.6;
    ref.camera.position.y = 1.4;

    let loader = new GLTFLoader();
    loader.load(
      bot,
      (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.type === "SkinnedMesh") {
            child.frustumCulled = false;
          }
        });
        ref.avatar = gltf.scene;
        ref.scene.add(ref.avatar);
        defaultPose(ref);
      },
      (xhr) => {
        console.log(xhr);
      }
    );
  }, [bot]);

  ref.animate = () => {
    if (ref.animations.length === 0) {
      ref.pending = false;
      return;
    }
    requestAnimationFrame(ref.animate);
    if (ref.animations[0].length) {
      if (!ref.flag) {
        for (let i = 0; i < ref.animations[0].length; ) {
          let [boneName, action, axis, limit, sign] = ref.animations[0][i];
          let bone = ref.avatar.getObjectByName(boneName);
          if (!bone) continue;

          if (sign === "+" && bone[action][axis] < limit) {
            bone[action][axis] += speed;
            bone[action][axis] = Math.min(bone[action][axis], limit);
            i++;
          } else if (sign === "-" && bone[action][axis] > limit) {
            bone[action][axis] -= speed;
            bone[action][axis] = Math.max(bone[action][axis], limit);
            i++;
          } else {
            ref.animations[0].splice(i, 1);
          }
        }
      }
    } else {
      ref.flag = true;
      setTimeout(() => {
        ref.flag = false;
      }, pause);
      ref.animations.shift();
    }
    ref.renderer.render(ref.scene, ref.camera);
  };

  return (
  <>
    <div className="flex flex-col space-y-10 p-3">
      {/* Sidebar (left) */}      
        <div className="flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-around ">
          <div className="order-2 flex lg:order-1 rounded-lg outline-4 outline-[#4a5565] justify-center items-center">
            <div id="canvas" ref={canvasRef} className="w-full h-full" />
          </div>

          {/* Controls (middle) */}

          <div className="order-1 lg:order-2 p-4 bg-[#f3f4f6] rounded-lg">
            <p className="text-lg font-semibold mb-2">Select Avatar</p>
            <div className="flex space-x-2">
              <img
                src={xbotPic}
                className="w-20 h-20 cursor-pointer rounded-lg  hover:scale-110"
                onClick={() => setBot(xbot)}
                alt="XBOT"
              />
              <img
                src={ybotPic}
                className="w-20 h-20 cursor-pointer rounded-lg  hover:scale-110"
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

      <div className="flex items-center">
        <div className="w-full p-2 bg-[#f3f4f6] border-1 border-[#dadada] shadow rounded-lg">
          <h1 className="text-xl text-[#364153] font-bold mb-4">Alphabets</h1>
          <div className="grid-cols-8 grid sm:grid-cols-10 md:grid-cols-8 lg:grid-cols-9 gap-2">
            {Array.from({ length: 26 }, (_, i) => (
              <button
                key={i}
                className="p-2 bg-[#bdf094] font-bold text-lg rounded cursor-pointer"
                onClick={() => {
                  if (ref.animations.length === 0) {
                    alphabets[String.fromCharCode(i + 65)](ref);
                  }
                }}
              >
                {String.fromCharCode(i + 65)}
              </button>
            ))}
          </div>

          <h1 className="text-xl font-bold text-[#364153] mb-2">Words</h1>
          <div className="grid-cols-4 grid sm:grid-cols-4 gap-1 sm:gap-2">
            {words.wordList.map((word, i) => (
              <button
                key={i}
                className="p-2  bg-[#bdf094] font-semibold sm:text-lg cursor-pointer rounded"
                onClick={() => {
                  if (ref.animations.length === 0) {
                    words[word](ref);
                  }
                }}
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* Canvas (right) */}
      
    </div>
  </>
  );
}

export default LearnSign;
