import { AppBar,Toolbar,IconButton,Grid,Typography } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton>
              <MenuOutlined/>
            </IconButton>

            <Grid container direction="row" justifyContent="space-between">
                  <Typography variant="h6" noWrap component="div">JournalApp</Typography>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
