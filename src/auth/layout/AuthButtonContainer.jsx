import { Grid } from "@mui/material"

export const AuthButtonContainer = ({ children }) => {
  return (
    <Grid
      container
      direction="row"
      spacing={ 2 }
      sx={{ mt: 2 }}
    >
  
      { children }
    
  </Grid>
  )
}
