import { Grid } from '@mui/material';

export const AuthFormContainer = ({ children }) => {
  return (
    <Grid 
      item
      className="auth-form-container-box-shadow"
      xs={ 3 }
      sx={{ width: { sm: 450 }, backgroundColor: "white", padding: 3, borderRadius: 2 }} 
    >

      { children }

    </Grid>
  )
}
