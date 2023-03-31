import { useEffect } from 'react';
import { Grid, TextField } from '@mui/material';

export const AuthInput = ({ type, id, name, value, label, variant, placeholder, autoComplete, xs, md, onChangeForm }) => {

  const onChange = ({ target }) => {
    onChangeForm( target );
  }

  useEffect(() => {  
    return () => {
      
    }
  }, []);

  return (
    <Grid
      item
      xs={ xs } md={ md }
    >
      <TextField type={ type } id={ id } name={ name } value={ value } label={ label } variant={ variant } placeholder={ placeholder } autoComplete={ autoComplete } onChange={ onChange } fullWidth />
    </Grid>
  )
}
