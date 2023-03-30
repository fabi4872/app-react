import { Button, Grid, Typography } from '@mui/material';

export const AuthButton = ({ variant, nombre, color, onClick, children, xs, md }) => {
  return (
    <Grid
      item
      xs={ xs } md={ md }
    >
      <Button variant={ variant } color={ color } onClick={ onClick } fullWidth >
        
        { children }
  
        <Typography>
            { nombre }
        </Typography>
      </Button>
    </Grid>
  )
}
