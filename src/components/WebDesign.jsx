import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { OrbitControls, Stage } from '@react-three/drei'
import Mac from './Mac'

export const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
    </>
  );
}
