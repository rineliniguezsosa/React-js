import { ListItem,ListItemButton,ListItemIcon,Grid,ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'

export const SideBarItem = ({title = '',body,id}) => {
  return (
    <ListItem key={id} disablePadding>
        <ListItemButton>
                    <ListItemIcon>
                        <TurnedInNot></TurnedInNot> 
                    </ListItemIcon>

                    <Grid container>
                        <ListItemText primary={title}></ListItemText>
                        <ListItemText secondary={body}></ListItemText>
                    </Grid>
        </ListItemButton>
    </ListItem>
  )
}
