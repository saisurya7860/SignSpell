import { Environment, OrbitControls } from "@react-three/drei";
import { Avatar1 } from "./Avatar1";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="sunset" />
      <group position-y={-1}>
      <Avatar1 />
      </group>
      <mesh scale={3} rotation-x={-Math.PI*0.5} position-y={-1}> 
        <planeGeometry/>
        <meshStandardMaterial color="white" />
        </mesh>
      
    </>
  );
};
