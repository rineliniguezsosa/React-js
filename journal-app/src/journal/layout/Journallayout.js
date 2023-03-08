import { Box } from '@mui/material'
import { SideBar,Navbar } from '../componentes'



export const Journallayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>

        <Navbar></Navbar>
        {/* NAVBAR */}

        {/* SIDEBAR */}
        <SideBar></SideBar>

        <Box component="main" sx={{flexGrow:1,p:3}}>
            {children}
        </Box>
    </Box>
  )
}
