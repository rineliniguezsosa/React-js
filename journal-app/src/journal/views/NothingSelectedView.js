import {Grid,Typography} from '@mui/material'
import { StartOutlined } from '@mui/icons-material'


export const NothingSelectedView = () => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight:'calc(100vh-110px)',backgroundColor:'primary',padding:4}}>
            <Grid item xs={12}>
                <StartOutlined sx={{fontSize:100,color:'white'}}></StartOutlined>
            </Grid>

            <Grid item xs={12}>
                <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
            </Grid>
    </Grid>
  )
}
