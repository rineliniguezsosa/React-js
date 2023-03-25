import { AuthLayout } from "../layout/AuthLayout"
import { Grid,Typography,TextField,Button,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Formik,Form,Field,ErrorMessage } from 'formik'
import * as Yup from 'yup';

export const Registropage = () => {

    const initialValues = {
        displayName:'',
        email:'',
        constraseña:''
    }

    const onSubmit = (values) =>{
        console.log("registro page",values)
    }

    const validationSchema = Yup.object({
        displayName:Yup.string().required('El nombre es requerido'),
        email:Yup.string().email('el correo debe de tener un @').required(),
        contraseña:Yup.string().max(6,'La constraseña debe de contener más de 6 letras').required()
    })
    
  return (
    <AuthLayout titulo="Crear cuenta">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                    label="Nombre" 
                    type="text"
                    placeholder="Rinel"
                    fullWidth
                    name="displayName"
                    component={TextField}
                    ></Field>
                    <ErrorMessage name="displayName"></ErrorMessage>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                    label="Email" 
                    type="email"
                    component={TextField}
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    name="email"
                    ></Field>
                    <ErrorMessage name="email"></ErrorMessage>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                        label="Contraseña" 
                        type="password" 
                        placeholder="Contraseña"
                        fullWidth
                        component={TextField}
                        name="contraseña"
                    ></Field>
                    <ErrorMessage name="constraseña"></ErrorMessage>
                </Grid>

                <Grid container spacing={2} sx={{mb:2,mt:1}}>
                    <Grid item xs={12} >
                        <Button type="submit" variant='contained' fullWidth>Crear cuenta</Button>
                    </Grid>
                </Grid>

                <Grid container direction="row" justifyContent="end">
                    <Typography sx={{mr:1}}>Ya tienes cuenta? </Typography>
                    <Link component={ RouterLink } to="/auth/login">ingresar</Link>
                </Grid>

            </Grid>
        </Form>
        </Formik>
    </AuthLayout>
  )
}
