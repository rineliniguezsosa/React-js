import { Journallayout } from "../layout/Journallayout"
import { NothingSelectedView,Noteview } from "../views"
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'

export const Journalpage = () => {
  return (
    <Journallayout>

        <NothingSelectedView/>

        {/* <Noteview/> */}

        <IconButton
        size="large"
        sx={{
          color:'white',
          backgroundColor:'red',
          ':hover':{backgroundColor:'white',opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}
        >

        </IconButton>

    </Journallayout>
  )
}
