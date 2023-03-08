import { AppBar,Toolbar,IconButton } from "@mui/material"
import { MenuOutlined } from '@mui/icons-material'

export const Navbar = () => {
  return (
    <AppBar position="fixed">
        <Toolbar>
            <IconButton>
                <MenuOutlined></MenuOutlined>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}
