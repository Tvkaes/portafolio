import React from 'react'
import { Typography,Grid } from "@mui/material";
import styles from "../../styles/Main.module.css"
import Index from '../3dModel';
import Star from '../3dModel/stars';
import { isMobile } from 'react-device-detect';


const HomeContent =(props)=>{
    
    return(
        <div>
          <div className={styles.containerTitle} style={{top:isMobile ? '27vh':0}}>
           <Grid container>
            <Grid item container xs={12} lg={12}>
              <Grid item xs={12} lg={12}>
            <Typography variant="subtitle2" className={styles.upSubtitle} style={{fontFamily:'MontserratBold'}} >Hey, I&#39;M Jonathan</Typography>
              </Grid>
              <Grid item xs={12} lg={12}>
              <Typography variant="h3" className={styles.title} style={{fontFamily:'MontserratBold'}}>I Want To Be A Fullstack Developer</Typography>
              </Grid>
            </Grid>
           </Grid>
          </div>
          <div style={{position:'absolute',left:'90vh'}}>
            <div style={{height:'100vh',width:'100vh',position:isMobile ? "absolute":"-moz-initial",right:isMobile ? '9vw':'0'}}>
              <Index></Index>
              </div>
          
          </div>
        </div>
    )
}
export default HomeContent;