import { Grid,Typography,TextField } from '@mui/material'

export const Loginpage = () => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight:'100vh',backgroundColor:'primary',padding:4}}>
        <Grid item xs={3} sx={{backgroundColor:'white',padding:3,borderRadius:2}}>
            <Typography variant="h5" sx={{mb:1}}>Login</Typography>
        </Grid>

        <form>
            <Grid item>

            </Grid>
        </form>
    </Grid>
  )
}
