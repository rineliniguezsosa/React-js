import { Box,Drawer,Toolbar,Typography,Divider,List } from '@mui/material'
import { useSelector } from 'react-redux'
import { SideBarItem } from './SideBarItem'

export const SideBar = ({drawerWidth}) => {
  const { displayName } = useSelector(state => state.auth)
  const { notas } = useSelector(state => state.journal)
  return (
    <Box 
    component="nav"
    sx={{width:{sm:drawerWidth,flexShrink:{sm:0}}}}
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
                        {displayName}
                    </Typography>
                </Toolbar>

                <Divider></Divider>

                <List>
                    {
                        notas.map(nota => (
                            <SideBarItem key={nota.id} {...nota}></SideBarItem>
                        ))
                    }
                </List>
            </Drawer>
    </Box>
  )
}
