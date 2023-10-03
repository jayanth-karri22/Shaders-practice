import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import FragmentShader from "./FragmentShader.glsl?raw";

const BasicMaterial = new THREE.ShaderMaterial({
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: FragmentShader,
});

function BasicShader() {
  return (
    <div>
      <Canvas>
        <mesh>
          <boxGeometry args={[10, 10, 0]} />
          <primitive attach="material" object={BasicMaterial} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default BasicShader;
