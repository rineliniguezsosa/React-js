import { Grid,Typography,TextField } from '@mui/material'

export const Loginpage = () => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{minHeight:'100vh',backgroundColor:'primary',padding:4}}>
        <Grid item xs={3} sx={{backgroundColor:'white',padding:3,borderRadius:2}}>
            <Typography variant="h5" sx={{mb:1}}>Login</Typography>
        </Grid>

        <form>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                    label="Correo" 
                    type="email"
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    ></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                    ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{mb:2,mt:1}}>

                </Grid>
            </Grid>
        </form>
    </Grid>
  )
}
