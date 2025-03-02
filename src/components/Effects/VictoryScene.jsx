import React from 'react';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Victory from '../../../public/Models/victory/Victory';

export const VictoryScene = () => {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            {/* Improved Lighting */}
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={4} castShadow />
            <pointLight position={[-5, -5, 5]} intensity={5} />

            <OrbitControls
                enablePan={false} enableRotate={false}
                // minDistance={30} maxDistance={30}
            />

            {/* 3D Model */}
            <Victory />

            {/* Improved Environment Map */}
            <Environment
                files="/Models/studio-glow.hdr"
                background={false}
                backgroundRotation={[-50, -400, 0]}
                preset='night'

                intensity={5}
            />
        </>
    );
};
