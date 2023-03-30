import { Grid } from '@mui/material';

export const AuthLinkContainer = ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="end"
      sx={{ mt: 3 }}
    >
      
      { children }

    </Grid>
  )
}
