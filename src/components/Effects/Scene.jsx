import React, { useEffect, useRef } from 'react'
import LetterA from '../../../public/Models/letterA/LetterA'
import { Environment, OrbitControls, PerspectiveCamera, Reflector } from '@react-three/drei'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useFrame } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

export const Scene = ({ progress }) => {
    const hdrTexture = '/Models/studio-glow.hdr' 

    const cameraRef = useRef(null)

    useFrame(() => {
        cameraRef.current.lookAt(0, 0, 0)
    })

    useEffect(() => {
        const startPosition = { x: 0, y: 0, z: 500 };
        const endPosition = { x: 0, y: 0, z: 0 };
        gsap.to(cameraRef.current.position, {
            x: startPosition.x + progress * (endPosition.x - startPosition.x),
            y: startPosition.y + progress * (endPosition.y - startPosition.y),
            z: startPosition.z + progress * (endPosition.z - startPosition.z),
            duration: 1,
            ease: "power2"
        });
    }, [progress]);


    return (
        <>
            <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 500]} />
            <ambientLight intensity={1} />
            <directionalLight color={0xffffff} intensity={1} position={[0.5871, 0.25, 0]} />
            <directionalLight color={0xffffff} intensity={1} position={[-0.5871, 0.25, 0]} />
            <OrbitControls
                enablePan={false} enableRotate={false}
            // minDistance={300} maxDistance={300}
            />
            <LetterA position={[0, -110, 0]} />

            <Environment
                environmentIntensity={.5}
                environmentRotation={[0, Math.PI / 1.9, 0]}
                background={false} 
                files={hdrTexture}
            />
            {/* <axesHelper args={[500]} /> */}
        </>

    )
}
