import { Box,Toolbar } from '@mui/material'
import { SideBar,Navbar } from '../componentes'



export const Journallayout = ({children}) => {
  const drawerWidth = 280;
  return (
    <Box sx={{display:'flex'}}>

        <Navbar drawerWidth={drawerWidth}></Navbar>
        {/* NAVBAR */}

        {/* SIDEBAR */}
        <SideBar drawerWidth={drawerWidth}></SideBar>

        <Box component="main" sx={{flexGrow:1,p:3}}>

            <Toolbar></Toolbar> 

            {children}
            
        </Box>
    </Box>
  )
}
