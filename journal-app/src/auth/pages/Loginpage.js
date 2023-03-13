import { Grid,Typography,TextField,Button,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { AuthLayout } from '../layout/AuthLayout'

export const Loginpage = () => {
    const {} = useForm({
        email:'',
        contraseña:''
    })
  return (
    <AuthLayout titulo="Login">

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
                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>Login</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button variant='contained' fullWidth>
                            <Typography  sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Link component={ RouterLink } to="/auth/registro">Crear una cuenta</Link>
                </Grid>

            </Grid>
        </form>

    </AuthLayout>
  )
}
