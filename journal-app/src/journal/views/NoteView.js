import {Grid,Typography,Button,TextField} from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImagenGallery } from '../componentes'
import { Formik,Field } from 'formik'
import { useSelector } from 'react-redux'


export const Noteview = () => {
  const { activo:nota } = useSelector(state => state.journal)
  return (
    <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{mb:1}}>

        <Grid item>
            <Typography fontSize={39} fontWeight="light">2 de agosto,2023</Typography>
        </Grid>

        <Grid item>
            <Button color="primary" sx={{padding:2}}>
              <SaveOutlined sx={{fontSize:30,mr:1}}></SaveOutlined>
              Guardar
            </Button>
        </Grid>
        <Formik>
        <Grid container>

            <TextField
              type="text"
              variant='filled'
              fullWidth
              placeholder="Ingrese un titulo"
              label="Titulo"
              sx={{border:'none',mb:1}}
            />

            <TextField
              type="text"
              variant='filled'
              fullWidth
              multiline
              placeholder="¡Que sucedio el día de hoy?"
              minRows={5}
            />

        </Grid>
        </Formik>
        {/* GALERY DE IMAGENES */}
        <ImagenGallery/>
    </Grid>
  )
}
