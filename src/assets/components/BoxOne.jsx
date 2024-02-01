import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import "../styles/BoxOne.css";
import { useRef, useState } from "react";
import { useSpring, animated } from "@react-spring/three";

const Cube = ({ position, size, color }) => {
  
  const [active, setActive] = useState(true)


  useFrame(({ clock }) => {
    myMesh.current.rotation.x = Math.sin(clock.getElapsedTime());
    myMesh.current.scale.x = 1;
  });
  const myMesh = useRef();

  return (
    <mesh position={position} ref={myMesh} scale={active?1.5:1} onClick={()=>{
      setActive(!active)
    }} onDoubleClick={()=>{setActive(true)}}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

function BoxOne() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 2]} />
        <Cube position={[0, 0, 0]} color="blue" size={[1, 1, 1]} />
        {/* <group position={[0,0,0]}>
        <Cube position={[-1, -1, 1]} color="blue" size={[1, 1, 1]} />
        <Cube position={[1, 1, 1]} color="red" size={[1, 1, 1]} />
        <Cube position={[-1,1,1]} color="Black" size={[1,1,1]} />
        <Cube position={[1,-1,1]} color="yellow" size={[1,1,1]} />
        </group> */}
      </Canvas>
    </div>
  );
}

export default BoxOne;

// These are mesh listener events

// onClick={(e) => console.log("click")}
// onContextMenu={(e) => console.log("context menu")}
// onDoubleClick={(e) => console.log("double click")}
// onWheel={(e) => console.log("wheel spins")}
// onPointerUp={(e) => console.log("up")}
// onPointerDown={(e) => console.log("down")}
// onPointerOver={(e) => console.log("over")}
// onPointerOut={(e) => console.log("out")}
// onPointerEnter={(e) => console.log("enter")}
// onPointerLeave={(e) => console.log("leave")}
// onPointerMove={(e) => console.log("move")}
// onPointerMissed={() => console.log("missed")}
