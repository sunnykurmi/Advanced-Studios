import React, { useEffect, useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export default function Victory(props) {
  const { nodes, materials } = useGLTF('/Models/victory/victory.gltf');
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const victoryRef = useRef();

  // Check if material exists, otherwise apply a default material
  useEffect(() => {
    if (materials && Object.keys(materials).length > 0) {
      Object.values(materials).forEach((material) => {
        material.metalness = 1; // Makes it reflective
        material.roughness = 0; // Smooth surface
        material.needsUpdate = true;
      });
    } else {
      console.warn("⚠️ No material found, applying default material.");
      nodes['??????????????'].material = new MeshStandardMaterial({
        color: 'gray',
        metalness: 1,
        roughness: 0,
      });
    }
  }, [materials]);

    // Manually track mouse movement
    useEffect(() => {
      const handleMouseMove = (e) => {
        setPointer({
          x: (e.clientX / window.innerWidth - 0.2) , // Normalize -1 to 1
          y: (e.clientY / window.innerHeight - 0.2) , // Normalize -1 to 1
        });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
    useFrame((state, delta) => {
      if (victoryRef.current) {
        victoryRef.current.rotation.x += (pointer.y - victoryRef.current.rotation.x) * delta * 2;
        victoryRef.current.rotation.y += (pointer.x - victoryRef.current.rotation.y) * delta * 2;
      }
    });

  return (
    <group {...props} ref={victoryRef} dispose={null}>
      <mesh geometry={nodes['??????????????'].geometry} material={nodes['??????????????'].material} />
    </group>
  );
}

useGLTF.preload('/Models/victory/victory.gltf');