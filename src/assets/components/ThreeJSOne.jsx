import React, { useEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useControls } from "leva";
import {
  PresentationControls,
  Environment,
  OrbitControls,
  Center,
  Text3D,
  Text,
} from "@react-three/drei";
import Model from "./Model";

function CameraControls() {
  const { x, y, z } = useControls({
    x: { value: 0, min: -50, max: 50 },
    y: { value: -7, min: -50, max: 50 },
    z: { value: 8, min: 1, max: 100 },
  });

  return { x, y, z };
}

function CameraUpdater({ x, y, z }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(x, y, z);
    camera.updateProjectionMatrix();
  }, [camera, x, y, z]);

  return null;
}

function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <mesh
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

export default function ThreeJSOne() {
  const { x, y, z } = CameraControls();
  const textRef = useRef();

  return (
    <Canvas
      className="r3f"
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0,-7,8] }}
      dpr={[1, 2]}
    >
      <CameraUpdater x={x} y={y} z={z} />

      <OrbitControls enableZoom={true} />
      <Center position-y={10} rotation-x={Math.PI / 2}>
        <Text3D
          ref={textRef}
          bevelSegments={4}
          height={0.2}
          bevelEnabled={true}
          bevelThickness={0.03}
          bevelSize={0.02}
          font="./Unsteady Oversteer_Regular.json"
          position-y={0}
          scale-x={0.5}
        >
          MESSX
          <meshStandardMaterial />
        </Text3D>
      </Center>

      <color args={["#737373"]} attach="background" />

      <Model position={[1, 2, 2]} />

      <ambientLight intensity={1} />

      <Text
        Center
        fontSize={0.03}
        position={[-0.007, 0.01, 1.949]}
        children="Hello World"
      />

      <Environment preset="city" />
      <Box position={[0, 0, 0]} />
      <Box position={[2, 2, 0]} />
      <Box position={[-2, -2, 0]} />
    </Canvas>
  );
}