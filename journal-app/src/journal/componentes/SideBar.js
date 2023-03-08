import { Box } from '@mui/material'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box 
    component="nav"
    sx={{width:{sm:{drawerWidth},flexShrink:{sm:0}}}}
    >

    </Box>
  )
}
