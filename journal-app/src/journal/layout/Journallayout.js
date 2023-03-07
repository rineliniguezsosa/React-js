import { Box } from '@mui/material'
import { Navbar } from '../componentes/Navbar'


export const Journallayout = ({children}) => {
  return (
    <Box sx={{display:'flex'}}>
        {/* NAVBAR */}

        {/* SIDEBAR */}

        <Box component="main" sx={{flexGrow:1,p:3}}>
            {children}
        </Box>
    </Box>
  )
}
