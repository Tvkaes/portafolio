import { Typography } from "@mui/material";
import React from "react";
import Navbar from "../components/menu/navbar";
import Wave from "react-wavify";
import styles from "../styles/Main.module.css"
import Index from "../components/3dModel/index";
import HomeContent from "../components/content/HomeContent";





const Home = ()=>{
    return(
        <div style={{backgroundColor:'white',width:'100%',height:'100vh'}}>
            <div style={{width:'100%',height:'100vh'}}>

              <HomeContent></HomeContent>
               {/* <div className={styles.containerSubtitle}>
                <Typography className={styles.paragraph} variant='bodyw'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin non mi in porta. Ut lorem odio, mattis eu tristique id, hendrerit eu ex.</Typography>
               </div> */}
               {/* <div>
                <Index></Index>
               </div> */}
               {/* <Image src={'/wave.svg'} alt={"Wave"} layout={'fill'} style={{zIndex:'1'}}></Image> */}
               {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{zIndex:'1',position:'absolute',top:'16.4vw'}} >
                <path fill="#fff" fill-opacity="1" d="M0,32L60,48C120,64,240,96,360,90.7C480,85,600,43,720,58.7C840,75,960,149,1080,192C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                </path>
               </svg> */}
               
                {/* <Wave fill="url(#gradient)" className={styles.wave} options={{ points: 2, speed: 0.2, amplitude: 20 }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset={'30%'} stopColor="#d4af37" stopOpacity={'.2'}></stop>
                            <stop offset={"90%"} stopColor="#F00"></stop>
                        </linearGradient>
                    </defs>
                </Wave> */}
            </div>
        </div>
    )
}

export default Home;
Home.Layout = Navbar

