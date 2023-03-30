import { Typography } from '@mui/material';
import { AuthBasicTextFields, AuthButton, AuthButtonContainer, AuthContainer, AuthFormContainer, AuthLink, AuthLinkContainer } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthFormContainer>
        <Typography sx={{ mb: 3 }} variant="h6">Crear una cuenta</Typography>

        <AuthBasicTextFields type="text" component="form" autoComplete="off" id="nombres" name="nombres" value="" label="Nombres" variant="outlined" placeholder="Nombres" />
        <AuthBasicTextFields type="text" component="form" autoComplete="off" id="apellidos" name="apellidos" value="" label="Apellidos" variant="outlined" placeholder="Apellidos" />
        <AuthBasicTextFields type="email" component="form" autoComplete="off" id="email" name="email" value="" label="Email" variant="outlined" placeholder="Email" />
        <AuthBasicTextFields type="password" component="form" autoComplete="off" id="password" name="password" value="" label="Password" variant="outlined" placeholder="Password" />

        <AuthButtonContainer>
          <AuthButton variant="contained" nombre="Crear cuenta" color="success" onClick={ () => {} } xs={ 12 } md= { 12 } /> 
        </AuthButtonContainer>

        <AuthLinkContainer>
          <AuthLink descripcion="Iniciar sesión" ruta="/auth/login" />
        </AuthLinkContainer> 
      </AuthFormContainer>
    </AuthContainer>
  )
}
