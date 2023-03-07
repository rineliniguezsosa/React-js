import { Grid,Typography } from '@mui/material'

export const AuthLayout = ({children,titulo = ''}) => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight:'100vh',backgroundColor:'primary',padding:4}}>

        <Grid item xs={3} sx={{backgroundColor:'white',padding:3,borderRadius:2,width:{sm:450}}}>
            <Typography variant="h5" sx={{mb:1}}>{titulo}</Typography>
        </Grid>

        {children}
    </Grid>
  )
}
