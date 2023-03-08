import { AppBar,Toolbar,IconButton,Grid,Typography } from "@mui/material"
import { MenuOutlined,LogoutOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="fixed" color="transparent">
        <Toolbar>
            <IconButton>
              <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" noWrap component="div">JournalApp</Typography>

                  <IconButton color="error">
                    <LogoutOutlined></LogoutOutlined>
                  </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
