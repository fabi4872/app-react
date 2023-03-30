import { Box, TextField } from '@mui/material';

export const AuthBasicTextFields = ({ type, component, autoComplete, id, name, value, label, variant, placeholder }) => {
  return (
    <Box
      component={ component }
      xs={ 12 } md={ 6 }
      sx={{ mt: 2 }}
      autoComplete={ autoComplete }
    >

      <TextField type={ type } id={ id } name={ name } value={ value } label={ label } variant={ variant } placeholder={ placeholder } fullWidth />
    </Box>
  )
}
