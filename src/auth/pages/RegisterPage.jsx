import { Typography } from '@mui/material';
import { AuthInput, AuthButton, AuthButtonContainer, AuthContainer, AuthFormContainer, AuthInputContainer, AuthLink, AuthLinkContainer } from '../layout';

export const RegisterPage = () => {
  return (
    <AuthContainer>
      <AuthFormContainer>
        <Typography sx={{ mt: 1 }} variant="h6">Crear una cuenta</Typography>

        <AuthInputContainer>
          <AuthInput type="text" id="nombres" name="nombres" value="" label="Nombres" variant="outlined" placeholder="Nombres" autoComplete="off" xs={ 12 } md={ 12 } />
          <AuthInput type="text" id="apellidos" name="apellidos" value="" label="Apellidos" variant="outlined" placeholder="Apellidos" autoComplete="off" xs={ 12 } md={ 12 } />
          <AuthInput type="email" id="email" name="email" value="" label="Email" variant="outlined" placeholder="Email" autoComplete="off" xs={ 12 } md={ 6 } />
          <AuthInput type="email" id="repeticion-email" name="repeticion-email" value="" label="Repetición email" variant="outlined" placeholder="Repeticion email" autoComplete="off" xs={ 12 } md={ 6 } />
          <AuthInput type="password" id="password" name="password" value="" label="Password" variant="outlined" placeholder="Password" autoComplete="off" xs={ 12 } md={ 6 } />
          <AuthInput type="password" id="repeticion-password" name="repeticion-password" value="" label="Repetición password" variant="outlined" placeholder="Repetición password" autoComplete="off" xs={ 12 } md={ 6 } />
        </AuthInputContainer>

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
