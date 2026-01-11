'use client'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Plane, Loader, Stars } from '@react-three/drei'
import { Model as Droid } from './Droid'
import { Suspense } from 'react'

export default function RobotFace() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-black overflow-hidden">
                <div className="w-full h-full">
                    <Canvas shadows camera={{ position: [0, 3, 8], fov: 70 }}>
                        <ambientLight intensity={0.5} />
                        <directionalLight
                            position={[10, 10, 5]}
                            intensity={1}
                            castShadow
                        />
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <Suspense fallback={null}>
                            <Droid />
                            <Environment preset="city" />
                            <Plane
                                args={[100, 100]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                position={[0, 0, 0]}
                                visible={false}
                            />
                            <Plane
                                args={[100, 100]}
                                rotation={[-Math.PI / 2, 0, 0]}
                                position={[0, -0.01, 0]}
                                receiveShadow
                            >
                                <meshStandardMaterial color="#050505" />
                            </Plane>
                        </Suspense>
                        <OrbitControls />
                    </Canvas>
                </div>
            </div>
            <Loader
                containerStyles={{ background: 'black' }}
                innerStyles={{ background: '#333', width: '200px', height: '2px' }}
                barStyles={{ background: 'white', height: '2px' }}
                dataStyles={{ display: 'none' }}
            />
        </>
    );
}