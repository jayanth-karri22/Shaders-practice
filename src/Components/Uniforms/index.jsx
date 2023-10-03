import React, { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import FragmentShader from "./FragmentShader.glsl?raw";

const BasicMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: FragmentShader,
  uniforms: {
    u_time: { value: 0.0 },
    u_resolution: { value: { x: 0.0, y: 0.0 } },
    u_mouse: { value: { x: 0.0, y: 0.0 } },
  },
});

function Uniforms() {
  const materialRef = useRef();

  function MeshComponent() {
    useFrame(({ clock }) => {
      if (materialRef.current)
        materialRef.current.uniforms.u_time.value = clock.getElapsedTime();
    });

    return (
      <mesh>
        <boxGeometry args={[10, 10, 0]} />
        <primitive attach="material" object={BasicMaterial} ref={materialRef} />
      </mesh>
    );
  }

  return (
    <div>
      <Canvas>
        <MeshComponent />
      </Canvas>
    </div>
  );
}

export default Uniforms;
