import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'



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
        <Canvas style={{height:'90vh',width:'90vh',position:'absolute',left:'50vw',top:'-5vw',zIndex:3}}>
            <OrbitControls></OrbitControls>
            <Stars></Stars>
            <ambientLight intensity={.5}></ambientLight>
            <spotLight postion={[10,15,10]}/>
            <Torus></Torus>
        </Canvas>
    )
}