import { useEffect } from 'react';
import { useForm } from '../../hooks';
import { Typography } from '@mui/material';
import { AuthInput, AuthButton, AuthButtonContainer, AuthContainer, AuthFormContainer, AuthInputContainer, AuthLink, AuthLinkContainer } from '../layout';

export const RegisterPage = () => {

  const { nombres, apellidos, email, repeticionEmail, password, repeticionPassword, onChangeForm } = useForm({
    nombres: '',
    apellidos: '',
    email: '',
    repeticionEmail: '',
    password: '',
    repeticionPassword: ''
  });

  useEffect(() => {  
    return () => {
      
    }
  }, []);

  return (
    <AuthContainer>
      <AuthFormContainer>
        <Typography sx={{ mt: 1 }} variant="h6">Crear una cuenta</Typography>

        <AuthInputContainer>
          <AuthInput type="text" id="nombres" name="nombres" value={ nombres } label="Nombres" variant="outlined" placeholder="Nombres" autoComplete="off" xs={ 12 } md={ 12 } onChangeForm={ onChangeForm } />
          <AuthInput type="text" id="apellidos" name="apellidos" value={ apellidos } label="Apellidos" variant="outlined" placeholder="Apellidos" autoComplete="off" xs={ 12 } md={ 12 } onChangeForm={ onChangeForm } />
          <AuthInput type="email" id="email" name="email" value={ email } label="Email" variant="outlined" placeholder="Email" autoComplete="off" xs={ 12 } md={ 6 } onChangeForm={ onChangeForm } />
          <AuthInput type="email" id="repeticionEmail" name="repeticionEmail" value={ repeticionEmail } label="Repetición email" variant="outlined" placeholder="Repeticion email" autoComplete="off" xs={ 12 } md={ 6 } onChangeForm={ onChangeForm } />
          <AuthInput type="password" id="password" name="password" value={ password } label="Password" variant="outlined" placeholder="Password" autoComplete="off" xs={ 12 } md={ 6 } onChangeForm={ onChangeForm } />
          <AuthInput type="password" id="repeticionPassword" name="repeticionPassword" value={ repeticionPassword } label="Repetición password" variant="outlined" placeholder="Repetición password" autoComplete="off" xs={ 12 } md={ 6 } onChangeForm={ onChangeForm } />
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
