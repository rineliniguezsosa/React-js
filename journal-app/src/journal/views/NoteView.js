import {Grid,Typography,Button,TextField} from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'

export const Noteview = () => {
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

        <Grid container>

        </Grid>
    </Grid>
  )
}
