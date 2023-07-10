import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Scene = () => {
  const sphereRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta;
  });
  return (
    <>
      <group ref={groupRef}>
        <mesh ref={sphereRef} position-y={1} scale={1.5}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshBasicMaterial color="hsl(250, 70%, 70%)" wireframe />
        </mesh>
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshBasicMaterial color="yellow" />
        </mesh>
      </group>
    </>
  );
};

export default Scene;
