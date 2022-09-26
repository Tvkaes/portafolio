import React from 'react'
import { Canvas } from '@react-three/fiber'
import {  Stars } from '@react-three/drei'






export default function Star(){
    return(
        <Canvas style={{height:'100%',width:'100%'}}>
           
            <ambientLight intensity={.5}></ambientLight>
            <spotLight postion={[10,15,10]}/>
           
            <Stars></Stars>
        </Canvas>
    )
}