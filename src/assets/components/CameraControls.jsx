import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';

function CameraControls() {
  const { camera } = useThree();
  const [autoPos, setAutoPos] = useState({ x: 0, y: 0, z: 0 });

  // Define camera properties in Leva
  const { posX, posY, posZ } = useControls({
    posX: { value: camera.position.x, min: -10, max: 10, step: .001 },
    posY: { value: camera.position.y, min: -10, max: 10, step: .001 },
    posZ: { value: camera.position.z, min: -10, max: 10, step: .001 },
  });

  useEffect(() => {
    // Update autoPos over time here...

    // Then update camera position
    camera.position.set(autoPos.x, autoPos.y, autoPos.z);
  }, [camera, autoPos]);

  return null; // This component does not render anything itself
}

export default CameraControls;