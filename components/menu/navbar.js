import React from "react";
import { Typography,Grid, IconButton, Divider, List, ListItem, ListItemButton, ListItemText,Button,Toolbar } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar'; 
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { MobileView } from "react-device-detect";
import { isMobile } from "react-device-detect";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const drawerWidth  = 240;
const navItems =['Home','About','Skill','Contact',<GitHubIcon key={'github'}/>]


const Navbar = (props)=>{

  const {window} = props;
  const [mobileOpen,setMobileOpen] =React.useState(false);

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography variant="h6" style={{fontFamily:'MontserratRegular',color:'black',padding:15}} gutterBottom>Logo</Typography>
      <Divider/>
      <List>
        {navItems.map((item)=>(
          <ListItem key={item}>
            <ListItemButton sx={{ textAlign: 'center',fontFamily:'MontserratMedium' }} >
              <ListItemText>
                <Typography style={{fontFamily:'MontserratMedium',textTransform:'none'}} variant={'body1'} gutterBottom>{item}</Typography>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

    return(
   <div>
     <Box sx={{ display: 'flex' }}>
     <ElevationScroll {...props}>
      <AppBar component="nav" style={{backgroundColor:'white'}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon style={{color:'black'}} />
          </IconButton>
          {isMobile ? <Typography style={{color:'black',fontFamily:'MontserratBold'}} variant={'body2'} >Logo</Typography>: null}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,fontFamily:'MontserratBold',color:'black'}}
          >
            Logo
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff',fontFamily:'MontserratMedium' }}>
                <Typography variant="body1" style={{fontFamily:'MontserratMedium',color:'black',textTransform:'none'}}>
                {item}
                </Typography> 
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
         
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        {props.children}
      </Box>
    </Box>
  </div>
    )
}

export default Navbar;
