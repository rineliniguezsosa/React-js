import { Box } from '@mui/material'

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
