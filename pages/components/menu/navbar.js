import React from "react";
import { Typography,Grid, IconButton } from "@mui/material";
import styles from '../../../styles/Navbar.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const Navbar = (props)=>{

    return(

       <div style={{zIndex:1}}>
          <Grid container style={{display:'flex',alignItems:'center',justifyContent:'center',padding:10,backgroundColor:'transparent'}}>
            <Grid item container lg={6} xs={6} >
              <Typography style={{fontFamily:"MontserratMedium"}}>Logo</Typography>
            </Grid>

            <Grid item container lg={6} xs={6} >
              <Grid item  lg={12} className={styles.menuContainer}>
                <Grid item xs={3}>
                <Typography className={styles.title}>Home</Typography>
                  </Grid>
                  <Grid item xs={3}>
                  <Typography className={styles.title}>About</Typography>
                    </Grid> 
                    <Grid item xs={3}>
                    <Typography className={styles.title}>Skills</Typography> 
                    </Grid>
                    <Grid item xs={2}>
                    <Typography className={styles.title}>Contact</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton>
                        <GitHubIcon></GitHubIcon>
                      </IconButton>

                    </Grid>
                
                
               
                

              </Grid>
              
            </Grid>

          </Grid>
          </div>
    )
}

export default Navbar;
