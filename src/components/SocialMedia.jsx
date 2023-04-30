import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import ReactLogo from "./React";
import Sosmed from "./Sosmed";

export const SocialMedia = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Sosmed/>
          </Stage>
          <OrbitControls enableZoom={true} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};
