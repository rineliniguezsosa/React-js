import {Grid,Typography,Button,TextField} from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImagenGallery } from '../componentes'
import { useSelector,useDispatch } from 'react-redux'
import { useMemo,useEffect } from 'react'
import { useForm } from '../../hooks'
import { setactivenote } from '../../store/journal'


export const Noteview = () => {
  const { activo:nota } = useSelector(state => state.journal)
  const dispatch = useDispatch();

  const {title,body,date,onInputChange,formState} = useForm(nota)

  useEffect(() => {
    dispatch(setactivenote(formState))
  }, [formState])
  
  const fecha = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString()
  },[date])

  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb:1}}>

        <Grid item>
            <Typography fontSize={39} fontWeight="light">{fecha}</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{padding:2}}>
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
              name="titulo"
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
