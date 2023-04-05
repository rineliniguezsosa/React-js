import { ListItem,ListItemButton,ListItemIcon,Grid,ListItemText } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material'
import { useMemo } from 'react'

export const SideBarItem = ({title = '',body,id}) => {
  const nuevotitulo = useMemo(() => title.length >= 15 ? title.substring(0,15) + '...' : title, [title])

  const onClickNota = () =>{

  }
  return (
    <ListItem key={id} disablePadding>
        <ListItemButton onClick={onClickNota}>
                    <ListItemIcon>
                        <TurnedInNot></TurnedInNot> 
                    </ListItemIcon>

                    <Grid container>
                        <ListItemText primary={nuevotitulo}></ListItemText>
                        <ListItemText secondary={body}></ListItemText>
                    </Grid>
        </ListItemButton>
    </ListItem>
  )
}
