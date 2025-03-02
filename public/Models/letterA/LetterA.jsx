import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function LetterA(props) {
  const { nodes, materials } = useGLTF('/Models/letterA/letterA.gltf');
  const letterRef = useRef();

  let targetRotation = Math.PI; 

  useEffect(() => {
    const handleMouseMove = (e) => {
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2; 
      targetRotation = Math.PI + normalizedX * -0.2; 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    const smoothSpeed = 1;
    
    if (letterRef.current) {
      letterRef.current.rotation.y += (targetRotation - letterRef.current.rotation.y) * smoothSpeed * delta;
    }
  });

  return (
    <group {...props} ref={letterRef} dispose={null}>
      <mesh geometry={nodes['?????????1'].geometry}>
        <meshPhysicalMaterial
          color={0x941718} 
          emissive={0x941718}
          roughness={0.327}
          metalness={1.5}
          envMapIntensity={0.548}
          reflectivity={2.5}
        />
      </mesh>
      <mesh geometry={nodes['?????????'].geometry}>
        <meshPhysicalMaterial
          color={0x202020}
          emissive={0x202020}
          roughness={0.327}
          metalness={1.5}
          envMapIntensity={0.548}
          reflectivity={1.7}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Models/letterA/letterA.gltf');
