import { Grid } from '@mui/material';

export const AuthContainer = ({ children }) => {
  return (
    <Grid 
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }} 
    >
      
      { children }

    </Grid>
  )
}
