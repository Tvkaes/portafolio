import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Model } from '../../public/Jelly'



function Torus(){
    return(
        <mesh >
            <torusKnotBufferGeometry attach={'geometry'}  ></torusKnotBufferGeometry>
            <meshNormalMaterial attach={'material'} color='red' wireframe={true}></meshNormalMaterial>
        </mesh>
    )
}

export default function Index(){
    return(
        <Canvas style={{height:'100vh',width:'100vh'}}>
            <OrbitControls></OrbitControls>
            <ambientLight intensity={.5}></ambientLight>
            <spotLight postion={[10,15,10]}/>
            <Model></Model>
        </Canvas>
    )
}