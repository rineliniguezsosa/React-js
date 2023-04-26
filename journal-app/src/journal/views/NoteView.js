import {Grid,Typography,Button,TextField,IconButton} from '@mui/material'
import { SaveOutlined,UploadOutlined } from '@mui/icons-material'
import { ImagenGallery } from '../componentes'
import { useSelector,useDispatch } from 'react-redux'
import { useMemo,useEffect,useRef } from 'react'
import { useForm } from '../../hooks'
import { setactivenote,startsavingupdatenote } from '../../store/journal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Noteview = () => {
  const { activo:nota,messagesaved } = useSelector(state => state.journal)
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal)

  const {title,body,date,onInputChange,formState} = useForm(nota)

  useEffect(() => {
    dispatch(setactivenote(formState))
  }, [formState])
  
  useEffect(() => {
    if(messagesaved.length > 0){
      MySwal.fire('nota actualizada',messagesaved,'success')
    }
  }, [messagesaved])

  const fecha = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString()
  },[date])

  const savenote = () =>{
    dispatch(startsavingupdatenote())
  }

  const oninputfilechange = ({target}) =>{
    if(target.files === 0){ return;}
  }
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb:1}}>

        <Grid item>
            <Typography fontSize={39} fontWeight="light">{fecha}</Typography>
        </Grid>

        <Grid item>

            <input onChange={oninputfilechange} multiple type="file"></input>

            <IconButton color="primary">
              <UploadOutlined></UploadOutlined>
            </IconButton>

            <Button onClick={savenote} color="primary" sx={{padding:2}}>
              <SaveOutlined sx={{fontSize:30,mr:1}}></SaveOutlined>
              Guardar
            </Button>
        </Grid>

        <Grid container>

            <TextField
              type="text"
              variant='filled'
              fullWidth
              placeholder="Ingrese un titulo"
              label="Titulo"
              sx={{border:'none',mb:1}}
              name="title"
              value={title}
              onChange={onInputChange}
            />

            <TextField
              type="text"
              variant='filled'
              fullWidth
              multiline
              placeholder="¡Que sucedio el día de hoy?"
              minRows={5}
              name="body"
              value={body}
              onChange={onInputChange}
            />

        </Grid>
        
        {/* GALERY DE IMAGENES */}
        <ImagenGallery/>
    </Grid>
  )
}
