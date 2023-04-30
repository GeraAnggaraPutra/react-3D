import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./React";

export const Development = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <ReactLogo/>
          </Stage>
          <OrbitControls enableZoom={true} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};

