import { Box,Drawer,Toolbar,Typography,Divider,List,ListItem,ListItemButton,ListItemIcon,Grid,ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

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

                <List>
                    {
                        ['Enero','Febrero','Marzo','Abril'].map(item => (
                            <ListItem key={item} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                       <TurnedInNot></TurnedInNot> 
                                    </ListItemIcon>

                                    <Grid container>
                                        <ListItemText primary={item}></ListItemText>
                                        <ListItemText secondary={'lorem'}></ListItemText>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
    </Box>
  )
}
