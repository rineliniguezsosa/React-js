import { AppBar,Toolbar,IconButton,Grid } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton>
              <MenuOutlined/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
