import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Robot from "./Robot";

export const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Robot />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
};
