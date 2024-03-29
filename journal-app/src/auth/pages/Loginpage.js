import { useDispatch,useSelector } from 'react-redux'
import { Grid,Typography,TextField,Button,Link,Alert } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { AuthLayout } from '../layout/AuthLayout'
import { startgooglesignin,startloginwithemailandpassword } from '../../store/Auth'
import { useMemo } from 'react'


export const Loginpage = () => {

    const { status,mensajeserror } = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const initialValues = {
        email:'',
        contrasena:''
    }

    const validationSchema = Yup.object({
        email:Yup.string().email('el correo debe de tener un @').required('El email es requerido'),
        contrasena:Yup.string().length(6,'La constraseña debe de contener más de 6 letras').required('La contraseña es requerida')
    })

    const onSubmit = (values,onSubmitProps) =>{
        dispatch(startloginwithemailandpassword(values))
        onSubmitProps.resetForm()
    }

    const estautenticado  = useMemo(() => status === 'verificando', [status])
    console.log(estautenticado)
  return (
    <AuthLayout titulo="Login">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                    name="email"
                    label="Correo" 
                    type="email"
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    as={TextField}
                    ></Field>
                    <ErrorMessage component="span" name="email"/>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                        name="contrasena"
                        label="Contraseña" 
                        type="password" 
                        placeholder='Contraseña' 
                        fullWidth
                        as={TextField}
                    ></Field>
                    <ErrorMessage component="span" name="contrasena"/>
                </Grid>

                <Grid container>
                    <Grid item xs={12} display={!!mensajeserror ? '': 'none'}>
                        <Alert severity="error">{mensajeserror}</Alert>
                    </Grid>
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
        </Form>
        </Formik>
    </AuthLayout>
  )
}
