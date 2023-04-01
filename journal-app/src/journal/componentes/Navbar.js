import { AppBar,Toolbar,IconButton,Grid,Typography } from "@mui/material"
import { MenuOutlined,LogoutOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'

export const Navbar = ({drawerWidth= 240}) => {
  const dispatch  = useDispatch()
  const Logout = () =>{

  }
  return (
    <AppBar position="fixed" sx={{
      width:{sm:`calc(100% -${drawerWidth}px)`},ml:{sm:`${drawerWidth}px`}
    }}>
        <Toolbar>
            <IconButton>
              <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" noWrap component="div">JournalApp</Typography>

                  <IconButton onClick={Logout} color="error">
                    <LogoutOutlined></LogoutOutlined>
                  </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
