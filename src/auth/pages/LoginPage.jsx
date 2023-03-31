import { Google } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { AuthInput, AuthButton, AuthButtonContainer, AuthContainer, AuthFormContainer, AuthInputContainer, AuthLink, AuthLinkContainer } from '../layout';

export const LoginPage = () => {
  return (
    <AuthContainer>
      <AuthFormContainer>
        <Typography sx={{ mt: 1 }} variant="h6">Iniciar sesión</Typography>

        <AuthInputContainer>
          <AuthInput type="email" id="email" name="email" value="" label="Email" variant="outlined" placeholder="Email" autoComplete="off" xs={ 12 } md={ 12 } />
          <AuthInput type="password" id="password" name="password" value="" label="Password" variant="outlined" placeholder="Password" autoComplete="off" xs={ 12 } md={ 12 } />
        </AuthInputContainer>

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
