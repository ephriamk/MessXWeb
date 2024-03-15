import React, { useRef, useState, useEffect } from "react";
import { useFrame, useThree, useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useFBX } from "@react-three/drei";
import { MeshBasicMaterial } from "three";
import { useControls } from "leva";

export default function Model(props) {
  const fbx = useLoader(FBXLoader, "./5kpac.fbx", null, (xhr) => {
    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  });
  const { state, size, camera } = useThree();
  const scale = size.width < 600 ? 0.02 : 0.05;
  const aspect = size.width / size.height;
  console.log(size);
  camera.aspect = aspect;
  camera.updateProjectionMatrix();
  fbx.position.set(0, 0, 0);
  fbx.rotation.set(-2.59, 0, 0);

  const boxRef = useRef();
  const [active, setActive] = useState(false);

  // Create a rotation state and control panel
  const [rotation, setRotation] = useState([0, 0, 0]);
  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: {
      value: rotation[0],
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    rotationY: {
      value: rotation[1],
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
    rotationZ: {
      value: rotation[2],
      min: -Math.PI,
      max: Math.PI,
      step: 0.01,
    },
  });

  // Update the rotation state when the control values change
  useEffect(() => {
    setRotation([rotationX, rotationY, rotationZ]);
  }, [rotationX, rotationY, rotationZ]);

  // Continuous rotation on the X-axis
  const [rotationFrameX, setRotationFrameX] = useState(0);

  useFrame((state, delta) => {
    state.camera.lookAt(boxRef.current.position);
    console.log(active, state.camera.position.z);

    // Update the rotation frame for the X-axis
  });

  return (
    <mesh
      onClick={(event) => setActive(!active)}
      ref={boxRef}
      scale={scale}
      position={[props.position[0], props.position[1], props.position[2]]}
      rotation={[rotationFrameX + rotation[0], rotation[1], rotation[2]]}
    >
      <primitive object={fbx} />
    </mesh>
  );
}
