"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Torus() {
  const ref = useRef<THREE.Mesh>(null!);
  // Rotation lente pour un fond vivant mais discret
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  useRef(() => {
    const animate = (t: number) => {
      if (!ref.current) return;
      ref.current.rotation.x = t * 0.00015;
      ref.current.rotation.y = t * 0.0001;
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
    return null as unknown as void;
  }, []);
  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1.2, 0.35, 220, 48]} />
      <meshPhongMaterial color="#4f46e5" shininess={20} wireframe transparent opacity={0.18} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 4.2], fov: 50 }}>
        <ambientLight intensity={0.9} />
        <pointLight position={[5, 5, 5]} intensity={0.6} />
        <Torus />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
      {/* Dégradé radial subtil pour fond */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,.10),rgba(0,0,0,.0))]" />
    </div>
  );
}
