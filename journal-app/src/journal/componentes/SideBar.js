import { Box,Drawer,Toolbar,Typography,Divider } from '@mui/material'

export const SideBar = ({drawerWidth}) => {
  return (
    <Box 
    component="nav"
    sx={{width:{sm:{drawerWidth},flexShrink:{sm:0}}}}
    >
            <Drawer 
            variant='permanent' 
            open
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
            }}
            
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Rinel iñiguez
                    </Typography>
                </Toolbar>

                <Divider></Divider>
            </Drawer>
    </Box>
  )
}
