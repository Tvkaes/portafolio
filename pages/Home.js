import { Typography } from "@mui/material";
import React from "react";
import Navbar from "./components/menu/navbar";
import Image from "next/image";
import Wave from "react-wavify";
import styles from "../styles/Main.module.css"


const Home = ()=>{
    return(
        <div style={{backgroundColor:'white',width:'100%'}}>
            <div>
            <Navbar></Navbar>
            </div>

            <div style={{width:'100%',height:'63vh',backgroundColor:"white"}}>

               <div className={styles.containerTitle}>
               <Typography variant="h1" className={styles.title}>Tvkaes</Typography>
               <Typography variant="subtitle2" className={styles.upSubtitle}>Lorem ipsum dolor sit amet.</Typography>
               </div>
               <div className={styles.containerSubtitle}>
                <Typography className={styles.paragraph} variant='bodyw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin non mi in porta. Ut lorem odio, mattis eu tristique id, hendrerit eu ex.</Typography>
               </div>
               <Image src={'/wave.svg'} alt={"Wave"} layout={'fill'} style={{zIndex:'1'}}></Image>
                <Wave fill="url(#gradient)" className={styles.wave} options={{ points: 2, speed: 0.2, amplitude: 20 }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset={'30%'} stopColor="#d4af37" stopOpacity={'.2'}></stop>
                            <stop offset={"90%"} stopColor="#F00"></stop>
                        </linearGradient>
                    </defs>
                </Wave>
            </div>

            
           

        </div>
    )
}

export default Home;
