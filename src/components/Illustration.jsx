import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import Fluxs from "./Fluxs";

export const Illustration = () => {
    return (
      <>
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Fluxs/>
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      </>
    );
};
