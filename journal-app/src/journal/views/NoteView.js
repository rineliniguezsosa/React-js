import {Grid,Typography,Button,TextField,IconButton} from '@mui/material'
import { SaveOutlined,UploadOutlined,DeleteOutline } from '@mui/icons-material'
import { ImagenGallery } from '../componentes'
import { useSelector,useDispatch } from 'react-redux'
import { useMemo,useEffect,useRef } from 'react'
import { useForm } from '../../hooks'
import { setactivenote,startsavingupdatenote,startuploadingfiles } from '../../store/journal'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const Noteview = () => {
  const { activo:nota,messagesaved } = useSelector(state => state.journal)
  const dispatch = useDispatch();
  const MySwal = withReactContent(Swal)
  const inputfileref = useRef()

  const {title,body,date,onInputChange,formState} = useForm(nota)

  useEffect(() => {
    dispatch(setactivenote(formState))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState])
  
  useEffect(() => {
    if(messagesaved.length > 0){
      MySwal.fire('nota actualizada',messagesaved,'success')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

    dispatch(startuploadingfiles(target.files))
  }

  const ondeletenote = () =>{
    dispatch(startdeletenote())
  }
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb:1}}>

        <Grid item>
            <Typography fontSize={39} fontWeight="light">{fecha}</Typography>
        </Grid>

        <Grid item>

            <input style={{display:'none'}} ref={inputfileref} onChange={oninputfilechange} multiple type="file"></input>

            <IconButton onClick={()=> inputfileref.current.click()} color="primary">
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
        
        <Grid container justifyContent="end">
            <Button onClick={ondeletenote} color="error" sx={{mt:2}}>
              <DeleteOutline></DeleteOutline>
              Borrar
            </Button>
        </Grid>
        {/* GALERY DE IMAGENES */}
        <ImagenGallery images={nota.imageurls}/>
    </Grid>
  )
}
