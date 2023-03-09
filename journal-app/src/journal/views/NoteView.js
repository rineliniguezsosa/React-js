import {Grid,Typography,Button} from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'

export const Noteview = () => {
  return (
    <Grid container direction="row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight="light">2 de agosto,2023</Typography>
        </Grid>

        <Grid item>
            <Button>Guardar</Button>
        </Grid>
    </Grid>
  )
}
