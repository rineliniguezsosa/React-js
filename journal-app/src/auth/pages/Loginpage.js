import { useDispatch,useSelector } from 'react-redux'
import { Grid,Typography,TextField,Button,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { Formik,Form,Field } from 'formik'
import * as Yup from 'yup';
import { AuthLayout } from '../layout/AuthLayout'
import { verificandoAutenticacion,startgooglesignin,startloginwithemailandpassword } from '../../store/Auth'
import { useMemo } from 'react'


export const Loginpage = () => {

    const { status } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const initialValues = {
        email:'',
        contraseña:''
    }

    const onSubmit = (values,onSubmitProps) =>{

    }
    const submitform = (event) =>{
        event.preventDefault()
        //console.log(email,password)
        dispatch(verificandoAutenticacion(email,password))
    }

    const estautenticado  = useMemo(() => status === 'verificando', [status])
    console.log(estautenticado)
  return (
    <AuthLayout titulo="Login">
        <Formik initialValues={initialValues}>
        <form onSubmit={submitform}>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                    name="email"
                    label="Correo" 
                    type="email"
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    ></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                        name="password"
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                    ></TextField>
                </Grid>

                <Grid container spacing={2} sx={{mb:2,mt:1}}>
                    <Grid item xs={12} sm={6}>
                        <Button disabled={estautenticado} type="submit" variant='contained' fullWidth>Login</Button>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Button disabled={estautenticado} onClick={()=> dispatch(startgooglesignin())} variant='contained' fullWidth>
                            <Typography  sx={{ml:1}}>Google</Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Link component={ RouterLink } to="/auth/registro">Crear una cuenta</Link>
                </Grid>

            </Grid>
        </form>
        </Formik>
    </AuthLayout>
  )
}
