import { Google } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { AuthBasicTextFields, AuthButton, AuthButtonContainer, AuthContainer, AuthFormContainer, AuthLink, AuthLinkContainer } from '../layout';

export const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthFormContainer>
        <Typography sx={{ mb: 3 }} variant="h6">Iniciar sesión</Typography>

        <AuthBasicTextFields type="email" component="form" autoComplete="off" id="email" name="email" value="" label="Email" variant="outlined" placeholder="Email" />
        <AuthBasicTextFields type="password" component="form" autoComplete="off" id="password" name="password" value="" label="Password" variant="outlined" placeholder="Password" />

        <AuthButtonContainer>
          <AuthButton variant="contained" nombre="Google" color="error" onClick={ () => {} } xs={ 12 } md= { 6 } >
            <Google sx={{ mr: 1 }} />
          </AuthButton>
          <AuthButton variant="contained" nombre="Iniciar sesión" color="success" onClick={ () => {} } xs={ 12 } md= { 6 } /> 
        </AuthButtonContainer>

        <AuthLinkContainer>
          <AuthLink descripcion="Crear una cuenta" ruta="/auth/register" />
        </AuthLinkContainer> 
      </AuthFormContainer>
    </AuthContainer>
  )
}
