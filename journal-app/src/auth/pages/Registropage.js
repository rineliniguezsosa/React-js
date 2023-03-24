import { AuthLayout } from "../layout/AuthLayout"
import { Grid,Typography,TextField,Button,Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks"
import { Formik } from 'formik'

export const Registropage = () => {
    const initialForm = {
        displaName:'',
        email:'',
        constraseña:''
    }

    const forminputvalidaciones = {
        displayName:[(value)=> value.length <= 1,'El nombre es requerido'],
        email:[(value)=> value.includes('@'),'El email debe de tener un @'],
        contraseña:[(value)=> value.length >= 6,'La contraseña debe de ser mayor o igual a 6 caracteres']
    }

    const {displayName,email,contraseña,onInputChange,formState} = useForm(initialForm,forminputvalidaciones)

    const onsubmit = (event) => {
        event.preventDefault()
        console.log(formState)
    }
  return (
    <AuthLayout titulo="Crear cuenta">

        <form onSubmit={onsubmit}>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                    label="Nombre" 
                    type="text"
                    placeholder="Rinel"
                    fullWidth
                    name="displayName"
                    value={displayName}
                    onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                    label="Email" 
                    type="email"
                    placeholder="rineliniguezsosa@gmail.com"
                    fullWidth
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    ></TextField>
                </Grid>

                <Grid item xs={12} sx={{ mt: 2 }}>
                    <TextField 
                        label="Contraseña" 
                        type="password" 
                        placeholder="Contraseña"
                        fullWidth
                        name="contraseña"
                        value={contraseña}
                        onChange={onInputChange}
                    ></TextField>
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
        </form>

    </AuthLayout>
  )
}
