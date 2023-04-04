import { Journallayout } from "../layout/Journallayout"
import { NothingSelectedView } from "../views"
import { IconButton } from '@mui/material'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch,useSelector } from 'react-redux' 
import { startnewnote } from "../../store/journal"


export const Journalpage = () => {

  const dispatch = useDispatch()
  const { issaving,activo } = useSelector(state => state.journal)

  const onClickNote = () =>{
    dispatch(startnewnote())
  }
  
  return (
    <Journallayout>

        <NothingSelectedView/>

        {/* <Noteview/> */}

        <IconButton
        size="large"
        onClick={onClickNote}
        disabled={issaving}
        sx={{
          color:'white',
          backgroundColor:'red',
          ':hover':{backgroundColor:'red',opacity:0.9},
          position:'fixed',
          right:50,
          bottom:50
        }}
        >
          <AddOutlined sx={{fontSize:30}}></AddOutlined>
        </IconButton>

    </Journallayout>
  )
}
