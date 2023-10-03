import React from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import FragmentShader from "./Shaders/FragmentShader.glsl?raw";
import VertexShader from "./Shaders/VertexShader.glsl?raw";

const BasicMaterial = new THREE.ShaderMaterial({
  vertexShader: VertexShader,
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
