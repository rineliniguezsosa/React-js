import { AppBar,Toolbar,IconButton,Grid } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton>
              <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent="space-between">

            </Grid>
        </Toolbar>
    </AppBar>
  )
}
