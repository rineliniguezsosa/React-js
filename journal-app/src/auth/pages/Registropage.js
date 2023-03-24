import { AuthLayout } from "../layout/AuthLayout"
import { Grid,Typography,TextField,Button,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { Formik,Form,Field } from 'formik'

export const Registropage = () => {

    const initialValues = {
        displayName:'',
        email:'',
        constraseña:''
    }

    const forminputvalidaciones = {
        displayName:[(value)=> value.length <= 1,'El nombre es requerido'],
        email:[(value)=> value.includes('@'),'El email debe de tener un @'],
        contraseña:[(value)=> value.length >= 6,'La contraseña debe de ser mayor o igual a 6 caracteres']
    }

    
    const onsubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }

    const onSubmit = (values) =>{
        console.log("registro page",values)
    }
    
  return (
    <AuthLayout titulo="Crear cuenta">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
                    value={displayName}
                    onChange={onInputChange}
                    ></Field>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                    label="Email" 
                    type="email"
                    component={TextField}
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    ></Field>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <Field 
                        label="Contraseña" 
                        type="password" 
                        placeholder="Contraseña"
                        fullWidth
                        component={TextField}
                        name="contraseña"
                        value={contraseña}
                        onChange={onInputChange}
                    ></Field>
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
