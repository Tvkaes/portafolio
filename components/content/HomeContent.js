import React from 'react'
import { Typography,Grid } from "@mui/material";
import styles from "../../styles/Main.module.css"


const HomeContent =(props)=>{
    
    return(
        <div>
          <div className={styles.containerTitle}>
            <Typography variant="h3" className={styles.title} style={{fontFamily:'MontserratBold'}}>I want to be a fullstack developer</Typography>
            <Typography variant="subtitle2" className={styles.upSubtitle} style={{fontFamily:'MontserratBold'}} >Hey, I&#39;M Jonathan</Typography>
          </div>
        </div>
    )
}
export default HomeContent;